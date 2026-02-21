/*
5. Exercise
Convert users array from Exercise 1 to a new array, 
where the name properties contain the original
names (first names) and “Bundy” as last name. Use map() method.
The result should be the following:
[
    { name: 'John Bundy', age: 33 },
    { name: 'Maxine Bundy', age: 24 },
    { name: 'Ted Bundy', age: 12 }
]
*/

const { add } = require("lodash");

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

const addLastName = (lastName) => {
    return users.map( user => { // Crea un nuevo array con map
        return { // Retorna un nuevo objeto para cada usuario
            ...user, // Copia las propiedades existentes
            name: `${user.name} ${lastName}` // Modifica el nombre
        }
    })
}

console.log(users);
console.log(addLastName("Bundy"));