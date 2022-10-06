var scratch = document.getElementById('Scratch');
var python = document.getElementById('Python');
var java = document.getElementById('Java');
var info = document.getElementById('Info')
var backButton = document.getElementById('backButton');


var value = 0;
var stringScratch = "<span style='color:red'>Scratch_visual_programming_language v3.0.txt</span>";
var stringPython = "<span style='color:red'>Python_programming_language v3.10.4.txt</span>";
var stringJava = "<span style='color:red'>Java_object-oriented_programming_language SE 16.txt</span>";
var stringInfo = "<span style='color:red'>Info_credits.txt</span>"


scratch.addEventListener("click", function(){
  value = 1;
  localStorage.setItem('numero', value);
  localStorage.setItem('scratchString', stringScratch);
  window.location.replace("loadingScreen.html");
});

python.addEventListener("click", function(){
  value = 2;
  localStorage.setItem('numero', value);
  localStorage.setItem('pythonString', stringPython);
  window.location.replace("loadingScreen.html");
})

java.addEventListener("click", function(){
  value = 3;
  localStorage.setItem('numero', value);
  localStorage.setItem('javaString', stringJava);
  window.location.replace("loadingScreen.html");
})

info.addEventListener("click", function(){
  value = 4;
  localStorage.setItem('numero', value);
  localStorage.setItem('infoString', stringInfo);
  window.location.replace("loadingScreen.html");
})



/*
'<p style="color:red">root</p><p style="color:white">archisio # pacman -S reflectior</p>'
'<p style="color:white">resolving dependencies...</p>'
'<p style="color:white">looking for conflicting packages...</p>'
'<p style="color:white"> Packages (1) reflectior-2020.12.7.1-1</p>'
*/
