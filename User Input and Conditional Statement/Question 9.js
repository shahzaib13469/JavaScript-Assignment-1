// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var numCheck = parseInt(prompt("Enter Number to Check Even or Odd"));
var num = numCheck % 2;

if(num == 0)
{
    console.log(numCheck + " is Even Number !!!");
    alert(numCheck + " is Even Number !!!");
}
else
{
    console.log(numCheck + " is Odd Number !!!");
    alert(numCheck + " is Odd Number !!!");
}