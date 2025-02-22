// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temp = parseFloat(prompt("Enter Temperature !!!"));

if(temp > 40)
{
    console.log("It is Too Hot Outside...");
    alert("It is Too Hot Outside...");
}
else if(temp > 30)
{
    console.log("The Weather Today is Normal...");
    alert("The Weather Today is Normal...");
}
else if(temp > 20)
{
    console.log("Today's Weather is Cool...");
    alert("Today's Weather is Cool...");
}
else if(temp > 10)
{
    console.log("OMG! Today's Weather is so Cool...");
    alert("OMG! Today's Weather is so Cool...");
}
else
{
    console.log("Error! Enter Valid Temperature...");
    alert("Error! Enter Valid Temperature...");
}