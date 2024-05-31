"use strict";
// question 76
// Define the function
function add(num1, num2) {
    return num1 + num2;
}
// Call the function with two numbers
const result = add(5, 7);
// Log the result
console.log(result);
// Question: 77
// Define the function with a default parameter
function greet(name = "Kanwal") {
    return `Hello, ${name}!`;
}
// Call the function with a name
const greetingWithName = greet("Sidra");
console.log(greetingWithName);
// Call the function without a name
const greetingWithoutName = greet();
console.log(greetingWithoutName);
// Question: 78
// Function Declaration
function squareDeclaration(num) {
    return num * num;
}
console.log(squareDeclaration(5));
// Function Expression
const squareExpression = function (num) {
    return num * num;
};
console.log(squareExpression(5));
