const MovingObject = require("./moving_object.js");
const Util = require("./util")

function Asteroid(pos) {
  const test = new MovingObject()
  Asteroid.COLOR = "#a0a0a0";
  Asteroid.RADIUS = "10";
  this.pos = pos;
};

Util.inherits(Asteroid, MovingObject);
