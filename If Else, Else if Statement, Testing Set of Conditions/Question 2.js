// 2. Write a JavaSCript program that accept two integers and display the larger. Also show if the two integers are equal

var num1 = prompt("Enter First number !!!");
var num2 = prompt("Enter Second Number");

if(num1 > num2)
{
    console.log("First Number: " + num1);
    console.log("Second Number: " + num2);
    console.log("Larger Value " + num1);
}
else if(num2 > num1)
{
    console.log("First Number: " + num1);
    console.log("Second Number: " + num2);
    console.log("Larger Value " + num2);
}
else if(num1 == num2)
{
    console.log("First Number: " + num1);
    console.log("Second Number: " + num2);
    console.log(num1 + " Equal " + num2);
}
else
{
    console.log("Error !!, Invalid Number !!!")
}