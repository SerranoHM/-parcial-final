var canvas = document.getElementById('canvas');
ctx = canvas.getContext('2d');
var  FPS = 50




setInterval(function(){

    ctx.clearRect(0,0,600,200);

    ctx.lineWidth = 1;

    ctx.fillStyle='red';
    ctx.strokeStyle =('black');
    ctx.fillRect(30, 40, 150, 130);
    ctx.strokeRect(30,40,150,130);


    ctx.beginPath();
    ctx.fillStyle='yellow';
    ctx.strokeStyle =('black');
    ctx.arc(300,100,70,0,2*Math.PI,true);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle='blue';
    ctx.strokeStyle =('black');
   ctx.moveTo(333,222);
   ctx.lineTo(444,111);
   ctx.lineTo(555,222);
   ctx.fill();
   ctx.stroke

},1000/FPS);