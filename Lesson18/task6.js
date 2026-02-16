/*
    1. Create a new html and js file.
    2. In your JS do the following:
    1. Create a new div element.
    2. Append it to the body.
    3. Add text "This is a div" to your
    div.
    4. Add background colour to your
    div, make it 50% width and add
    10px padding.
    5. Add a button in your div.    
*/

let div = document.createElement("div");
div.innerHTML = " This is a div ";
document.body.appendChild(div);
div.style.background = "blue";
div.style.color = "red";
div.style.width = "50%";
div.style.padding = "10px";
// div.style = "bacground: orange: width: 50%, 

let button = document.createElement("button");
button.innerHTML = " This is a button ";
button.style.backgroundColor= "green";
div.appendChild(button)


