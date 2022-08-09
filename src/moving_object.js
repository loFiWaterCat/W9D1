const Util = require('./util');

function MovingObject(optionsHash) {
  this.pos = optionsHash.pos;
  this.vel = optionsHash.vel;
  this.radius = optionsHash.radius;
  this.color = optionsHash.color;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI
  );

  ctx.fill();
};

MovingObject.prototype.move = function () {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];

  this.pos = this.game.wrap(this.pos);
}

MovingObject.prototype.isCollidedWith = function(otherObject) {
  const radiSum = this.radius + otherObject.radius;

  return radiSum < Util.distanceBetween(this, otherObject);
}

module.exports = MovingObject;
