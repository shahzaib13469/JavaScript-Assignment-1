// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this:“Welcome to city of lights”

var cityName = prompt("Enter City Name !!");

if (cityName == "Karachi" || cityName == "karachi" || cityName == "KARACHI")
{
    console.log("City: " + cityName);
    alert("Welcome to City of Lights");
} 
else 
{
    console.log("City: " + cityName);
    alert("Welcome to " + cityName);
}
