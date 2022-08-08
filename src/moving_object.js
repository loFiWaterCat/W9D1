function MovingObject(optionsHash) {
  this.pos = optionsHash.pos;
  this.vel = optionsHash.vel;
  this.radius = optionsHash.radius;
  this.color = optionsHash.color;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();
// console.log(this)
  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI
  );

  // ctx.beginPath();
  // ctx.moveTo(pos[0]+10), pos[1]+10);
  // ctx.moveTo(75, 50);
  // ctx.lineTo(100, 75);
  // ctx.lineTo(100, 25);
  


  ctx.fill();
};


MovingObject.prototype.move = function () {
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
}

module.exports = MovingObject;
