let paddle1Details = {
  width: "15px",
  height: "55px",
  top: "180px"
};

let paddle2Details = {
  width: "15px",
  height: "55px",
  top: "180px"
};

let ballDetails = {
  height: "30px",
  width: "30px"
};

const drawPaddle1 = function() {
  let paddle1 = document.getElementById("paddle1");
  paddle1.style.width = paddle1Details.width;
  paddle1.style.height = paddle1Details.height;
  paddle1.style.top = paddle1Details.top;
};

const drawPaddle2 = function() {
  let paddle2 = document.getElementById("paddle2");
  paddle2.style.width = paddle2Details.width;
  paddle2.style.height = paddle2Details.height;
  paddle2.style.top = paddle2Details.top;
};

const drawBall = function() {
  let ball = document.getElementById("ball");
  ball.style.width = ballDetails.width;
  ball.style.height = ballDetails.height;
};

const getDimension = function(element, property) {
  return +element.style[property].replace("px", "");
};

const moveUptoDown1 = function() {
  let paddle1 = document.getElementById("paddle1");
  let top = getDimension(paddle1, "top");
  top = top + 20;
  paddle1.style.top = top + "px";
};

const moveDownToUp1 = function() {
  let paddle1 = document.getElementById("paddle1");
  let top = getDimension(paddle1, "top");
  top = top - 20;
  paddle1.style.top = top + "px";
};

const moveUptoDown2 = function() {
  let paddle2 = document.getElementById("paddle2");
  let top = getDimension(paddle2, "top");
  top = top + 20;
  paddle2.style.top = top + "px";
};
const moveDownToUp2 = function() {
  let paddle2 = document.getElementById("paddle2");
  let top = getDimension(paddle2, "top");
  top = top - 20;
  paddle2.style.top = top + "px";
};

window.onload = function() {
  drawPaddle1();
  drawBall();
  drawPaddle2();
  myMove();
};

document.onkeypress = function(event) {
  const events = {
    a: moveUptoDown1,
    d: moveDownToUp1,
    j: moveUptoDown2,
    l: moveDownToUp2
  };
  return events[event.key]();
};

const moveUp = function() {
  let ball = document.getElementById("ball");
  let top = getDimension(ball, "top");
  ball.style.top = top - 2 + "px";
};

const moveDown = function() {
  let ball = document.getElementById("ball");
  let top = getDimension(ball, "top");
  ball.style.top = top + 2 + "px";
};

const moveLeft = function() {
  let ball = document.getElementById("ball");
  let left = getDimension(ball, "left");
  ball.style.left = left - 2 + "px";
};

const moveRight = function() {
  let ball = document.getElementById("ball");
  let left = getDimension(ball, "left");
  ball.style.left = left + 2 + "px";
};

const isPaddleTouched = function(ball, paddle, dimension) {
  return (
    getDimension(ball, "left") < dimension &&
    getDimension(ball, "left") > -dimension &&
    getDimension(paddle, "top") - getDimension(ball, "top") < 28 &&
    getDimension(paddle, "top") - getDimension(ball, "top") > -28
  );
};

const isPaddleTouched2 = function(ball, paddle, dimension) {
  return (
    getDimension(ball, "left") > dimension &&
    getDimension(ball, "left") > -dimension &&
    getDimension(paddle, "top") - getDimension(ball, "top") < 28 &&
    getDimension(paddle, "top") - getDimension(ball, "top") > -28
  );
};

const myMove = function() {
  let paddle1 = document.getElementById("paddle1");
  let paddle2 = document.getElementById("paddle2");
  let ball = document.getElementById("ball");
  let moveVertical = moveUp;
  let moveHorizontal = moveLeft;
  let intervalId = setInterval(function() {
    if (getDimension(ball, "top") <= 0) {
      moveVertical = moveDown;
    }

    if (isPaddleTouched2(ball, paddle2, 560)) {
      moveHorizontal = moveLeft;
    }

    if (isPaddleTouched(ball, paddle1, 15)) {
      moveHorizontal = moveRight;
    }
    if (getDimension(ball, "top") >= 376) {
      moveVertical = moveUp;
    }
    moveVertical();
    moveHorizontal();
  }, 10);
};
