/*
1. Exercise
Here is code where function checkAge() is used to check the age of users to see whether it passes a limit.
Modify the checkAge() function to be pure. 
*/

const users = [{
    name: "John",
    age: 33
},
{
    name: "Maxine",
    age: 24
},
{
    name: "Ted",
    age: 12
},
]

// Impure version: 
// This function relies on a hardcoded value 'ageLimit' inside it.
// While it doesn't change external state, it is "opaque" or rigid. 
// A truly reusable (and functional) approach would treat the limit as a parameter.
function checkAge(user) {
    const ageLimit = 18;
    if (user.age < ageLimit) {
        return false;
    } else {
        return true;
    }
    // return user.age >= ageLimit;
}

// Alternative version: 
// Still impure in the sense of 'hardcoded dependency'. 
// It does not allow the caller to decide what the age limit is.
// It simply performs the check and returns a boolean.
function checkAge2(user) {
    const ageLimit = 18;
    return user.age >= ageLimit;
}

// Pure version: 
// 1. Deterministic: For the same inputs (user, ageLimit), it ALWAYS returns the same output.
// 2. No Side Effects: It doesn't change anything outside itself.
// Included 'ageLimit' as a parameter makes it flexible and dependency-free.
// This allows the function to be tested easily with different limits (e.g., 21, 16).
function checkAge3(user, ageLimit) {
    return user.age >= ageLimit;
}

// The ternary operator (condition ? exprIfTrue : exprIfFalse) is used here for concise conditional logging.
// It checks the result of checkAge and prints the corresponding string.
console.log(checkAge(users[0]) ? "Access granted you're 18+" : "Access denied, you must be at least 18 years old.");
console.log(checkAge2(users[1]) ? "Access granted you're 18+" : "Access denied, you must be at least 18 years old.");
console.log(checkAge3(users[2]) ? "Access granted you're 18+" : "Access denied, you must be at least 18 years old.");