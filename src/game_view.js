const Game = require("./game");

function GameView (ctx) {
    this.game = new Game();
    this.ctx = ctx;
}

GameView.prototype.start = function () {
    let that = this;
    // setInterval(function () {
    //     console.log(that);
    //     that.game.moveObjects(that.ctx);
    //     that.game.draw(that.ctx);
    // }, 1000 / 60)
    requestAnimationFrame(function () {
        console.log(that);
        that.game.moveObjects(that.ctx);
        that.game.draw(that.ctx);
    })

}


module.exports = GameView;
