const removeVideo = document.getElementById('removeVideo');
var y;

var x = setInterval(controllaVideo,500);

removeVideo.addEventListener("ended",function(){
  window.location.replace("Page3Ventoy.html");
  clearInterval(x);
})

function controllaVideo(){
  y = window.innerHeight;
  if(y <= 700){
    removeVideo.hidden = true;
    removeVideo.pause();
  }else{
    removeVideo.play();
    removeVideo.hidden = false;
  }
}
