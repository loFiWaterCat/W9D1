const Util = require("./util");
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
        this.asteroids.push(new Asteroid({pos:this.randomPosition(), game: this}));
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

Game.prototype.step = function (ctx){
    this.moveObjects(ctx);
    this.checkCollisions();
}

Game.prototype.wrap = function(pos) {
    // if (pos[0] > DIM_X) {
    //     return [pos[0] - DIM_X, pos[1]];
    // } else if (pos[0] < 0) {
    //     return [pos[0] + DIM_X, pos[1]];
    // } else if (pos[1] > DIM_Y) {
    //     return [pos[0], pos[1] - DIM_Y];
    // } else if (pos[1] < 0) {
    //     return [pos[0], pos[1] + DIM_Y];
    // } else {
    //     return pos;
    // };
    pos[0] = pos[0] % DIM_X;
    pos[1] = pos[1] % DIM_Y;
    return (pos);
};

Game.prototype.checkCollisions = function() {
    for (let i = 0; i < this.asteroids.length - 1; i++) {
        for (let j = i + 1; j < this.asteroids.length; j++) {
            if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
                alert("COLLISION");
                console.log("COLLLIOSION");
            }
        }
    }
}

module.exports = Game;
