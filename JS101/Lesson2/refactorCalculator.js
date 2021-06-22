/*
* Name: Calculator Application
* Author: Rishab Dhamija
* Date: 22 June, 2021
* Features: Multi-language calculator application.
*/
const calculatorMessages = require('./calculatorMessages');
const readline = require('readline-sync');
let repeatCalculator = 1;
function prompt ( message ) {
  console.log(`=> ${message}`);
}

function invalidNumber (number) {
  return Number.isNaN(number);
}

// welcome message to the user
prompt(calculatorMessages.languageChoice);
let languageChoice = Number(readline.question());
while (![1,2,3].includes(languageChoice)) {
  prompt(calculatorMessages.invalidLanguageChoice);
  prompt(calculatorMessages.languageChoice);
  languageChoice = Number(readline.question());
}
let languageMessages = {};
// choosing language in accordance to user's input
switch (Number(languageChoice)) {
  case 1:
    languageMessages = calculatorMessages["English"];
    break;
  case 2:
    languageMessages = calculatorMessages["French"];
    break;
  case 3:
    languageMessages = calculatorMessages["Hindi"];
    break;

}

console.log(calculatorMessages.horizontalBars);
console.log(languageMessages.welcomeMessage);
console.log(calculatorMessages.horizontalBars);


while ( repeatCalculator === 1 ) {
  prompt(languageMessages.firstNumber);
  // Note: readline.question() always returns a string
  let number1 = Number(readline.question());
  while (invalidNumber(number1)) {
    prompt(languageMessages.invalidNumber);
    number1 = Number(readline.question());
  }
  prompt(languageMessages.secondNumber);
  let number2 = Number(readline.question());
  while (invalidNumber(number2)) {
    prompt(languageMessages.invalidNumber);
    number2 = Number(readline.question());
  }
  prompt(languageMessages.operation);
  let operation = readline.question();
  while (!['1','2','3','4'].includes(operation)) {
    prompt(languageMessages.invalidOperation);
    operation = readline.question();
  }
  let result = 0;
  switch (Number(operation)) {
    case 1:
      result = Number(number1) + Number(number2);
      break;
    case 2:
      result = Number(number1) - Number(number2);
      break;
    case 3:
      result = Number(number1) * Number(number2);
      break;
    case 4:
      result = Number(number1) / Number(number2);
      break;
  }
  prompt(`${languageMessages.firstNumberResult} ${number1}`);
  prompt(`${languageMessages.secondNumberResult} ${number2}`);
  prompt(`${languageMessages.operationResult} ${result}`);

  prompt(`${languageMessages.anotherCalculation}`);
  repeatCalculator = Number(readline.question());
  while (![1,2].includes(repeatCalculator)) {
    prompt(languageMessages.invalidCalculation);
    repeatCalculator = Number(readline.question());
  }
}

// ending message to the user
console.log(calculatorMessages.horizontalBars);
console.log(languageMessages.goodBye);
console.log(calculatorMessages.horizontalBars);