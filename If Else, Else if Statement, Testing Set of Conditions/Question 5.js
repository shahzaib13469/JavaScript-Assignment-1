// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

var password = "Saylani123";
var pwd = prompt("Enter Password...");

if(pwd == "")
{
    console.log("Please Enter Your Password !!!");
}
else if(password == pwd)
{
    console.log("Original Password: " + password);
    console.log("Entered Password: " + pwd);
    console.log("Correct! The Password you Entered Matches the Original Password..");
}
else
{
    console.log("Original Password: " + password);
    console.log("Entered Password: " + pwd);
    console.log("InCorrect Password !!!");
}