// CITYSCAPE ASGN START CODE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 300;
cnv.height = 650;

// BLUE BACKGROUND
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, cnv.width, cnv.height);

// DRAW LEFT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(0, 350, 150, 300);
// Middle Section
ctx.fillRect(20, 200, 110, 150);
// Triangle Top
ctx.beginPath();
ctx.moveTo(20, 200);
ctx.lineTo(130, 200);
ctx.lineTo(130, 100);
ctx.fill();

// DRAW RIGHT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(150, 100, 150, 550);
// Medium Top
ctx.fillRect(170, 40, 110, 60);
// Small Top
ctx.fillRect(190, 20, 70, 20);

//DRAW VERTICAL RECTANGLES
ctx.fillStyle = "white";
ctx.fillRect(170, 120, 10, 480);

ctx.fillStyle = "white";
ctx.fillRect(195, 120, 10, 480);

ctx.fillStyle = "white";
ctx.fillRect(220, 120, 10, 480);

ctx.fillStyle = "white";
ctx.fillRect(245, 120, 10, 480);

ctx.fillStyle = "white";
ctx.fillRect(270, 120, 10, 480);

//DRAW HORIZONTAL RECTANGLES
ctx.fillStyle = "white";
ctx.fillRect(20, 375, 110, 20);

ctx.fillStyle = "white";
ctx.fillRect(20, 415, 110, 20);

ctx.fillStyle = "white";
ctx.fillRect(20, 455, 110, 20);

ctx.fillStyle = "white";
ctx.fillRect(20, 495, 110, 20);

ctx.fillStyle = "white";
ctx.fillRect(20, 535, 110, 20);

ctx.fillStyle = "white";
ctx.fillRect(20, 575, 110, 20);

//DRAW LITTLE SQUARES
ctx.fillStyle = "white";
ctx.fillRect(40, 205, 10, 10);

ctx.fillStyle = "white";
ctx.fillRect(40, 230, 10, 10);

ctx.fillStyle = "white";
ctx.fillRect(40, 255, 10, 10);

ctx.fillStyle = "white";
ctx.fillRect(40, 280, 10, 10);

ctx.fillStyle = "white";
ctx.fillRect(40, 305, 10, 10);

ctx.fillStyle = "white";
ctx.fillRect(40, 330, 10, 10);

ctx.fillStyle = "white";
ctx.fillRect(60, 205, 10, 10);

ctx.fillStyle = "white";
ctx.fillRect(60, 230, 10, 10);

ctx.fillStyle = "white";
ctx.fillRect(60, 255, 10, 10);

ctx.fillStyle = "white";
ctx.fillRect(60, 280, 10, 10);

ctx.fillStyle = "white";
ctx.fillRect(60, 305, 10, 10);

ctx.fillStyle = "white";
ctx.fillRect(60, 330, 10, 10);

ctx.fillStyle = "white";
ctx.fillRect(80, 205, 10, 10);

ctx.fillStyle = "white";
ctx.fillRect(80, 230, 10, 10);

ctx.fillStyle = "white";
ctx.fillRect(80, 255, 10, 10);

ctx.fillStyle = "white";
ctx.fillRect(80, 280, 10, 10);

ctx.fillStyle = "white";
ctx.fillRect(80, 305, 10, 10);

ctx.fillStyle = "white";
ctx.fillRect(80, 330, 10, 10);

ctx.fillStyle = "white";
ctx.fillRect(100, 205, 10, 10);

ctx.fillStyle = "white";
ctx.fillRect(100, 230, 10, 10);

ctx.fillStyle = "white";
ctx.fillRect(100, 255, 10, 10);

ctx.fillStyle = "white";
ctx.fillRect(100, 280, 10, 10);

ctx.fillStyle = "white";
ctx.fillRect(100, 305, 10, 10);

ctx.fillStyle = "white";
ctx.fillRect(100, 330, 10, 10);
