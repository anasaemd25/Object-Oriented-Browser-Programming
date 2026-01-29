// Function accepting a primitive type (number)
function selfSum(p: number): number {
  // 'p' is a LOCAL COPY of the value passed in.
  p = p + p; // Modifying 'p' only affects the local copy
  return p;
}

let c = 2;
// Pass the VALUE of 'c' (which is 2) to the function
console.log(selfSum(c)); // Output: 4 (The function returns the modified copy)

// 'c' itself remains unchanged because it was passed by value
console.log(c); // Output: 2