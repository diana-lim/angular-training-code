"use strict";
//--------------------------------------------
//              TASK DESCRIPTION
//--------------------------------------------
// Implement the Facebook "Like" functionality in Angular
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
// 1. Create a component/Typescript class that encapsulates data for the like button
// 2. Include the number of likes and whether the button is in the on/off state
// 3. Component should respond to user actions:
// a. When user clicks "Like", number of likes should increase and button should be in the "on" state
// b. When user clicks again, number of likes should decrease and button should be in the "off" state
// 4. Display the number of likes whether button is on or off in the console
// 5. Define the class in a separate module, but use it in the main module
var Like = /** @class */ (function () {
    // likeCounts: number;
    // isSelected: boolean;
    function Like(_likesCount, _isSelected) {
        this._likesCount = _likesCount;
        this._isSelected = _isSelected;
    }
    Like.prototype.onClick = function () {
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
    };
    Object.defineProperty(Like.prototype, "likesCount", {
        get: function () {
            return this._likesCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: false,
        configurable: true
    });
    return Like;
}());
exports.Like = Like;
