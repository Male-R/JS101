
let rlSync = require('readline-sync');

let billAmount = parseFloat(rlSync.question('What is the bill? '));
let tipPercentage = parseFloat(rlSync.question('What is the tip percentage? '));

let tipAmount = (tipPercentage * billAmount) / 100;

console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${(tipAmount + billAmount).toFixed(2)}`);