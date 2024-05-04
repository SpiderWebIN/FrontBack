// Play front video and pause back video
function playFrontVideo() {
    var frontVideo = document.getElementById('front-video');
    var backVideo = document.getElementById('back-video');
    frontVideo.play();
    backVideo.pause();
  }
  
  // Play back video and pause front video
  function playBackVideo() {
    var frontVideo = document.getElementById('front-video');
    var backVideo = document.getElementById('back-video');
    backVideo.play();
    frontVideo.pause();
  }
  