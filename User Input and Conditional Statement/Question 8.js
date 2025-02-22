// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var numCheck = parseInt(prompt("Enter Number to Check is Divisible by 3 !!!"));
var num = numCheck % 3;

if(num == 0)
{
    console.log(numCheck + " is Divisible by 3");
    alert(numCheck + " is Divisible by 3");
}
else
{
    console.log(numCheck + "is not Divisible by 3");
    alert(numCheck + " is not Divisible by 3");
}