//Good Luck 7/11/23

	
// JavaScript is the Programming Language for the Web.
// JavaScript can update and change both HTML and CSS.
// JavaScript can calculate, manipulate and validate data.

// JavaScript provides eight different data types which are 'undefined', 'null', 'boolean', 'string', 'symbol', 'bigint', 'number', and 'object'.
String = '12'
Number = 12

// backslashes starting from outside and end inside of a quote is not the end of the string, 
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
"Alan said, \"Peter is learning JavaScript"


// MYVAR is not the same as MyVar nor myvar
// Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have the first word in lowercase and the first letter of each subsequent word is capitalized.
// Variable names can be made up of numbers, letters, and $ or _, but may not contain spaces or start with a number

var myName;
// declare a string variable
myName = "Tcherno";
console.log(myName);

// "var" keyword is that you can easily overwrite variable declarations:
var camper = "James";
var camper = "David";
console.log(camper);

// A keyword called "let" was introduced in ES6, a major update to JavaScript, to solve this potential issue with the "var" keyword
let catName = "Oliver";
let catSound = "Meow!";

// you can also declare variables using the "const" keyword.They are a constant value, which means that once a variable is assigned with "const", it cannot be reassigned:
const fCC = "I'm";
let fact = "Cool!"; 
fact = "Awesome!";
console.log(fCC, fact);


// The above declares a myVar variable with no value, then assigns it the value 5. Next, a variable named myNum is declared with no value. Then, the contents of myVar (which is 5) is assigned to the variable myNum. Now, myNum also has the value of 5.

var a;
a = 7;
var b;
b = a;

// When JavaScript variables are declared, they have an initial value of undefined. If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number"
// Initialize the three variables a, b, and c with 5, 10, and "I am a" 
var a;
var b;
var c;
a = 5;
b = 10;
c = "I am a"
a = a + 1;
b = b + 5;
c = c + " String!";

// You can easily increment or add one to a variable with the ++ operator.
i++; || i--;
// is the equivalent of i = i + 1 or i = i - 1;;

// +=  or -= or any other operator=.

let myVar = 1;
myVar += 5;
console.log(myVar);
// is the equivalent of myVar = myVar + 5 or myVar = myVar - 5 ;
let a = 3;
let b = 17;
let c = 12;
a += 12;
b += 9 ;
c += 7;

// The remainder operator % gives the remainder of the division of two numbers.
5 % 2 = 1
5 / 2 = 2 remainder 1
2 * 2 = 4
5 - 4 = 1

