// Approach 1: Using split()
let str = "Javascript is fun";
// The .split(" ") method divides the string into an array of substrings based on the space delimiter
// result becomes ["Javascript", "is", "fun"]
let result = str.split(" ");
console.log(result[1]); // Accessing the second element ("is")

// or 

// Approach 2: Using substring()
let ex4Satrt = "Javascript is fun";
// The .substring(index) method extracts characters from the specified index to the end of the string
// Index 11 starts at 'f' of "fun" (Note: "Javascript " is 11 chars long: 10 letters + 1 space)
// Wait, J=0, a=1... space is at 10. 'i' is 11. 's' is 12, ' ' is 13. 'f' is 14. 
// "Javascript " length is 11. So index 11 is "i". "is fun". 
// Let's re-verify the index. "Javascript" is 10 chars. Index 0-9. Space is 10. "is" starts at 11.
let extractResult = ex4Satrt.substring(11);
console.log(extractResult);