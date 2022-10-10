"use strict";
exports.__esModule = true;
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getX = function () { return this.x; };
    Point.prototype.setX = function (value) {
        if (value < 0)
            throw new Error('value cannot be less than 0');
        this.x = value;
    };
    return Point;
}());
exports.Point = Point;
var point = new Point(1, 2);
point.draw();
var x = point.getX();
console.log(x);
point.setX(5);
console.log('new X:' + point.getX());
point.draw();
