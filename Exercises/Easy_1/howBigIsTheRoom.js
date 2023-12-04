
let rlSync = require('readline-sync');

let width = rlSync.question("Enter the width of the room in meters: ");
let length = rlSync.question("Enter the length of the room in meters: ");

function area (width, length) {
    let squareM = (width * length).toFixed(2);
    let squareF = (squareM * 10.7639).toFixed(2);
    return console.log(`The area of the room is ${squareM} square meters (${squareF} square feet).`)
}

area(width, length);