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
// Object: An object is an instance of a class.

/*
class Point {
    x: number;
    y: number;

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    getDistance(another: Point) {
        // ...
    }
}

// point is an example of an object of an instance of the Point class
let point = new Point();
point.x = 1;
point.y = 2;
point.draw()
*/

//--------------------------------------------
//               CONSTRUCTORS
//--------------------------------------------
// Constructor: A method that is called when we create an instance of a class.

/*
class Point {
    x: number;
    y: number;

    // the ? allows the parameters to be optional
    constructor(x?: number, y?: number){
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}

// We added the 1 and 2 because the constructor without (?) requires 2 parameter values for (x, y)
let point = new Point(1, 2);
point.draw()

*/

//--------------------------------------------
//           ACCESS MODIFIERS
//--------------------------------------------
// Access modifiers are keywords that can be applied to members of a class
// to control its access from the outside
// Typescript has 3 Access Modifiers: public, private, and protected
// By default, all members are public

/*
class Point {
    private x: number;
    private y: number;

    constructor(x?: number, y?: number){
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}

let point = new Point(1, 2);
point.draw();
*/

//-----------------------------------------------
// ACCESS MODIFIERS IN CONSTRUCTOR PARAMETERES
//-----------------------------------------------
// You can add access modifiers to construtor paramters to shorten code

/*
class Point {
    constructor(private x?: number, private y?: number){
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}

let point = new Point(1, 2);
point.draw();
*/

//-----------------------------------------------
//                  PROPERTIES
//-----------------------------------------------
// A property looks like a field from the outside, but internally is a method in the class.
// Examples: get X and set X; get and set are like methods; X and X are like fields. 

class Point {
    constructor(private x?: number, private y?: number){
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    // This allows us to access to x value/property outside of the class.
    get X() {
        return this.x;
    }

    // This method allows us to set the x value/property outside of the class.
    set X(value) {
        if(value <0)
            throw new Error('value cannot be less than 0.');

        this.x = value;
    }
} 

let point = new Point(1, 2);
let x = point.X;
point.X = 10;
point.draw();

