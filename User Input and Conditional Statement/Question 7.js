// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var secretNumber = 7;
var guessNumber = parseInt(prompt("Enter Number !!!"));

if(guessNumber == secretNumber)
{
    console.log("Bingo! Correct Answer...");
    alert("Bingo! Correct Answer...");
}
else if(guessNumber == secretNumber-1 || guessNumber == secretNumber+1)
{
    console.log("Close Enough to Correct Answer !!! ");
    alert("Close Enough to Correct Answer !!!");
}
else
{
    console.log("Better Luck Next Time !!!");
    alert("Better Luck Next Time !!!")
}