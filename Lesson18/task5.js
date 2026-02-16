/*
    Task 5: Let's Handle Events
    1. Create a new HTML file with the following
    elements: span, p, textarea,
    input, button and implement the
    following:
    1. Once mouse is on textarea, show a
    text "Mouse is on textarea" in span
    element.
    2. Once mouse has left textarea, empty
    the span.
    3. Once a value is entered in textarea,
    show a text "Contents of textarea:
    [contents]" in span.
    4. Once button is pressed, increment the
    value in p by the value in input.
*/

const textArea = document.getElementById("textArea");
const span = document.getElementById("span");
const p = document.getElementById("p");


textArea.onmouseover = function() {
    span.innerHTML= "Mouse is on textarea";  
}

textArea.onmouseout = function() {
    span.innerHTML= " ";  
}

textArea.onchange = function() {
    span.innerHTML= " Contents of the textarea " + textArea.value;
}

document.getElementById("button").onclick = function() {
    p.innerHTML = Number(p.innerHTML) + 1;
}
