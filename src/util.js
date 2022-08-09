

const Util = {}

Util.inherits = function (childClass, parentClass) {
    function Surrogate() { };
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
    childClass.prototype.constructor = childClass;
}

Util.randomVec = function(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
}

Util.scale = function(vec, m) {
    return [vec[0] * m, vec[1] * m];
}

Util.distanceBetween = function(obj1, obj2) {
    const a = (obj1.pos[0] - obj2.pos[0]);
    const b = (obj1.pos[1] - obj2.pos[1]);
    return Math.sqrt(a ** 2 + b ** 2);
}




module.exports = Util;
