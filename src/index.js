const MovingObject = require("./moving_object.js");

window.MovingObject = MovingObject;

addEventListener('DOMContentLoaded', function(event) {
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.height = 600;
  canvasEl.width = 800;
  const canvasCntx = canvasEl.getContext("2d");
})


// const Game = require('./game.js')
//
// const canvasEl = document.getElementsByTagName("canvas")[0];
// canvasEl.height = window.innerHeight;
// canvasEl.width = window.innerWidth;
// new Game(
//   canvasEl.width,
//   canvasEl.height
// ).start(canvasEl);
