// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now

var colorSignal = prompt("Enter Color of Road Traffic Signal !!!");

if(colorSignal == "red" || colorSignal == "Red" || colorSignal == "RED") 
{
    console.log("Must Stop !!!");
    alert("Must Stop !!!");
}
else if(colorSignal == "yellow" || colorSignal == "Yellow" || colorSignal == "YELLOW")
{
    console.log("Ready to Move !!!");
    alert("Ready to Move !!!");
}
else if(colorSignal == "green" || colorSignal == "Green" || colorSignal == "GREEN")
{
    console.log("Move Now !!!");
    alert("Move Now !!!");
}
else
{
    console.log("Enter Invalid Color Signal !!!");
    alert("Enter Invalid Color Signal !!!");
}