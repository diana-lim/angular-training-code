

//--------------------------------------------
//              TASK DESCRIPTION
//--------------------------------------------
// Implement the Facebook "Like" functionality in Angular

// 1. Create a component/Typescript class that encapsulates data for the like button
// 2. Include the number of likes and whether the button is in the on/off state
// 3. Component should respond to user actions:
        // a. When user clicks "Like", number of likes should increase and button should be in the "on" state
        // b. When user clicks again, number of likes should decrease and button should be in the "off" state
// 4. Display the number of likes whether button is on or off in the console
// 5. Define the class in a separate module, but use it in the main module

export class Like {
    // likeCounts: number;
    // isSelected: boolean;
    constructor(private _likesCount: number, private _isSelected: boolean) {   
    }

    onClick() {
       /*
        if(this.isSelected){
            this.likesCount--;
        } else {
            this.likesCount++;
        }
        */

        // If isSelected, - 1 from likesCount; else +1 to likesCount
        this._likesCount += (this.isSelected) ? -1 : +1;
        this._isSelected = !this.isSelected;
    }

    get likesCount() {
        return this._likesCount;
    }

    get isSelected() {
        return this._isSelected;
    }
}