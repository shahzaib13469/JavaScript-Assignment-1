// 3. write a program that takes input a number from user and state whether the number is positive, negative or zero.

var num = prompt("Enter Number !!");

if(num > 0)
{
    console.log("Number: " + num);
    console.log("Number is Positive...");
}
else if(num < 0)
{
    console.log("Number: " + num);
    console.log("Number is Negative...");
}
else if(num == 0)
{
    console.log("Number: " + num);
    console.log("Number is Zero...");
}
else
{
    console.log("Error !!, Enter Inavalid Number!!!");
}