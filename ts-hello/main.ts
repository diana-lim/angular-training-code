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
// 5 DATA TYPES, TYPE ANNOTATIONS, AND ENUM
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
//Type Assertion is when we tell the compiler what <type> an entity/variable is.

let message;
message = 'abc';
let endsWithC =(<string>message).endsWith('c');
let alternativeWay = (message as string).endsWith('c');