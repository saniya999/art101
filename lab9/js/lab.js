// index.js - Functions
// Author: Paulina and Sa'Niya 
// Date: 5/4/2023

// Constants

// Functions


// Use getElementById() to find your output <div> and assign it to a variable outputEl
var outputEl = document.getElementById("output");
// Create a new element with document.createElement("p") and assign it to a variable new1El
var new1El = document.createElement("p")
// Change the html attribute of new1El to say something new.
new1El.innerHTML = "eggs"
// Create another new element and assign it to a variable new2El
var new2El = document.createElement("p")
// Change the html attribute of new2El to say something else.
new2El.innerHTML = "ham"
// Append both new elements one at a time using appendChild() to your output <div>
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// Change the css attributes of at least two elements of your page

new1El.style.color = "green";

new1El.style.fontSize = "1in";

new2El.style.fontSize = "0.5in";




