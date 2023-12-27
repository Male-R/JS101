let readLine = require ('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}


prompt('Welcome to Calculator!');

prompt('What\'s the first number?');
let firstNumber = readLine.question();

while (invalidNumber(firstNumber)) {
  prompt('Hmm... that doesn\'t look like a valid number.');
  firstNumber = readLine.question();
}

prompt('What\'s the second number?');
let secondNumber = readLine.question();

while (invalidNumber(secondNumber)) {
  prompt('Hmm... that doesn\'t look like a valid number.');
  secondNumber = readLine.question();
}

prompt(' What operation would you like to perform?\n 1) add 2) Subtract 3) Multiply 4) Divide');
let operation = readLine.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3 or 4');
  operation = readLine.question();
}

function calculator (number1, number2, operator) {

  let output;

  switch (operator) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  prompt(`The result is : ${output}`);
}

calculator(firstNumber, secondNumber, operation);

prompt('Would you like to make another calculation?\nyes no\n');
let again = readLine.question();

while (again !== 'no' && again !== 'yes') {
  prompt('Must choose yes or no');
  again = readLine.question();
}

while (again === 'yes') {
  prompt('What\'s the first number?');
  firstNumber = readLine.question();

  while (invalidNumber(firstNumber)) {
    prompt('Hmm... that doesn\'t look like a valid number.');
    firstNumber = readLine.question();
  }

  prompt('What\'s the second number?');
  secondNumber = readLine.question();

  while (invalidNumber(secondNumber)) {
    prompt('Hmm... that doesn\'t look like a valid number.');
    secondNumber = readLine.question();
  }

  prompt(' What operation would you like to perform?\n 1) add 2) Subtract 3) Multiply 4) Divide');
  operation = readLine.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3 or 4');
    operation = readLine.question();
  }

  calculator(firstNumber, secondNumber, operation);
  prompt('Would you like to make another calculation?\nyes no\n');
  again = readLine.question();
}

