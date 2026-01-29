/* 
  Create a function to perform shallow object copies. 
  Shallow copy means that only primitives of the source are copied, 
  but any object properties still retain their original object references. 
*/

// Source object
const a = {
  foo: "bar",
  x: 4,
  y: 8,
  z: 13.5
}

// Simple assignment copies the REFERENCE, not the object.
let b = a; // 'b' points to the same object as 'a'.

/*  This function should make a shallow copy/clone of the source object. 
    Shallow copy means that only primitives of the source are copied, but any object properties 
    still retain their original object references. 
    <T extends object> is a Generic constraint ensuring source is an object.
*/
function shallowCopy<T extends object>(source: T): T {
  // Uses the Spread Syntax (...) to copy enumerable properties into a NEW object literal {}
  return { ...source };
}


// Create a true copy
let copiedObject = shallowCopy(a);

// Modify property on the copy
copiedObject.foo = "This is not the original object";

console.log(a); // Original 'a' remains unchanged
console.log(copiedObject); // Copy has the new value

// Comparison returns false because they are different objects in memory
console.log(a == copiedObject); // Output: false 