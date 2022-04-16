var canvas = document.getElementById("my_canvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if(e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = true;
  }else if(e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if(e.key == "Right" || e.key == "ArrowRight") {
    rightPressed = false;
  }else if(e.key == "Left" || e.key == "ArrowLeft") {
    leftPressed = false;
  }
}

function paddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#ffff";
  ctx.fill();
  ctx.closePath();
}

function paddleMove() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  paddle();
  console.log("catch the fish")

  if(rightPressed) {
    paddleX += 7;
    if (paddleX + paddleWidth > canvas.width) {
        paddleX = canvas.width - paddleWidth;
    }
  }else if(leftPressed) {
    paddleX += 7;
    if(paddleX < 0) {
      paddleX = 0;
    }
  }
  
  x += dx;
  y += dy;
}

/* setInterval(paddleMove, 1000) */

paddleMove();

