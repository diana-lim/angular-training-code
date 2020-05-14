// We add the "export" keyword in front of the class to make it visible in other files.
// Now that we can export something from this file, it is considered a module.

export class Point {
    constructor(private x?: number, private y?: number){
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}
