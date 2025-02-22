// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var names = "John Doe";
var quantity = 5;
var title = "T-shirt(s)";
var store = "XYZ clothing Store";

document.write("<b>" + names + "</b>" +  " ordered " + "<b>" + quantity + " " + title + "</b>" + " on " + store);