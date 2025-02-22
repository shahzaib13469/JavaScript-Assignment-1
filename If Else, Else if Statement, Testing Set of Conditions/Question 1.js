// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

var num = prompt("Enter number or Character..");

if(num == "")
{
    alert("Please fill this field")
}
else
{
    if(num >= 65 && num <= 90)
    {
        alert("It's a Uppercase letter ASCII Code...");
        console.log("It's a Uppercase letter ASCII Code...");
    }
    else if(num >= 97 && num <= 122)
    {
        alert("It's a Lowercase letter ASCII Code...");
        console.log("It's a Lowercase letter ASCII Code...");
    }
    else
    {
        alert("It's a Number...");
        console.log("It's a Number...");
    }
}
