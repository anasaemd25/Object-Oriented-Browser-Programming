/*
1. Exercise
Here is code where function checkAge() is used to check the age of users to see whether it passes a limit.
Modify the checkAge() function to be pure. 
*/

const users = [{
    name:"John",
    age: 33
    },
    {
    name:"Maxine",
    age: 24
    },
    {
    name:"Ted",
    age: 12
    },
]

// Impure version: This function has a hardcoded ageLimit inside it, making it less flexible and 
// potentially impure if the limit needs to vary without modifying the function code.
// It depends on the input 'user' but the ageLimit is not configurable, which can be seen as a form of impurity in terms of reusability.
function checkAge(user) {
    const ageLimit = 18;
    if(user.age < ageLimit){
        return false;
    }else{
        return true;
    }
    // return user.age >= ageLimit;
}

// Alternative version: Simplified logic, but still has the same issue as checkAge – the ageLimit is hardcoded, limiting flexibility.
function checkAge2(user) {
    const ageLimit = 18;
    return user.age >= ageLimit;
}

// Pure version: This function takes both the user and ageLimit as parameters, making it fully pure. 
// Its output depends only on the inputs, with no hardcoded values.
// Pure functions are more testable, reusable, and predictable, as they don't rely on internal constants that can't be changed externally.
function checkAge3(user, ageLimit) {
    return user.age >= ageLimit;
}

console.log(checkAge(users[0]) ? "Access granted you're 18+" : "Access denied, you must be at least 18 years old.");
console.log(checkAge2(users[1]) ? "Access granted you're 18+" : "Access denied, you must be at least 18 years old.");
console.log(checkAge3(users[2]) ? "Access granted you're 18+" : "Access denied, you must be at least 18 years old.");