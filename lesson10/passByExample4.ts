// Initial Objects
let a = {
  foo: 1,
  bar: 2
}

let b = {
  foo: 5,
  bar: 6
}

console.log(a.foo + b.bar); // 1 + 6 = 7 

type FooBar = { foo: number; bar: number };

// Function accepting an Object (References are passed by value of the reference)
// Essentially, 'p' points to the SAME object as the argument passed
function selfSum(p: FooBar): FooBar {
  // Modifying property of 'p' modifies the original object
  p.foo = p.foo + p.bar;
  return p;
}

// Pass object 'a' to function. 'a' is mutated inside!
let result = selfSum(a);

// a.foo was changed from 1 to 3 (1+2) inside the function
// 3 + 6 = 9
console.log(a.foo + b.bar); // Output: 9

console.log(result); // Output: { foo: 3, bar: 2 }
console.log(a);      // Output: { foo: 3, bar: 2 } (Same object)

// 'result' contains the reference returned by the function, which is the same reference passed in ('a')
console.log(result == a); // Output: true 