"use strict";
(function(){
window.onload = function () {


  var btnStart = document.getElementById("start");
  var btnStop = document.getElementById("stop");
  document.getElementById("stop").disabled = true;


  //set selected size
  document.getElementById("sizeSelection").onchange= setSize;
  document.getElementById("turbo").onchange= setSpeed;


  btnStart.onclick = animate;
  btnStop.onclick = stopAnim;


}
var x=null;
var speed=250;
var typedText="";
var selectedAnim="Blank";
function animate() {
  selectedAnim=  document.getElementById("animationList").value;
  let arr = ANIMATIONS[selectedAnim].split("=====");
  var i=0;
  //enable stop
  document.getElementById("stop").disabled = false;
  //save typed text before viewing the animation
  typedText= document.getElementById("textField").value;
  
  
  x= setInterval(changeText, speed);
  document.getElementById("start").disabled = true;
  document.getElementById("animationList").disabled = true;


  function changeText() {
  
    if (i < (arr.length - 1)) {
      i = i + 1;
    } else if (i === (arr.length - 1)) {
      i = 0;
    }
    document.getElementById("textField").value = arr[i];
  }
}
function stopAnim(){
  clearInterval(x);
  document.getElementById("start").disabled = false;
  document.getElementById("animationList").disabled = false;
  document.getElementById("stop").disabled = true;

  document.getElementById("textField").value = typedText;

  
}

function setSize(){
  document.getElementById("textField").style.fontSize= document.getElementById("sizeSelection").value ;
}

function setSpeed(){
  if(document.getElementById("turbo").checked){
    speed=50;
  }else{
    speed=250;
  }
}

})();
