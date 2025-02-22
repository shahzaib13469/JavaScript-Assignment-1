// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var num1 = parseFloat(prompt("Enter First Number !!!"));
var num2 = parseFloat(prompt("Enter Second Number !!!"));
var op = prompt("Enter Operator !!!");
var result;

if(op == "+")
{
    result = num1 + num2;
    console.log("Addition Result is: " + result);
    alert("Addition Result is: " + result);
}
else if(op == "-")
{
    result = num1 - num2;
    console.log("Subtraction Result is: " + result);
    alert("Subtraction Result is: " + result);
}
else if(op == "*")
{
    result = num1 * num2;
    console.log("Multiplication Result is: " + result);
    alert("Multiplication Result is: " + result);
}
else if(op == "/")
{
    result = num1 / num2;
    console.log("Division Result is: " + result);
    alert("Division Result is: " + result);
}
else if(op == "%")
{
    result = num1 % num2;
    console.log("Modulus Result is: " + result);
    alert("Modulus Result is: " + result);
}
else
{
    console.log("Error!! Enter Invalid Operator...");
    alert("Error!! Enter Invalid Operator...");
}
