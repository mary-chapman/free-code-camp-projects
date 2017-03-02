var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
ctx.strokeStyle = '#28d1fa';
ctx.lineWidth = 17;
ctx.lineCap = 'round';
ctx.shadowBlur = 20;
ctx.shadowColor = '#21d1fa';

//function to convert into radians
function degToRad(degree) {
  var factor = Math.PI/180;
  return degree*factor;
}


function renderTime() {
  var now = new Date();
  var today = now.toDateString();
  var time = now.toLocaleTimeString();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var milliseconds = now.getMilliseconds();
  var newSeconds = seconds+(milliseconds/1000);

  //background (can use any sort of css in between the quotes)
  gradient = ctx.createRadialGradient(250, 250, 5, 250, 250, 300);
  gradient.addColorStop(0, '#09303a');
  gradient.addColorStop(1, 'black');
  ctx.fillStyle = gradient;
  //ctx.fillStyle = '#333333';
  //fillRect - 4args (start(x), start(y), end(x), end(y))
  ctx.fillRect(0, 0, 500, 500);

  //HOURS
  //begins the circle
  ctx.beginPath();
  //.ARC args(start(x), start(y), radius, where to start the arc (radians), where to end(randians))
  //since 0 starts in the middle of the circle, the clock is offset by 90 degrees
  ctx.arc(250, 250, 200, degToRad(270), degToRad((hours*15) - 90));
  //writes out the circle
  ctx.stroke();

  //minutes
  ctx.beginPath();
  ctx.arc(250, 250, 170, degToRad(270), degToRad((minutes*6) - 90));
  ctx.stroke();

  //seconds
  ctx.beginPath();
  ctx.arc(250, 250, 140, degToRad(270), degToRad((newSeconds*6) - 90));
  ctx.stroke();

  //Date
  ctx.font = "25px Arial";
  ctx.fillStyle = '#28d1fa'
  ctx.fillText(today, 160, 250);

  //time
  ctx.font = "15px Arial";
  ctx.fillStyle = '#28d1fa'
  ctx.fillText(time, 160, 280);

}
setInterval(renderTime, 40);

//var dataURL = canvas.toDataUrl();
//document.getElement('myImage').src = dataURL;

/*
var counter = 0;
var i = setInterval(function(){
    //do something

    counter++;
    if(counter === 10) {
        clearInterval(i);
    }
}, 200);
*/
