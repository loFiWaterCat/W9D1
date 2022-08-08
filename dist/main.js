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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\")\nwindow.MovingObject = MovingObject;\n\naddEventListener('DOMContentLoaded', function(event) {\n  const canvasEl = document.getElementById(\"game-canvas\");\n  canvasEl.height = 600;\n  canvasEl.width = 800;\n  const canvasCntx = canvasEl.getContext(\"2d\");\n\n\n  const mo = new MovingObject({\n    pos: [30, 30],\n    vel: [10, 10],\n    radius: 5,\n    color: \"#00FF00\"\n  });\n\n  mo.draw(canvasCntx)\n  // Util.inherits(Cat, Animal)\n  setInterval(() => { mo.move(); mo.draw(canvasCntx)},1000) \n\n})\n\n\n// const Game = require('./game.js')\n//\n// const canvasEl = document.getElementsByTagName(\"canvas\")[0];\n// canvasEl.height = window.innerHeight;\n// canvasEl.width = window.innerWidth;\n// new Game(\n//   canvasEl.width,\n//   canvasEl.height\n// ).start(canvasEl);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(optionsHash) {\n  this.pos = optionsHash.pos;\n  this.vel = optionsHash.vel;\n  this.radius = optionsHash.radius;\n  this.color = optionsHash.color;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n\n  ctx.arc(\n    this.pos[0],\n    this.pos[1],\n    this.radius,\n    0,\n    2 * Math.PI\n  );\n\n  // ctx.beginPath();\n  // ctx.moveTo(pos[0]+10), pos[1]+10);\n  // ctx.moveTo(75, 50);\n  // ctx.lineTo(100, 75);\n  // ctx.lineTo(100, 25);\n  \n\n\n  ctx.fill();\n};\n\n\nMovingObject.prototype.move = function () {\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n}\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("// const Util = {\n\n//      inherits (childClass, parentClass) {\n//         // debugger\n//         // const childConstructor = childClass.prototype.constructor\n//         function Surrogate () {};\n//         Surrogate.prototype = parentClass.prototype;\n//         childClass.prototype = new Surrogate();\n//         childClass.prototype.constructor = childClass;\n//         // new childClass gives instance of surrogate or parentclass before line 6   \n//     }\n// };\n\nconst Util = {}\n\nUtil.inherits = function (childClass, parentClass) {\n    function Surrogate() { };\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n}\n\n// function Cat (name) {   \n\n//     this.name = name\n// }\n\n\n\n// function Animal(name) {\n\n//     this.name = name\n// }\n\n// Animal.prototype.walk = function () {\n//     console.log(\"walk\");\n// }\n\n\n// Cat.prototype.meow = function () {\n//     console.log(\"moew\");\n// }\n// Util.inherits(Cat, Animal)\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;