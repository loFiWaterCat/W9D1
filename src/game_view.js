const Game = require("./game");

function GameView (ctx) {
    this.game = new Game();
    this.ctx = ctx;
}

// GameView.prototype.start = function () {
//     setInterval(function() {
//         this.game.moveObjects(this.ctx);
//         this.game.draw();
//     }, 1000/60)
// }


GameView.prototype.start = function () {
    let that = this;
    console.log(that);
    setInterval(function () {
        console.log(that);
        that.game.moveObjects(that.ctx);
        that.game.draw(that.ctx);
    }, 1000 / 60)
}


module.exports = GameView;

// console.log(test)
//   setInterval(() => {  
//     test.draw(canvasCntx);
//     test.moveObjects();
//     }, 20)