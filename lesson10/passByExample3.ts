// c.foo = 10; // Error: 'c' is not defined yet.

// Define a Type
type FooBar = { foo: number; bar: number };

// Create distinct objects (References in memory)
let a: FooBar = { foo: 1, bar: 2 };
let b: FooBar = { foo: 5, bar: 6 };

console.log(a.foo + b.bar); // 1 + 6 = 7

// Assigning 'a' to 'c' copies the REFERNECE, not the object itself.
// Both 'a' and 'c' now point to the SAME object in memory.
let c: FooBar = a;

// Modifying properties via 'c' will affect accessing them via 'a'
c.foo = 10;

// a.foo is now 10 because 'a' and 'c' share the object.
// 10 + 6 = 16
console.log(a.foo + b.bar); // Output: 16