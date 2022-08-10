const text1 = document.getElementById('root');
const text3 = document.getElementById('resolving');
const text4 = document.getElementById('looking');
const notFound = document.getElementById('notFound');
const retry = document.getElementById('tryAgain');
const checkUserSelection = document.getElementById('checkUserSelection');
const text5 = document.getElementById('packageFound');




var fontSize = "1.3rem";
var timerText1 = 1000;
var timerText2 = 2000;
var timerText3 = 3600;
var timerText4 = 6000;
var font = "Source Code Pro, monospace";
var whiteColor = "#04d9ff";
var redColor = "#BB2929";

function printText1(){
  text1.hidden = false;
  text1.style.color = "#2a70da";
  text1.style.fontSize = fontSize;
  text1.style.fontFamily = font;
  text1.innerHTML = "<span id = 'blink'> </span> root <span id='archisio'></span>";

  const text2 = document.getElementById('archisio');
  const blink = document.getElementById('blink');
  blink.style.color = "#04d9ff";

  text2.style.color = "#04d9ff";
  text2.style.fontSize = fontSize;
  text2.innerHTML = "archisio # pacman -S reflectior";

  /*
  setTimeout(function(){
    text1.remove();
  }, 1000)
  */
}

function printText2(){
  text3.hidden = false;
  text3.style.color = whiteColor;
  text3.style.fontSize = fontSize;
  text3.style.fontFamily = font;
  text3.innerHTML = "resolving dependencies<span id = p1 class = 'stile'></span><span id = p2 class = 'stile'></span><span id = p3 class = 'stile'></span>";

  const p1 = document.getElementById('p1');
  const p2 = document.getElementById('p2');
  const p3 = document.getElementById('p3');


  setTimeout(function(){
    p1.innerHTML = ".";
  },100)

  setTimeout(function(){
    p2.innerHTML = ".";
  },400)

  setTimeout(function(){
    p3.innerHTML = ".";
  },800)

  /*
  setTimeout(function(){
    text3.remove();
  }, 1500)
  */
}

function printText3(){
  text4.hidden = false;
  text4.style.color = whiteColor;
  text4.style.fontSize = fontSize;
  text4.style.fontFamily = font;
  text4.innerHTML = "looking for conflicting packages<span id = p4 class = 'stile'></span><span id = p5 class = 'stile'></span><span id = p6 class = 'stile'></span>";


  setTimeout(function(){
    p4.innerHTML = ".";
  },100)

  setTimeout(function(){
    p5.innerHTML = ".";
  },400)

  setTimeout(function(){
    p6.innerHTML = ".";
  },800)

  /*
  setTimeout(function(){
    text4.remove();
  }, 2000)
  */
}


//Parte per bruteForcing finto

function printCantAcces(){
  var circle = "<span class='loadingCircle'> </span>";


  notFound.hidden = false;
  notFound.style.color = "red";
  notFound.style.fontSize = fontSize;
  notFound.style.fontFamily = font;
  notFound.innerHTML = "Can't access to the file, wrong password!" + circle;
}

function printBruteForcing(){
  retry.hidden = false;
  retry.style.color = "orange";
  retry.style.fontSize = fontSize;
  retry.style.fontFamily = font;
  retry.innerHTML = "Bruteforcing passwords<span id = p7 class = 'stile'></span><span id = p8 class = 'stile'></span><span id = p9 class = 'stile'></span>"

  setTimeout(function(){
    p7.innerHTML = ".";
  },100)

  setTimeout(function(){
    p8.innerHTML = ".";
  },400)

  setTimeout(function(){
    p9.innerHTML = ".";
  },800)
}



function printOpeningPassword(){
  checkUserSelection.hidden = false;
  checkUserSelection.style.color = "red";
  checkUserSelection.style.fontSize = fontSize;
  checkUserSelection.style.fontFamily = font;
  checkUserSelection.innerHTML = "Attention this operation may damage your computer!!";

  const yesOrNo = document.getElementById('YesOrNo');

  yesOrNo.hidden = false;


}




function passwordListTrying(){

  var y = setInterval(function(){
      const e = document.createElement('p');
      const c = document.createElement('p');
      e.style.color = "white";
      e.style.fontFamily = font;
      e.style.fontSize = fontSize;
      c.style.color = "green";
      c.style.fontFamily = font;
      c.style.fontSize = fontSize;
      document.body.appendChild(e);
      var randomstring = Math.random().toString(36).slice(-8);
      e.innerHTML = 'Password:' + randomstring;
      var x2 = Math.floor((Math.random() * 8) + 1);
      if(x2 == 5){
        document.body.appendChild(c);
        c.innerHTML = "Password Hacked:" + randomstring;
        if(randomstring == randomstring){
          setTimeout(redirect,1500);
        }
        clearInterval(y);
      }

      }, 800)


}

setTimeout(printText1, timerText1);
setTimeout(printText2, timerText2);
setTimeout(printText3, timerText3);

var x = Math.floor((Math.random() * 6) + 1);
if(x == 2){
  setTimeout(printCantAcces,5000);
  setTimeout(printOpeningPassword,5500);
  function getKey(e)
  {
      if(e.keyCode == 89){
        setTimeout(printBruteForcing, 2000);
        setTimeout(passwordListTrying, 4000);
      }
      if(e.keyCode == 78){
        const k = document.createElement('p');
        k.style.color = "red";
        k.style.fontFamily = font;
        k.style.fontSize = fontSize;
        document.body.appendChild(k);
        k.innerHTML = "Redirecting to bootMenu!";
        setTimeout(function(){
          window.location.replace("Boot.html");
        }, 1000)
      }
  }
}else{
  setTimeout(printText4,5000);
  setTimeout(redirect,5800);
}

document.onkeyup = getKey;

//Fine Parte Per Bruteforcing Finto


var num = localStorage.getItem('numero'); // Pagine Principali
var scratchString = localStorage.getItem('scratchString');
var pythonString = localStorage.getItem('pythonString');
var javaString = localStorage.getItem('javaString');
var ventoyString = localStorage.getItem('ventoyString');
var infoString = localStorage.getItem('infoString');
var stringVentoy = "<span style='color:blue'>VentoyScreen.desktop</span>"



function redirect(){
  if(num == 1){
    location.href = "PagineIllustrate/scratch.html";
  }
  if(num == 2){
    location.href = "PagineIllustrate/python.html";
  }
  if(num == 3){
    location.href = "PagineIllustrate/java.html";
  }
  if(num == 4){
    location.href = "PagineIllustrate/Info_Credits.html";
  }
}

function printText4(){
  text5.hidden = false;
  text5.style.color = whiteColor;
  text5.style.fontSize = fontSize;
  text5.style.fontFamily = font;
  if(num == 1){
    text5.innerHTML = "Packages (1) " + scratchString;
  }
  if(num == 2){
    text5.innerHTML = "Packages (1) " + pythonString;
  }
  if(num == 3){
    text5.innerHTML = "Packages (1) " + javaString;
  }
  if(num == 4){
    text5.innerHTML = "Packages (1) " + infoString;
  }

  /*
  setTimeout(function(){
    text5.remove();
  }, 2500)
  */
}

//setTimeout(printText4, timerText4);


//setTimeout(redirect, 9000);
