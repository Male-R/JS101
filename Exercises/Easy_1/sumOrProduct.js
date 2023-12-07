
let rlSync = require('readline-sync');

let number = rlSync.question('Please enter an integer greater than 0: ');

while (true) {
    if (number <= 0) {
        number = rlSync.question('Please enter an integer greater than 0: ');
    } else {
        break;
    }
}

let selection = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

let result = 1;

if (selection === 's') {
    for (let counter = 2; counter <= number; counter+=1 ) {
        result += counter;
    } 
    console.log(`The sum of the integers between 1 and ${number} is ${result}.`);
} else if (selection === 'p') {
        for (let counter = 2; counter <= number; counter+=1 ) {
            result *= counter;
        }
        console.log(`The product of the integers between 1 and ${number} is ${result}.`)
    };





