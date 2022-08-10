const backButton = document.getElementById('backButton');
var x = 0;

backButton.addEventListener("click",function(){
  x = 5;
  localStorage.setItem('backButtonValue', x);
  window.location.replace("../Page3Ventoy.html");
})
