require 
const Asteroid = require("./asteroid");

const DIM_X = 800;
const DIM_Y = 600;
const NUM_ASTEROIDS = 25;

function Game () {
    this.asteroids = [];
    this.addAsteroids();
}

Game.prototype.randomPosition = function () {
    return [DIM_X * Math.random(), DIM_Y * Math.random()];
}

Game.prototype.addAsteroids = function () {
    for(i=1; i <= NUM_ASTEROIDS; i++) {
        this.asteroids.push(new Asteroid({pos:this.randomPosition()}));
    }
}

Game.prototype.draw = function (ctx) {
    ctx.clearRect(0,0, 800, 600);
    
    for(let ele of this.asteroids) {
        ele.draw(ctx);
    }
}

Game.prototype.moveObjects = function (ctx) {
    for (let ele of this.asteroids) {
        ele.move(ctx);
    }
}

module.exports = Game;