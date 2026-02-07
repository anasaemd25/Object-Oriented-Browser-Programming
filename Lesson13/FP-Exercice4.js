/*
4. Exercise
Use map() method and the users array from Exercise 1 to implement a feature where you transform
the users array into a new array, which contains only the ages of each user. When printed to console
the resulting array should be
[ 33, 24, 12 ]
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

// Using .map()
// map() is a transformation method.
// 1. It iterates over every element in the array.
// 2. It applies the callback function `user => user.age` to each element.
// 3. It returns a NEW array with the results.
// IMPORTANT: It does NOT modify the original `users` array. This is immutability in action.
// The arrow function `user => user.age` is a shorthand for `(user) => { return user.age; }`.
function ageArray() {
    return users.map(user => user.age);
}

// Also possible with an arrow function:
let ages = () => users.map(user => user.age);

console.log(ageArray());
console.log(ages());
