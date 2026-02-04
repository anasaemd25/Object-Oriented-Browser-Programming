/*
4. Exercise
Use map() method and the users array from Exercise 1 to implement a feature where you transform
the users array into a new array, which contains only the ages of each user. When printed to console
the resulting array should be
[ 33, 24, 12 ]
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

function ageArray(){
    return users.map(user => user.age);
}

console.log(ageArray());
