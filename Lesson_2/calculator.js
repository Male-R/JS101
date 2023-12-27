let readLine = require ('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('Welcome to Calculator!');

while (true) {

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

  let output;

  switch (operation) {
    case '1':
      output = Number(firstNumber) + Number(secondNumber);
      break;
    case '2':
      output = Number(firstNumber) - Number(secondNumber);
      break;
    case '3':
      output = Number(firstNumber) * Number(secondNumber);
      break;
    case '4':
      output = Number(firstNumber) / Number(secondNumber);
      break;
  }

  prompt(`The result is : ${output}`);

  prompt('Would you like to make another calculation?\nyes no\n');
  let again = readLine.question();

  if (again !== 'yes') {
    break;
  }
}

