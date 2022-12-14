const MovingObject = require("./moving_object.js");
const Util = require("./util")
const Asteroid = require("./asteroid")
const Game = require("./game")
const GameView = require("./game_view")
window.MovingObject = MovingObject;

addEventListener('DOMContentLoaded', function(event) {
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.height = 600;
  canvasEl.width = 800;
  const canvasCntx = canvasEl.getContext("2d");


  // const mo = new MovingObject({
  //   pos: [30, 30],
  //   vel: [10, 10],
  //   radius: 5,
  //   color: "#00FF00"
  // });

  // mo.draw(canvasCntx)
  
  const game = new GameView(canvasCntx);
  game.start();

})
