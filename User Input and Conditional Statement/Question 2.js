// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter Your Gender !!!");

if (gender == "Male" || gender == "male" || gender == "MALE" ) 
{
    console.log("Good Morning Sir !!");
    alert("Good Morning Sir !!");
} 
else if(gender == "Female" || gender == "female" || gender == "FEMALE" )
{
    console.log("Good Morning Madam !!");
    alert("Good Morning Madam !!");
}
else
{
    console.log("You Enter Invalid Gender !!!");
    alert("Good Morning Madam !!");
}