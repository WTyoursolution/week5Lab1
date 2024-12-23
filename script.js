"use script";

// Temperature Converter: 25%
// Create a program

function convertToF() {
  //Ask the user for input
  let userInput = prompt("input a temperature in Celsius");

  //Convert the input to a number
  let celsius = Number(userInput);

  //Convert the temperature to Fahrenheit.
  let fahrenheit = (celsius * 9) / 5 + 32;

  //Display a message with the conversion.
  alert("your temperature is " + fahrenheit + " degrees Fahrenheit");
}
//call the function to run
convertToF();

//Age Verification: 25%
// Write a program

function determineStatus() {
  // ask user for input
  let userNumber = prompt("Hello, what is your age");

  // Convert user age to a number
  let age = Number(userNumber);

  // determine if the user is a minor, adult or senior citizen
  if (age < 18) {
    alert("OH BOY YOUR A MINOR!!!!");
  } else if (age >= 18 && age < 45) {
    alert("YAY YOU'VE MADE IT TO ADULTHOOD!!!!");
  } else if (age >= 45) {
    alert("CONGRATS YOUR A SENIOR CITIZEN!!!!");
  } else {
    alert("invalid input! Numbers only!!!!");
  }
}

//call the function to run
determineStatus();

// Simple Calculator: 50%
// Write a program

function operation() {
  //ask user to choose operation
  let operation = prompt("choose an operation: +, -, +, /");

  //ask user to input two numbers
  let num1 = Number(prompt("enter first number"));
  let num2 = Number(prompt("enter second number"));

  //store the result
  let result;

  if (operation === "+") {
    result = num1 + num2;
  } else if (operation === "-") {
    result = num1 - num2;
  } else if (operation === "*") {
    result = num1 * num2;
  } else if (operation === "/") {
    result = num1 / num2;
  } else {
    alert("invalid operation selected");
  }

//Display the result
alert("The result is: " + result);
}


//call the function to run
operation();
