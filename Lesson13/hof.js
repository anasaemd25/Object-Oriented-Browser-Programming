const withLog = (fn) => { 
	return (...args) => { 	
		console.log(`Calling ${fn.name}`); 
		return fn(...args); 
	}; 
};

const add = (a, b) => a + b; 
const minus = (a, b) => a -b;
console.log(add(5, 8));
const addWithLogging = withLog(add); 
const minusWithLogging = withLog(minus);
let returnValue = addWithLogging(3, 4); 
console.log(returnValue);
console.log(minusWithLogging(10, 5));