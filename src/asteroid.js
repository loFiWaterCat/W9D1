const MovingObject = require("./moving_object.js");
const Util = require("./util")

function Asteroid(optionsHash) {
  optionsHash.color ||= DEFAULTS.color;
  this.color = optionsHash.color;
  
  optionsHash.radius ||= DEFAULTS.radius;
  this.radius = optionsHash.radius;

  optionsHash.vel = Util.randomVec(5);
  this.vel = optionsHash.vel;

  this.pos = optionsHash.pos;
  
  MovingObject.call(this, optionsHash)
};

const DEFAULTS = {
  color: "#a0a0a0",
  radius: 15,
}

Util.inherits(Asteroid, MovingObject);
module.exports = Asteroid;
