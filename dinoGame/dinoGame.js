var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var score = document.getElementById("score");
var scorePlus = 0;

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

/* dino 그리기 */
var charactor = new Image();
charactor.src = "charactor.png";

var dino = {
  x: 10,
  y: 180,
  width: 60,
  height: 60,
  draw() {
    ctx.fillStyle = "white ";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(charactor, this.x, this.y, 80, 80);
  },
};

dino.draw();

/* Cactus 그리기 */

class Cactus {
  constructor() {
    this.x = 400;
    this.y = 230;
    this.width = 30;
    this.height = 30;
  }
  draw() {
    ctx.fillStyle = "white";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(ball, this.x, this.y, 30, 30);
  }
}

var ball = new Image();
ball.src = "ball.png";

var cactus = new Cactus();
cactus.draw();

var timer = 0;
var cactusArray = [];
var jumpLocation = 0;
var jumpState = false;
var animation;

score.innerHTML = scorePlus;

/* 게임 진행 */
function moveMaker() {
  animation = requestAnimationFrame(moveMaker);
  timer++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (timer % 200 === 0) {
    var cactus = new Cactus();
    cactusArray.push(cactus);
    setTimeout(function () {
      scorePlus++;
      score.innerHTML = scorePlus;
    }, 2500);
  }

  cactusArray.forEach((a, i, o) => {
    if (a.x < 0) {
      o.splice(i, 1);
    }
    a.x--;

    crashEvent(dino, a);

    a.draw();
  });
  if (jumpState == true) {
    dino.y--;
    jumpLocation++;
  }
  if (jumpLocation > 70) {
    jumpState = false;
    jumpLocation = 0;
  }
  if (jumpState == false) {
    if (dino.y < 180) {
      dino.y++;
    }
  }
  dino.draw();
}

function crashEvent(dino, cactus) {
  var xState = cactus.x - (dino.x + dino.width);
  var yState = cactus.y - (dino.y + dino.width);
  if (xState < 0 && yState < 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(animation);
  }
}

document.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    jumpState = true;
  }
});

moveMaker();
