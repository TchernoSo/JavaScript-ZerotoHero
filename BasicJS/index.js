//Good Luck 7/11/23

	
// JavaScript is the Programming Language for the Web.
// JavaScript can update and change both HTML and CSS.
// JavaScript can calculate, manipulate and validate data.

// JavaScript provides eight different data types which are 'undefined', 'null', 'boolean', 'string', 'symbol', 'bigint', 'number', and 'object'.
String = '12'
Number = 12

// var let and const
var =  //reassign
let = //updated not reassign
const = //never change



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


//     |  #special characters#

//     |   Code	     Output
//     |   \'	     single quote
//     |   \"	     double quote
//     |   \\	     backslash
//     |   \n	     newline
//     |   \t	     tab
//     |   \r	     carriage return
//     |   \b	     backspace
//     |   \f	     form feed

// Concatenating Strings with Plus Operator
var myName = 'T' + "S"

let ourStr = "I come first. ";
ourStr += "I come second.";

console.log("My name is " + myName + ". Thank you!");


// Find the Length of a String
let lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;

// Use Bracket Notation to Find the First Character in a String [index] or [i]
let firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0];

// Understand String Immutability
// WRONG
let myStr = "Bob";
myStr[0] = "J";
// CORRECT
var myStr = "Bob";
myStr = "Job";

// Use Bracket Notation to Find the Nth Character in a String

const lastName = "Lovelace";
const thirdLetterOfLastName = lastName[2]; 
// or
const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1];

// JavaScript Arrays
var myArray = ["Car", 2010];

// Nest arrays
const teams = [["Bulls", 23], ["White Sox", 45]];

// Access Array Data with Indexes
var myArray = [50, 60, 70];
var myData = myArray[0]

// Modify Array Data
const myArray = [18, 64, 99];
myArray[0] = 45

// Access Multi-Dimensional Arrays
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  var myData = myArray[2][1]; //in order to find number 8
  
//   Push Method adds them to the end of the array
var arr1 = [1, 2, 3];
arr1.push(4, 5);

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

// unshift Method adds the element at the beginning of the array
const ourArray = ["Stimpson", "J", "cat"];
ourArray.unshift("Happy")
// or
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);


// pop Method pop a value off of the end of an array
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();

// shift Method removes the first element
var threeArr = [1, 4, 6];
var oneDown = threeArr.shift();

// Shopping List

var myList = [["apple", 12],["banana", 5], ["grapes", 12], ["peach", 2], ["kiwi", 5]];

// Eusable JavaScript with Functions
function reusableFunction(){
  console.log("Hi World")
}

reusableFunction()


function myArray(){
  console.log(myList)
}

// Functions with Arguments

function sumTotal(sum1, sum2){
  var total = sum1 + sum2
  console.log(total);
}

sumTotal(1,2)

// Function with Return
function timesFive(num){
  return num * 5
}

timesFive(2) //returns 2*5 = 10

// Global Scope and Functions

const myGlobal =10
function fun1() {
  oopsGlobal = 5
}

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

// Local Scope and Functions
function myLocalScope() {
  const myVar = "this is local"
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

console.log('outside myLocalScope', myVar);

// Global vs. Local Scope in Functions, local variable takes precedence over the global variable.
const outerWear = "T-Shirt";

function myOutfit() {
  const outerWear = "sweater"
  return outerWear;
}

myOutfit();

// Assignment with a Returned Value
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7)
