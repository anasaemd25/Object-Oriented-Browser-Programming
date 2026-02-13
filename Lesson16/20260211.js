alert("Hello from first");

// Access the element by ID 
const heading = document.getElementById("heading1");

// Change the text
heading.textContent = "New title";

// Change the style (as in your HTML comment)
heading.setAttribute("style", "color: red; margin: 50px;");

// Access the input and change its value
const input = document.getElementById("name-input");
input.value = "Hello World";