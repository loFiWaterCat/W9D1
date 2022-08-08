// const Util = {

//      inherits (childClass, parentClass) {
//         // debugger
//         // const childConstructor = childClass.prototype.constructor
//         function Surrogate () {};
//         Surrogate.prototype = parentClass.prototype;
//         childClass.prototype = new Surrogate();
//         childClass.prototype.constructor = childClass;
//         // new childClass gives instance of surrogate or parentclass before line 6   
//     }
// };

const Util = {}

Util.inherits = function (childClass, parentClass) {
    function Surrogate() { };
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
    childClass.prototype.constructor = childClass;
}

// function Cat (name) {   

//     this.name = name
// }



// function Animal(name) {

//     this.name = name
// }

// Animal.prototype.walk = function () {
//     console.log("walk");
// }


// Cat.prototype.meow = function () {
//     console.log("moew");
// }
// Util.inherits(Cat, Animal)

module.exports = Util;