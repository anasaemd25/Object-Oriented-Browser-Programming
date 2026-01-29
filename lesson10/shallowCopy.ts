/* 
  Create a function to perform shallow object copies. 
  Shallow copy means that only primitives of the source are copied, 
  but any object properties still retain their original object references. 
*/ 

const a = { 
  foo: "bar", 
  x: 4, 
  y: 8, 
  z: 13.5 
} 

let b = a; // this will NOT copy the object, only the reference

/* This function should make a shallow copy/clone of the source object. 
   Shallow copy means that only primitives of the source are copied, but any object properties 
   still retain their original object references. */ 
function shallowCopy(source): object
{ 
  // Your code here 
  /*
  Plain and simple way to copy an object
  return {
    foo: source.foo,
    x: source.x,
    y: source.y,
    z: source.z
  };*/

  // Another 'basic' way to copy is to loop over the properties of the source object
    //   let copy = {};
    //   for(let propertyName in source) {
    //     copy[propertyName] = source[propertyName];
    //   }
    //   return copy;

    return {...source}; // using object spread syntax
} 


let copiedObject = shallowCopy(a); 
copiedObject.foo = "This is not the original object"; 
console.log(a); 
console.log(copiedObject); 
console.log(a==copiedObject); 