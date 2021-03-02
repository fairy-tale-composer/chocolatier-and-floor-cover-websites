let canvas = document.querySelector('.animals-canvas'),
  context = canvas.getContext('2d'),
  bat = new Image(),
  width = 130,
  height = 80,
  speed = 6,
  frames = 3,
  currentFrame = 0,
  sourceX = 0,
  sourceY = 160,
  currentDirection = 'left',
  previousDirection,
  clientScreenRect = document.documentElement.getBoundingClientRect(),
  destX = clientScreenRect.width,
  destY = clientScreenRect.height - height - 20,
  checkCoords,
  moveBat,
  animate,
  startTime,
  currentTime;

canvas.width = clientScreenRect.width;
canvas.height = clientScreenRect.height;

window.onresize = () => {
  clientScreenRect = document.documentElement.getBoundingClientRect();
  canvas.width = clientScreenRect.width;
  canvas.height = clientScreenRect.height;
};

bat.src = "img/bat-sprite1.png";
bat.onload = () => {
  startTime = new Date().getTime();
  checkCoords = checkCoordsFlyingLeft;
  moveBat = moveBatHorizontally;
  animate = requestAnimationFrame(batFly);

  canvas.addEventListener('mousemove', (event) => {
    if (event.x > destX && event.x < destX + width && event.y > destY && event.y < destY + height) {
      if (currentDirection !== 'up') {
        cancelAnimationFrame(animate);
        setDirectionUp();
        animate = requestAnimationFrame(batFly);
      }
    }
  });
};

function batFly() {
  if (checkCoords()) {
    cancelAnimationFrame(animate);
    changeDirection();
  } else {
    getAnimationProgress();

    context.clearRect(destX,destY,130,80);
    context.drawImage(bat,130 * currentFrame,sourceY,130,80,destX,destY,130,80);
    moveBat();
    animate = requestAnimationFrame(batFly);
  }
}

function moveBatHorizontally() {
  destX -= speed;
}

function moveBatVertically() {
  destY -= speed;
}

function checkCoordsFlyingLeft() {
  if (destX <= (-width)) {
    return true;
  }
}

function checkCoordsFlyingRight() {
  if (destX >= clientScreenRect.width) {
    return true;
  }
}

function checkCoordsFlyingUp() {
  if (destY <= -height) {
    return true;
  }
}

function changeDirection() {
  switch (currentDirection) {
    case 'left':
      setDirectionRight();
      break
    case 'right':
      setDirectionLeft();
      break
    case 'up':
      if (previousDirection === 'left') {
        destX = -width;
        destY = clientScreenRect.height - height - 20;
        setDirectionRight();
      } else {
        destX = clientScreenRect.width;
        destY = clientScreenRect.height - height - 20;
        setDirectionLeft();
      }
  }
  setTimeout(() => {
    animate = requestAnimationFrame(batFly);
  }, 10000);
}

function setDirectionLeft() {
  currentDirection = 'left';
  speed = 6;
  sourceY = 160;
  checkCoords = checkCoordsFlyingLeft;
  moveBat = moveBatHorizontally;
}
function setDirectionRight() {
  currentDirection = 'right';
  speed = -6;
  sourceY = 80;
  checkCoords = checkCoordsFlyingRight;
  moveBat = moveBatHorizontally;
}

function setDirectionUp() {
  previousDirection = currentDirection;
  currentDirection = 'up';
  speed = 6;
  sourceY = 240;
  checkCoords = checkCoordsFlyingUp;
  moveBat = moveBatVertically;
}

function getAnimationProgress() {
  currentTime = new Date().getTime(),
  progress = currentTime - startTime;

  if (progress >= 200) {
    changeFrame();
    startTime = currentTime;
  }
}

function changeFrame() {
  if (currentFrame == frames) {
    currentFrame = 0;
  } else {
    currentFrame++;
  }
}
