// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

var subject_1 = parseFloat(prompt("Enter First Subject Marks !!!"));
var subject_2 = parseFloat(prompt("Enter Second Subject Marks !!!"));
var subject_3 = parseFloat(prompt("Enter Third Subject Marks !!!"));
var totalMarks = 300;
var obtMarks = subject_1 + subject_2 + subject_3;
var percentage = (obtMarks/totalMarks)*100;

if(percentage >= 80)
{
    console.log("Total Marks: " + totalMarks);
    console.log("Marks Obtained: " + obtMarks);
    console.log("Percentage: " + percentage);
    console.log("Grade: A-One !!!");
    console.log("Remarks: Excellent !!!");
}
else if(percentage >= 70)
{
    console.log("Total Marks: " + totalMarks);
    console.log("Marks Obtained: " + obtMarks);
    console.log("Percentage: " + percentage);
    console.log("Grade: A !!!");
    console.log("Remarks: Good !!!");
}
else if(percentage >= 60)
{
    console.log("Total Marks: " + totalMarks);
    console.log("Marks Obtained: " + obtMarks);
    console.log("Percentage: " + percentage);
    console.log("Grade: B !!!");
    console.log("Remarks: You need to improve !!!");
}
else
{
    console.log("Total Marks: " + totalMarks);
    console.log("Marks Obtained: " + obtMarks);
    console.log("Percentage: " + percentage);
    console.log("Grade: Fail !!!");
    console.log("Remarks: Sorry !!!");
}
