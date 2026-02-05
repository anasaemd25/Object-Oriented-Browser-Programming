/* Examples from class 03.02.2026 */

const add = (a, b) => a + b;
console.log(typeof(add()));
function add2(a, b) {
    return a + b;
}
console.log(add(1, 2));
console.log(add2(1, 2));

let SECRET = 42; 
const getId = (a) => SECRET * a;
function getId2( a ) {
    return SECRET * a;
}
console.log(getId(2));
SECRET = 5;
console.log(getId2(2));

let id_count = 0; 
const getId3 = () => ++id_count;
function getId4() {
    return ++id_count;
}
console.log(getId3());
console.log(getId4());


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