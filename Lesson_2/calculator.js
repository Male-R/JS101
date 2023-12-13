let readLine = require('readline-sync');

console.log('Welcome to Calculator!');

console.log('What\'s the first number?');
let firstNumber = readLine.question();

console.log('What\'s the second number?');
let secondNumber = readLine.question();

console.log(' What operation would you like to perform?\n 1) add 2) Subtract 3) Multiply 4) Divide');
let operation = readLine.question();

let output;

if (operation === '1') {
    output = Number(firstNumber) + Number(secondNumber);    
} else if (operation === '2') {
    output = Number(firstNumber) - Number(secondNumber);
} else if (operation === '3') {
    output = Number(firstNumber) * Number(secondNumber);
} else if (operation === '4') {
    output = Number(firstNumber) / Number(secondNumber);
}

console.log(`The result is : ${output}`);


