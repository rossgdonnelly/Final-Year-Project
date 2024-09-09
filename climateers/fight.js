const canvasT = document.querySelector("canvas");
const c = canvasT.getContext("2d");

canvasT.width = 1376;
canvasT.height = 704;

c.fillStyle = "black";
c.fillRect(0, 0, canvasT.width, canvasT.height);
const gravity = 0.6;

const fightMapImg = new Image();
fightMapImg.src = "./img/FightMap.png";

const keys = {
  w: { pressed: false },
  a: { pressed: false },
  s: { pressed: false },
  d: { pressed: false },
  ArrowDown: { pressed: false },
  ArrowLeft: { pressed: false },
  ArrowRight: { pressed: false },
  ArrowUp: { pressed: false },
};

const idleplIMG = new Image();
idleplIMG.src = "./img/Protester_images/Idle.png";

const fplayer = new Fighter({
  position: {
    x: 0,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 5,
  },
  offset: {
    x: 0,
    y: 0,
  },
  colour: "blue",
  image: idleplIMG,
  scale: 2.5,
  framesMax: 6,
  frames: { max: 6 },
});

const enemy = new Fighter({
  position: {
    x: canvasT.width / 2,
    y: canvasT.height / 2,
  },
  velocity: {
    x: 0,
    y: 5,
  },
  offset: {
    x: -50,
    y: 0,
  },
  colour: "green",
  image: idleplIMG,
});

const fightBackground = new Sprite({
  position: { x: 0, y: 0 },
  image: fightMapImg,
});

function animate() {
  window.requestAnimationFrame(animate);
  c.fillStyle = "black";
  c.clearRect(0, 0, canvasT.width, canvasT.height);
  fightBackground.draw();
  fplayer.update();
  enemy.update();
  fplayer.height = 150;
  //Player Movement
  fplayer.velocity.x = 0;
  if (keys.w.pressed && (fplayer.lastKey == "w" || fplayer.lastKey == "d")) {
    // Jump
    fplayer.velocity.y = -10;
    // player.image = player.sprites.up;
  } else if (keys.a.pressed && fplayer.lastKey == "a") {
    fplayer.velocity.x = -10;
    // player.image = player.sprites.left;
  } else if (keys.s.pressed && fplayer.lastKey == "s") {
    //fplayer.height = fplayer.hdeight / 2;
    //Crouch
    /// player.image = player.sprites.down;
  } else if (
    keys.d.pressed &&
    (fplayer.lastKey == "d" || fplayer.lastKey == "w")
  ) {
    fplayer.velocity.x = 10;
    //player.image = player.sprites.right;
  }

  //Enemy Movement
  enemy.velocity.x = 0;
  if (
    keys.ArrowUp.pressed &&
    (enemy.lastKey == "ArrowUp" || enemy.lastKey == "ArrowRight")
  ) {
    // Jump
    enemy.velocity.y = -10;
    // player.image = player.sprites.up;
  } else if (keys.ArrowLeft.pressed && enemy.lastKey == "ArrowLeft") {
    enemy.velocity.x = -10;

    // player.image = player.sprites.left;
  } else if (keys.ArrowDown.pressed && enemy.lastKey == "ArrowDown") {
    //enemy.height = enemy.hdeight / 2;
    //Crouch
    /// player.image = player.sprites.down;
  } else if (
    keys.ArrowRight.pressed &&
    (enemy.lastKey == "ArrowRight" || enemy.lastKey == "ArrowUp")
  ) {
    enemy.velocity.x = 10;
    //player.image = player.sprites.right;
  }

  //Detect for collision
  if (collisionDet({ block1: fplayer, block2: enemy }) && fplayer.isAttacking) {
    fplayer.isAttacking = false;
    enemy.health -= 20;
    document.querySelector("#enemyHealth").style.width = enemy.health + "%";
  }
  if (collisionDet({ block1: enemy, block2: fplayer }) && enemy.isAttacking) {
    enemy.isAttacking = false;
    console.log("enemy attack ");
    fplayer.health -= 20;
    document.querySelector("#playerHealth").style.width = fplayer.health + "%";
  }

  if (fplayer.health <= 0 || enemy.health <= 0) {
    determineWinner(fplayer, enemy, timerId);
  }
}

let timeRemaining = 60;
let timerId;
function decreaseTimer() {
  if (timeRemaining > 0) {
    timerId = setTimeout(decreaseTimer, 1000);
    timeRemaining--;
    document.querySelector("#timer").innerHTML = timeRemaining;
  }
  if (timeRemaining == 0) {
    document.querySelector("#displayText").style.display = "flex";
    determineWinner(fplayer, enemy, timerId);
  }
}

decreaseTimer();
animate();

let lastKey = "";
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = true;
      fplayer.lastKey = "w";
      break;
    case "a":
      keys.a.pressed = true;
      fplayer.lastKey = "a";

      break;
    case "s":
      keys.s.pressed = true;
      fplayer.lastKey = "s";

      break;
    case "d":
      keys.d.pressed = true;
      fplayer.lastKey = "d";

      break;
    case " ":
      fplayer.attack();
      break;

    case "ArrowUp":
      keys.ArrowUp.pressed = true;
      enemy.lastKey = "ArrowUp";
      break;
    case "ArrowLeft":
      keys.ArrowLeft.pressed = true;
      enemy.lastKey = "ArrowLeft";

      break;
    case "ArrowDown":
      enemy.isAttacking = true;
      keys.ArrowDown.pressed = true;
      enemy.lastKey = "ArrowDown";

      break;
    case "ArrowRight":
      keys.ArrowRight.pressed = true;
      enemy.lastKey = "ArrowRight";

      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "w":
      keys.w.pressed = false;
      break;
    case "a":
      keys.a.pressed = false;
      break;
    case "s":
      keys.s.pressed = false;
      break;
    case "d":
      keys.d.pressed = false;
      break;
    case "ArrowUp":
      keys.ArrowUp.pressed = false;
      break;
    case "ArrowDown":
      keys.ArrowDown.pressed = false;
      break;
    case "ArrowRight":
      keys.ArrowRight.pressed = false;
      break;
    case "ArrowLeft":
      keys.ArrowLeft.pressed = false;
      break;
  }
});
