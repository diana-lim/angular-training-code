"use strict";
// We add the "export" keyword in front of the class to make it visible in other files.
// Now that we can export something from this file, it is considered a module.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return Point;
}());
exports.Point = Point;
