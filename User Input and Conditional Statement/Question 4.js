// 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”

var fuel = parseFloat(prompt("Enter Fuel in Litres"));

if(fuel < 0.25)
{
    console.log("Please Refill the Fuel !!!");
    alert("Please Refill the Fuel !!!");
}
else
{
    console.log("Enough Fuel In Car !!!");
    alert("Enough Fuel In Car !!!");
}