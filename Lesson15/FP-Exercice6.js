/* 
6. Exercise
Convert users array from Exercise 1 to a new array, which has id property for each element in the array.
The value of the id property should be the index number of the element in the array. Use map method
(see documentation https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
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
console.log(users);

const withIds = users.map(( user, index) => ({
    ...user,
    id: index
}))

console.log(withIds);
// console.log(users);