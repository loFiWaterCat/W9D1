/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\")\n\nfunction Asteroid(optionsHash) {\n  optionsHash.color ||= DEFAULTS.color;\n  this.color = optionsHash.color;\n  \n  optionsHash.radius ||= DEFAULTS.radius;\n  this.radius = optionsHash.radius;\n\n  optionsHash.vel = Util.randomVec(5);\n  this.vel = optionsHash.vel;\n\n  this.pos = optionsHash.pos;\n  this.game = optionsHash.game;\n  \n  MovingObject.call(this, optionsHash)\n};\n\nconst DEFAULTS = {\n  color: \"#a0a0a0\",\n  radius: 15,\n}\n\nUtil.inherits(Asteroid, MovingObject);\nmodule.exports = Asteroid;\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(\"./src sync recursive\") \nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\nconst DIM_X = 800;\nconst DIM_Y = 600;\nconst NUM_ASTEROIDS = 25;\n\nfunction Game () {\n    this.asteroids = [];\n    this.addAsteroids();\n}\n\nGame.prototype.randomPosition = function () {\n    return [DIM_X * Math.random(), DIM_Y * Math.random()];\n}\n\nGame.prototype.addAsteroids = function () {\n    for(i=1; i <= NUM_ASTEROIDS; i++) {\n        this.asteroids.push(new Asteroid({pos:this.randomPosition(), game: this}));\n    }\n}\n\nGame.prototype.draw = function (ctx) {\n    ctx.clearRect(0,0, 800, 600);\n    \n    for(let ele of this.asteroids) {\n        ele.draw(ctx);\n    }\n}\n\nGame.prototype.moveObjects = function (ctx) {\n    for (let ele of this.asteroids) {\n        ele.move(ctx);\n    }\n}\n\nGame.prototype.wrap = function(pos) {\n    if (pos[0] > DIM_X) {\n        return [pos[0] - DIM_X, pos[1]];\n    } else if (pos[0] < 0) {\n        return [pos[0] + DIM_X, pos[1]];\n    } else if (pos[1] > DIM_Y) {\n        return [pos[0], pos[1] - DIM_Y];\n    } else if (pos[1] < 0) {\n        return [pos[0], pos[1] + DIM_Y];\n    } else {\n        return pos;\n    };\n};\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView (ctx) {\n    this.game = new Game();\n    this.ctx = ctx;\n}\n\nGameView.prototype.start = function () {\n    let that = this;\n    setInterval(function () {\n        console.log(that);\n        that.game.moveObjects(that.ctx);\n        that.game.draw(that.ctx);\n    }, 1000 / 60)\n    // requestAnimationFrame(function () {\n    //     console.log(that);\n    //     that.game.moveObjects(that.ctx);\n    //     that.game.draw(that.ctx);\n    // })\n\n}\n\n\nmodule.exports = GameView;\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\")\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\")\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\")\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\")\nwindow.MovingObject = MovingObject;\n\naddEventListener('DOMContentLoaded', function(event) {\n  const canvasEl = document.getElementById(\"game-canvas\");\n  canvasEl.height = 600;\n  canvasEl.width = 800;\n  const canvasCntx = canvasEl.getContext(\"2d\");\n\n\n  // const mo = new MovingObject({\n  //   pos: [30, 30],\n  //   vel: [10, 10],\n  //   radius: 5,\n  //   color: \"#00FF00\"\n  // });\n\n  // mo.draw(canvasCntx)\n  \n  const game = new GameView(canvasCntx);\n  game.start();\n\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("\n\nfunction MovingObject(optionsHash) {\n  this.pos = optionsHash.pos;\n  this.vel = optionsHash.vel;\n  this.radius = optionsHash.radius;\n  this.color = optionsHash.color;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n// console.log(this)\n  ctx.arc(\n    this.pos[0],\n    this.pos[1],\n    this.radius,\n    0,\n    2 * Math.PI\n  );\n\n  ctx.fill();\n};\n\n\nMovingObject.prototype.move = function () {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n\n  this.pos = this.game.wrap(this.pos);\n}\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("\n\nconst Util = {}\n\nUtil.inherits = function (childClass, parentClass) {\n    function Surrogate() { };\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n}\n\nUtil.randomVec = function(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n}\n\nUtil.scale = function(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n}\n\nUtil.distanceBetween = function(obj1, obj2) {\n    const a = (obj1.pos[0] - obj2.pos[0]);\n    const b = (obj1.pos[1] - obj2.pos[1]);\n    return Math.sqrt(a ** 2 + b ** 2);\n}\n\n\n\n\nmodule.exports = Util;\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ }),

/***/ "./src sync recursive":
/*!*******************!*\
  !*** ./src/ sync ***!
  \*******************/
/***/ ((module) => {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = () => ([]);\nwebpackEmptyContext.resolve = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src sync recursive\";\nmodule.exports = webpackEmptyContext;\n\n//# sourceURL=webpack:///./src/_sync?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;