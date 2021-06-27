/* eslint-disable max-lines-per-function */
/* eslint-disable max-statements */
/*
  Name: Mortgage / Car Loan Calculator
  Author: Rishab Dhamija
  Date: June 24, 2021
*/

// PEDAC
/*
Problem: calculate the monthly mortgage / payment
Input :
  1) loan amount
  2) APR (Annual Percentage rate)
  3) loan duration (year)
Output :
  1) Monthly mortgage price

Examples:

Data Structure:

Algorithm:
START
GET loanAmount
GET annualInterestRate
GET loanDurationYears

SET loanDurationMonths = loanDurationYears * 12
SET monthlyInterstRate = annualInterestRate / 12
SET monthlyPayment = value after calculating from formula

PRINT monthlyPayment

END

*/

// Code
const readline = require('readline-sync');
const prompt = (message) => {
  console.log(`${message}`);
};

const welcomeMessage = () => {
  prompt('------------------------------');
  prompt('Welcome to the mortgage calculator application!!');
  prompt('------------------------------');
};

const isFloat = (n) => {
  return Number(n) === n && n % 1 !== 0;
}

const loanMonthsConverter = (loanYears) => {
  return loanYears * 12;
};

const checkAPR = (apr) => {
  if (isNaN(apr)) {
    prompt('The value for APR is invalid. Please enter a valid number.');
    return false;
  }
  return true;
};

const checkInvalidLoanAmount  = (loanAmount) => {
  if (isNaN(loanAmount)) {
    prompt('The loan amount is invalid. Please enter a valid value.');
    return false;
  }
  return true;
};

const checkLoanAnnualDuration = (annualDuration) => {
  if (isNaN(annualDuration)) {
    prompt('The value for annual loan duration is invalid. Please try again!!');
    return false;
  }
  return true;
};

const monthlyIRCalculator = (apr) => {
  const annualPercentage = apr / 100;
  const monthlyRate = annualPercentage / 12;
  return monthlyRate;
};

const monthsLoanCalculator = (annualDuration) => {
  const monthlyDuration = parseFloat(annualDuration) * 12;
  return monthlyDuration;
};

const mortgageFormula = (loanAmount, monthlyRate, loanDuration) => {
  // let temp1 = Math.pow((1 + monthlyRate) , (-loanDuration));
  // temp1 -= 1;
  // let temp2 = monthlyRate / temp1;
  // let monthlyPayment = loanAmount * temp2;
  // eslint-disable-next-line max-len
  let monthlyPayment = loanAmount * (monthlyRate / (1 - Math.pow((1 + monthlyRate), (-loanDuration))));
  return monthlyPayment;
};


const getInputFromUser = () => {
  prompt('Enter the loan amount');
  let loanAmount = Number(readline.question());
  while (!checkInvalidLoanAmount(loanAmount)) {
    loanAmount = Number(readline.question());
  }
  prompt('Enter the APR (annual Interest rate)  in integer value (Ex: 5 for 5%)');
  let annualInterestRate = Number(readline.question());
  while (!checkAPR(annualInterestRate)) {
    annualInterestRate = Number(readline.question());
  }
  prompt('Enter the loan duration annually (Ex: 4, 4,25 etc)');
  let annualLoanDuration = Number(readline.question());
  while (!checkLoanAnnualDuration(annualLoanDuration)) {
    annualLoanDuration = Number(readline.question());
  }
  console.log('this will be sent as input ' ,loanAmount, annualInterestRate, annualLoanDuration);
  return { loanAmount, annualInterestRate, annualLoanDuration};
};


const mortgageCalculator = () => {
  welcomeMessage();
  const {
    loanAmount,
    annualInterestRate,
    annualLoanDuration} = getInputFromUser();
  const monthlyRate = monthlyIRCalculator(annualInterestRate);
  const loanMonths = monthsLoanCalculator(annualLoanDuration);
  const monthlyPayment = mortgageFormula(loanAmount, monthlyRate, loanMonths);
  prompt(`This is the monthly Payment ${monthlyPayment}`);
};


mortgageCalculator();
