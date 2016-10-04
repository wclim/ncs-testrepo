var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
c.width  = 200;
c.height = 150;
ctx.moveTo(0,0);
ctx.strokeStyle = '#ff0000';
ctx.lineTo(200,100);
ctx.stroke();