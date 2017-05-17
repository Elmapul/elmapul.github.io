//@autor igor giuseppe
var start = null;
var x =100;
var y=100;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var grd = ctx.createRadialGradient(x, x, 0, x, x, 10);
var offX=10;
var offY=10;

function step(timestamp) {
  if (!start) start = timestamp;
//grd = ctx.createRadialGradient(x+offX, y+offY, 0, x+offX, y+offY, 10);
ctx.clearRect(0,0,400,400);
//ctx.fillStyle = grd;

 
for (offX=-200; offX<40;offX+=20){
for (offY=-200; offY<40;offY+=20){
grd = ctx.createRadialGradient(x+offX, y+offY, 0, x+offX, y+offY, 10);
grd.addColorStop(0.4, "white");
grd.addColorStop(1, "red");
ctx.fillStyle = grd;
ctx.beginPath();
ctx.arc(x+offX,y+offY,10,0,2*Math.PI);
ctx.fill();
}}

x++;
y++;
x=x%100;
y=y%100;
    window.requestAnimationFrame(step);
  
}
//window.requestAnimationFrame(step);
