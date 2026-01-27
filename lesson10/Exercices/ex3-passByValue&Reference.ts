/*
Exercise 3 (pass-by-value-and-reference/exercises/pbr-ex-3.js): 
Exercise template below. Create a function to perform shallow object copies. 
Shallow copy means that only primitives of the source are copied, 
but any object properties still retain their original object references.
*/

const a = {
    foo: "bar",
    x: 4,
    y: 8,
    z: 13.5
}

/* This function should make a shallow copy/clone of the source object.
Shallow copy means that only primitives of the source are copied, but any object properties
still retain their original object references. */

function shallowCopy(source: object): object {
    return { ...source };

    /* return  {
        foo: source.foo,
        x: source.x,
        y: source.y,
        z: source.z 
    }*/

    /*let copy = {};
    for (let key in source) {
        (copy as any)[key] = (source as any)[key];
    }
    return copy;*/
}

let copiedObject = shallowCopy(a);
copiedObject.foo = "This is not the original object";
console.log(a);
console.log(copiedObject);
console.log(a == copiedObject);       
