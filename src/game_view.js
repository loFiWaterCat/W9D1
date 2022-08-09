const Game = require("./game");

function GameView (ctx) {
    this.game = new Game();
    this.ctx = ctx;
}

GameView.prototype.start = function () {
    let that = this;
    setInterval(function () {
        that.game.step(that.ctx);
        that.game.draw(that.ctx);
    }, 1000 / 60)

}


module.exports = GameView;
