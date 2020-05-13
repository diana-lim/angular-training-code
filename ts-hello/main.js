/*function log(message) {
    console.log(message);
}

var message = 'Hello World';

log(message);
*/
//---------------------------------------
// LET VS VAR KEYWORD COMPARISON CODE
//---------------------------------------
/*
function doSomething() {
    for (let i =0; i <5; i++) {
        console.log(i);
    }

    console.log('Finally: ' + i);
}

doSomething();
*/
//--------------------------------------------
//   DATA TYPES, TYPE ANNOTATIONS, AND ENUM
//--------------------------------------------
/*
let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1, true, 'a', false]; // Possible, but should be avoided.

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color {Red = 0, Green = 1, Blue= 2};
let backgroundColor = Color.Green;
*/
//--------------------------------------------
//           TYPE ASSERTIONS
//--------------------------------------------
//Type Assertion is when we tell the compiler what <type> an entity/variable is, so we can access the intellisense.
/*
let message;
message = 'abc';
let endsWithC =(<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');
*/
//--------------------------------------------
//           ARROW FUNCTIONS
//--------------------------------------------
// Javascript version of declaring a function
/*
let log = function(message){
    console.log(message);
}

// Typescript version of declaring the ssame function

let doLog = (message) => console.log(message);
*/
//--------------------------------------------
//                INTERFACES
//--------------------------------------------
/*
interface Point {
    x: number,
    y: number
}
let drawPoint = (point: Point) => {
    //...
}

drawPoint({
    x: 1,
    y: 2
})
*/
//--------------------------------------------
//                  CLASSES
//--------------------------------------------
// Cohesion: things that are related should be part of one unit
// Class: A group of variables/properties and functions/methods that are highly related
// Fields and methods are all members of a class
/*
class Point {
    x: number;
    y: number;

    draw() {
        //...
    }

    getDistance(another: Point) {
        // ...
    }
}
*/
//--------------------------------------------
//                  OBJECTS
//--------------------------------------------
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        // ...
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
