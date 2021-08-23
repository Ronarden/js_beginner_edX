//drawing and animating fundamentals (monster)

var canvas, ctx, w, h;
var rectangleX = 0;
var rectangleY = 0;
var colors = ['red', 'blue', 'green'];
var currentColor = 0;
var speed = 1;

//variables for the animated monsterhead
var xMonster = 10;
var yMonster = 10;
var monsterSpeed = 1;

window.onload = init;

function init() {
    canvas = document.querySelector("#myCanvas");
    w = canvas.width;
    h = canvas.height;
    ctx =canvas.getContext('2d');
    mainLoop();

}
    /* lot's of function calls and functions below!
    drawTwoRectangles();  
    drawGreenRectangle();     
    drawCircle();
    drawText();
    drawFilledRectangle(75,80, 15,15, '#2ff');
    drawFilledRectangle(100,80, 15,15, '#2ff');
    
    drawMyMonster(100,100);
    setTimeout(animate, 100);
    requestAnimationFrame(animate);
    setInterval(changeColor, 500);
}

function drawTwoRectangles(){
    ctx.save();
    ctx.fillStyle = '#ccc';
    ctx.fillRect(10, 10 , 50, 50);
    ctx.fillStyle = '#000';
    ctx.fillRect(15, 10, 15, 50);
    ctx.fillRect(40, 10, 15, 50);
    ctx.restore();
}

function drawGreenRectangle(){
    ctx.save();
    ctx.strokeStyle = 'green';
    ctx.lineWidth = '4';
    ctx.strokeRect(75,75,40.,40);
    ctx.restore();
}

function drawCircle(){
    ctx.save();
    ctx.beginPath();
    ctx.arc(150,50,10, 0, 2*Math.PI);
    ctx.fillStyle = '#c1c1ce';
    ctx.fill();
    ctx.restore();
}

function drawText(){
    ctx.save();
    ctx.fillStyle = '#1e4a2a';
    ctx.font = '30px Arial';
    ctx.fillText('This should be text', 60, 35);
    ctx.restore();
}

function drawFilledRectangle(x, y, width, height, color) {
    // GOOD practice: save the context, use 2D trasnformations
    ctx.save();
  
    // translate the coordinate system, draw relative to it
    ctx.translate(x, y);
  
    ctx.fillStyle = color;
    // (0, 0) is the top left corner of the monster.
    ctx.fillRect(0, 0, width, height);
  
    // GOOD practice: restore the context
    ctx.restore();
}
*/
function drawMyMonster(x, y) {

    ctx.save();
  

    ctx.translate(x, y);
  
    // (0, 0) is the top left corner of the monster.
    ctx.strokeRect(0, 0, 100, 100);
  
    // eyes, x=20, y=20 is relative to the top left corner
    // of the previous rectangle
    ctx.fillStyle='purple';
    ctx.fillRect(20, 20, 10, 10);
    ctx.fillRect(65, 20, 10, 10);    
  
    // nose
    ctx.strokeRect(45, 40, 10, 40);
  
    // mouth
   ctx.strokeRect(35, 84, 30, 10);
  
   // teeth
   ctx.fillStyle='red'
   ctx.fillRect(38, 84, 10, 10);
   ctx.fillRect(52, 84, 10, 10);
  
   // GOOD practice: restore the context
   ctx.restore();
}
/*
function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle ='color';
    ctx.fillRect(rectangleX, rectangleY, 80,100);    
    rectangleX = rectangleX+speed;
    rectangleY = rectangleX;
    if ((rectangleX > canvas.width - 80) || (rectangleX <= 0)){
        speed =-speed;
        
    }
    requestAnimationFrame(animate);
}

function changeColor(){
    ctx.fillStyle = colors[currentColor%3];
    currentColor +=1;
    speed = speed*1.1;
    while (speed > 20){
        speed = 1;
    }    
}
*/
function mainLoop() {
    // 1 - clear the canvas. We told you that w, and h will be useful!
    ctx.clearRect(0, 0, w, h);
    
    // 2 - draw the monster
    drawMyMonster(xMonster, yMonster);
    
    // 3 - move the monster
    xMonster += monsterSpeed;
    
    // 4 - test collisions with vertical boundaries
     if (((xMonster + 100)> w) || (xMonster < 0))  {
       // collision with left or right wall
      // change the direction of movement
      monsterSpeed = -monsterSpeed;
    }
    
    // 5 - request a new frame of animation in 1/60s
    requestAnimationFrame(mainLoop);
}