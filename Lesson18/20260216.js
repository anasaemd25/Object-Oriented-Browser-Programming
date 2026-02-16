document.getElementById("alertButton").onclick = function () {
    // alert("Hello from alert");
    let span = document.createElement("span");
    span.innerHTML = "Text of a span ";
    span.style.color = "red";
    span.style.fontSize = "25px";
    span.style.fontFamily = "Calibri";
    document.getElementById("p").appendChild(span);
}
