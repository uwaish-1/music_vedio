let progress = document.getElementById("progress");
let song = document.getElementById("song");
let video = document.querySelector(".background-video");
let ctrl = document.getElementById("ctrl");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
  console.log("Metadata loaded. Duration set to: " + song.duration);
};

function playpause() {
  if (ctrl.classList.contains("fa-pause")) {
    song.pause();
    video.pause();
    ctrl.classList.remove("fa-pause");
    ctrl.classList.add("fa-play");
    console.log("Paused both audio and video.");
  } else {
    song.play();
    video.play();
    ctrl.classList.add("fa-pause");
    ctrl.classList.remove("fa-play");
    console.log("Playing both audio and video.");
  }
}

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 1000);
}

progress.onchange = function () {
  song.currentTime = progress.value;
  video.currentTime = progress.value;
  song.play();
  video.play();
  ctrl.classList.add("fa-pause");
  ctrl.classList.remove("fa-play");
  console.log("Progress changed. Current time set to: " + progress.value);
};

song.ontimeupdate = function () {
  progress.value = song.currentTime;
  if (Math.abs(song.currentTime - video.currentTime) > 0.5) {
    video.currentTime = song.currentTime;
    console.log("Syncing video time to audio time.");
  }
};

video.ontimeupdate = function () {
  if (Math.abs(video.currentTime - song.currentTime) > 0.5) {
    song.currentTime = video.currentTime;
    console.log("Syncing audio time to video time.");
  }
};
let songs = [
    {
      video: "./assets/softly_vdo.mp4",
      audio: "./assets/Softly.mp3",
      image: "./assets/softly_img.png",
      title: "Softly",
      artist: "Karan Aujla Ft. IKKY"
    },
    {
      video: "./assets/wanna_vdo.mp4",
      audio: "./assets/wanna_song.mp3",
      image: "./assets/wanna.png",
      title: "I Wanna Be Yours",
      artist: "Arctic Monkeys"
    },
    {
      video: "./assets/gasolina.mp4",
      audio: "./assets/gasolina.mp3",
      image: "./assets/gasolina_img.png",
      title: "Gasolina",
      artist: "Daddy Yankee"
    },
    
    {
      video: "./assets/despcito_vdo.mp4",
      audio: "./assets/despacito.mp3",
      image: "./assets/despacito_img.png",
      title: "Despacito",
      artist: "Luis Fons Ft. Daddy Yankee"
    },
    {
        video: "./assets/mock_vdo.mp4",
        audio: "./assets/mock_song.mp3",
        image: "./assets/mocking_img.png",
        title: "MockingBird",
        artist: "Eminem"
      }
  ];
  let currentSongIndex = 0;
  function forward() {
    
    currentSongIndex = (currentSongIndex + 1) % songs.length;
  
    
    video.src = songs[currentSongIndex].video;

    song.src = songs[currentSongIndex].audio;
   
    document.querySelector(".song-img").src = songs[currentSongIndex].image;
  
    
    document.querySelector("h1").textContent = songs[currentSongIndex].title;
    document.querySelector("p").textContent = songs[currentSongIndex].artist;
  
  
    video.play();
    song.play();
  
   
    progress.max = song.duration;
    progress.value = 0;
  
    
    ctrl.classList.add("fa-pause");
    ctrl.classList.remove("fa-play");
  }
  function backward() {
    
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  
    
    video.src = songs[currentSongIndex].video;
  
    song.src = songs[currentSongIndex].audio;
    
    document.querySelector(".song-img").src = songs[currentSongIndex].image;
  
    
    document.querySelector("h1").textContent = songs[currentSongIndex].title;
    document.querySelector("p").textContent = songs[currentSongIndex].artist;
  
    video.play();
    song.play();
  
    
    progress.max = song.duration;
    progress.value = 0;
  
    ctrl.classList.add("fa-pause");
    ctrl.classList.remove("fa-play");
  }
  
  