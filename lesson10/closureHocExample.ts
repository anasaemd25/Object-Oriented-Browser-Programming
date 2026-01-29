// Higher-Order Function Example (Returns another function)
// 'name' is captured by the inner function (Closure)
function greetingsToYou(name: string) { // This is an outer function 
  const createdAt = new Date(); // Variable local to the outer function scope

  // Inner function: Defines the logic for greeting based on the season
  // It has access to 'name' and 'createdAt' from the outer scope
  function seasonSelector(type?: string) { // This is an inner function 
    switch (type) {
      // Logic for different greetings
      case "Christmas":
        console.log("Merry christmas " + name);
        break;

      case "New Year":
        console.log("Happy new year " + name);
        break;

      case "Day":
        console.log("Have a nice day " + name);
        break;

      default:
        console.log("Use either 'Christmas', 'New Year' or 'Day' as values");
    }
    // Accessing 'createdAt' from the closure
    console.log("This greeter was created on " + createdAt.toISOString());
  }

  return seasonSelector;  // Returning the inner function so it can be called later
}


let initialTime = new Date();
console.log("Initial time: " + initialTime.toISOString());

// Create a specific greeter for "Lasse"
// 'greeter' is now the 'seasonSelector' function, but with 'name="Lasse"' locked in its scope
let greeter = greetingsToYou("Lasse");

// Use the specialized function
// greeter(); // Removed unnecessary call with no argument
greeter("Christmas"); // outputs 'Merry christmas Lasse' and datestamp 
greeter("New Year");
greeter("Day");

let finishTime = new Date();
console.log("Finish time: " + finishTime.toISOString());