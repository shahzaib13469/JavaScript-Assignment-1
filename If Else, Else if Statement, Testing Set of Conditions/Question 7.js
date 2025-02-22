// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

var timee = prompt("Enter Time in 24hr Format with colon...");

if(timee >= "0000" && timee < "1200")
{
    console.log("Good Morning !!!");
}
else if(timee >= "1200" && timee < "1700")
{
    console.log("Good Afternoon !!!");
}
else if(timee >= "1700" && timee < "2100")
{
    console.log("Good Evening !!!");
}
else if(timee >= "2100" && timee <= "2359")
{
    console.log("Good Night !!!");
}
else
{
    console.log("Error !!, Enter Invalid Time...")
}