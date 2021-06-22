// ask the user for the first number
// ask the user for the second number
// ask the user for an operation to perform
// Perform the operation on two numbers.
// Print the result on the terminal.
const readline = require('readline-sync');
console.log('Welcome to Calculator!');
console.log("What's the first number?");

// Note: readline.question() always returns a string
let number1 = Number(readline.question());
console.log("What's the second number?");
let number2 = Number(readline.question());

console.log("What operation would you like to perform?\n1)Add\n2)Subtract\n3)Multiply\n4)Divide");
let operation = readline.question();
let result = 0;
if (operation === '1') {
/* Note: the + operator performs string concatenation
   if any of the two operands is string datatype
*/
  result = number1 + number2;
} else if (operation === '2') {
  result = number1 - number2;
} else if (operation === '3') {
  result = number1 * number2;
} else if (operation === '4') {
  result = number1 / number2;
} else {
  result = "Invalid Operation selected!!";
}

console.log(`The first number is ${number1}`);
console.log(`The second number is ${number2}`);
console.log(`The result is ${result}`);