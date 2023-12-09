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

// Boolean Values: true or false.
function myBoolean(){
  return true;
}
myBoolean()

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

// If Statements
function trueOrFalse(wasThatTrue) {
if(wasThatTrue){
  return "Yes, that was true"
}
return "No, that was false"

}
trueOrFalse(true)
trueOrFalse()

// Equality Operator
function Equality(value){
  if (value == 12){
    return "Equal"
  }
  return "Not Equal"
}

Equality(10)

// Strict Equality Operator does not perform a type conversion.

3 ===  3  // true
3 === '3' // false




// Inequality Operator means not equal and returns false 
function testNotEqual(val) {
  if (val!= 99) { 
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

// Strict Inequality Operator
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";if 
}

testStrictNotEqual(10);

// Greater and Less Operator
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10)  {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

// or
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

// or

function isLess(a, b) {
  return a < b
}
isLess(10, 15);

// "&&" is a logical operator used in programming and computer science. It represents the logical AND operation.
function testLogicalAnd(val) {

  if (val<= 50 &&  val >= 25) {
      return "Yes";
  }

  return "No";
}

testLogicalAnd(10);

// "||" is a logical operator used in programming and computer science. It represents the logical OR operation.
function testLogicalOr(val) {

  if (val < 10  || val > 20) {
    return "Outside";
  }
  return "Inside";
}

testLogicalOr(15);

// Else Statements
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }
  else{
    return "Between 5 and 10";
  }
}

testElseIf(7);

// Switch Statements compares the value to the case statements which define various possible values.
function caseInSwitch(val) {
  let answer = "";
switch(val){
  case 1:
  return "alpha";
  break

  case 2:
  return "beta";
  break
  case 3:
  return "gamma";
  break
  case 4:
  return "delta";
  break
}

  return answer;
}

caseInSwitch(1);

// Adding a Default Option in Switch Statements
function switchOfStuff(val) {
  let answer = "";

  switch(val){
  case "a":
  return "apple"
  break
  case "b":
  return "bird"
  break
  case "c":
  return "cat"
  break

  default:
  return "stuff"
}


  return answer;
}

switchOfStuff(1);

// and

function sequentialSizes(val) {
  let answer = "";
 switch (val) {
    case 1:
    case 2:
    case 3:
      return "Low";
      break;
    case 4:
    case 5:
    case 6:
      return "Mid";
      break;
    case 7:
    case 8:
    case 9:
      return "High";
      break;
  }

  return answer;
}

sequentialSizes(1);

// or

function chainToSwitch(val) {
  let answer = "";
switch(val){
  case "bob":
    answer = "Marley";
    break;
  case 42:
    answer = "The Answer";
    break;
  case 1:
    answer = "There is no #1";
    break;
  case 99:
    answer = "Missed me by this much!";
    break;
  case 7:
    answer = "Ate Nine";
    break;
}
  return answer;
}

chainToSwitch(7);


// typeof tells you the type of Data

typeof 3 //is number
typeof '3' //is a string

let seven = 7;
let three = "3";

console.log(typeof seven)
console.log(typeof three)

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


//Queue is an abstract Data Structure where items are kept in order.
function nextInLine(arr, item) {

  arr.push(item);
  return arr.shift();
  
}

let testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


// JavaScript Objects

const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};

// Accessing Object Properties with Dot Notation

const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

const hatValue = testObj.hat;    
const shirtValue = testObj.shirt; 

// or with Bracket Notation

const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];

// Updating Object Properties
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog["name"] = "Happy Coder"
// or
myDog.name = "Happy Coder"

// Add New Properties to a JavaScript Object
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof"

// Delete Properties from a JavaScript Object
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};



delete myDog.tails

// Using Objects for Lookups

function phoneticLookup(val) {
  let result = "";

  const lookup = {

      "alpha": "Adams",
     "bravo": "Boston",
       "charlie": "Chicago",
     "delta": "Denver",
     "echo": "Easy",
     "foxtrot": "Frank"
   
  }
result = lookup[val]

  return result;
}

phoneticLookup("charlie");

// Accessing Nested Arrays
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];

// While Loops,  it runs while a specified condition is true and stops once that condition is no longer true.
var ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}

// or

const myArray = [];


let i = 0
while  (i < 6){
  myArray.unshift(i);
  i++;
}

// JavaScript For Loops it runs for a specific number of times.
const myArray = [];

for (let i = 1; i < 6; i++){
myArray.push(i);
}

// Iterate Through an Array with a For Loop
const myArr = [2, 3, 4, 5, 6];


var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

console.log(total); //result will be the sum = 20

// Nesting For Loops
function multiplyAll(arr) {
  let product = 1;
  
  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
      product *= arr[i][j]
    }
  }

  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]); // This fuctuion will put the numbers togheter and multply them

// Do...While Loops

do {
  myArray.push(i);
  i++;
} while (i <= 10);

// difference
while (i < 5) {
  myArray.push(i);
  i++;
}


// Generate Random Fractions with JavaScrip, JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and 1 (exclusive). Thus Math.random() can return a 0 but never return a 1.

function randomFraction() {


  return Math.random();

}

// Random Whole Numbers with JavaScript

function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

// Generate Random Whole Numbers within a Range
function randomNumber(min, max){
return Math.floor(Math.random() * (max - min + 1)) + min}

// parseInt Function, function parses a string and returns an integer.
function convertToInteger(str) {
  return parseInt(str)
  }
  
  convertToInteger("56");

  // Binary number

  function convertToInteger(str) {
    return parseInt(str, 2);
   }
   
   convertToInteger("10011");

  //  Conditional (Ternary) Operator

  function findGreater(a, b) {
    return a > b ? "a is greater" : "b is greater or equal";
  }

  // or
  function checkEqual(a, b) {
    return a == b ? "Equal" : "Not Equal";
    }
    
    checkEqual(1, 2);

    
  // Difference
  function findGreater(a, b) {
    if(a > b) {
      return "a is greater";
    }
    else {
      return "b is greater or equal";
    }
  }

  // or with else if and else
  function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" 
      : (a > b) ? "a is greater" 
      : "b is greater";
  }

  // without indentation 
  function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
  }


    // Difference
  function findGreaterOrEqual(a, b) {
    if (a === b) {
      return "a and b are equal";
    }
    else if (a > b) {
      return "a is greater";
    }
    else {
      return "b is greater";
    }
  }

  // Recursion to Create a Countdown

  // Using push method 
  function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(5));

  // Using unshift method 
  function countdown(n){
    if (n < 1) {
     return [];
   } else {
     const arr = countdown(n - 1);
     arr.unshift(n);
     return arr;
   }
 }

 console.log(countdown(10));

//  Recursion to Create a Range of Numbers

function rangeOfNumbers(startNum, endNum) {
  if (endNum<startNum){
  return [];
  }
  else{
    const arr = rangeOfNumbers(startNum, endNum -1)
    arr.push(endNum);
    return arr;
  }
};




// Using the Test Method
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr)

// or 

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);





// Match Literal Strings

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);




// Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let result = petRegex.test(petString);





// Ignore Case While Matching
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; 
let result = fccRegex.test(myString);







// Extract Matches More Than the First Match // Extract a pattern more than once, you can use the global search flag: g.

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; 
let result = twinkleStar.match(starRegex); 



// Match Characters that Occur One or More Time
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; 
let result = difficultSpelling.match(myRegex);


// or 


// Match Characters that Occur Zero or More Times
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);


// Match Anything with Wildcard Period


let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./g;
huRegex.test(humStr);
huRegex.test(hugStr);





// Match Single Character with Multiple Possibilities
//you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u.

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/ig;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);




// Match Letters of the Alphabet
// For example, to match lowercase letters a through e you would use [a-e].

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/ig;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);




// Match Numbers and Letters of the Alphabet
//Also, it is possible to combine a range of letters and numbers in a single character set.

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);








// Create a Basic JavaScript Object, Objects in JavaScript are used to model real-world objects;
let duck = {
  name: "Aflac",
  numLegs: 2
};





// Use Dot Notation to Access the Properties of an Object
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);





// Create a Method on an Object
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";} //adds the sayName method, which is a function that returns a sentence giving the name of the duck. Notice that the method accessed the name property in the return statement using duck.name.
};
duck.sayName();



// Make Code More Reusable with the this. Keyword; Its like self in python the difference is one is a method and another is not

let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};





// Define a Constructor Function

//Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}





// Use a Constructor to Create Objects
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}

let hound = new Dog()

  // Understand Where an Object’s Prototype Comes From
  Dog.prototype.isPrototypeOf(hound);






// Extend Constructors to Receive Arguments, What if you want birds with different values for name and color?

function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
  }

  let terrier = new Dog("name", "color")





  // Verify an Object's Constructor with instanceof, allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor.
  let Bird = function(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }
  
  let crow = new Bird("Alexis", "black");
  
  crow instanceof Bird; //returns true



  let canary = {
    name: "Mildred",
    color: "Yellow",
    numLegs: 2
  };
  
  canary instanceof Bird; //returns false








  // Use Prototype Properties to Reduce Duplicate Code, better way if you whis apply more prototypes on line 1122 on this page
  function Dog(name) {
    this.name = name;
  }
  
  
  let beagle = new Dog("Snoopy");
  
  
  Dog.prototype.numLegs = 2;

// explanation

  function Bird(name) {
    this.name = name;  //own property
  }
  
  Bird.prototype.numLegs = 2; // prototype property




  // Iterate Over All Properties
  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  
  for (let property in beagle) {
    if(beagle.hasOwnProperty(property)) {
      ownProps.push(property);
    } else {
      prototypeProps.push(property);
    }
  }
  
  console.log(ownProps);
  console.log(prototypeProps);







  // Change the Prototype to a New Object

  //Instead 
  Bird.prototype.eat = function() {
    console.log("nom nom nom");
  }
  
  Bird.prototype.describe = function() {
    console.log("My name is " + this.name);
  }


  //Better 
  Bird.prototype = {
    numLegs: 2, 
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };



  // Remember to Set the Constructor Property when Changing the Prototype
  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    constructor: Dog, //HERE
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };






//Use Inheritance So You Don't Repeat Yourself

//Before
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  eat: function() {
    console.log("nom nom nom");
  }
};


//After


  function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = {
    constructor: Cat,
  
  };
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear,
  
  };
  
  function Animal() { }
  
  Animal.prototype = { //  by creating a supertype (or parent) called Animal:Since Animal includes the describe method, you can remove it from Cat and Bear;
    constructor: Animal,
   eat: function() {
      console.log("nom nom nom");
    }
  };






  // Set the Child's Prototype to an Instance of the Parent
  function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }


Dog.prototype = Object.create(Animal.prototype); // this is like the "recipe" for creating an object. In a way, the recipe for Dog now includes all the key "ingredients" from Animal.
let beagle = new Dog();







// Reset an Inherited Constructor Property
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);


let duck = new Bird();
Bird.prototype.constructor = Bird;
duck.constructor
let beagle = new Dog();
Dog.prototype.constructor = Dog;
beagle.constructor





// Add Methods After Inheritance
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
  console.log("Woof!");
};



let beagle = new Dog();




// Override Inherited Methods
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

Penguin.prototype.fly = function() { return "Alas, this is a flightless bird."; };



let penguin = new Penguin();
console.log(penguin.fly());




// anonymous immediately invoked function expression (IIFE).

//Normal
function makeNest() {
  console.log("A cozy nest is ready");
}

//Anonymous
(function() {
  console.log("A cozy nest is ready");
})();






// Functional Programming. INPUT -> PROCESS -> OUTPUT

// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);
// Only change code above this line







// Now wants two types of tea: green tea and black tea. 

// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea,27);
const tea4BlackTeamFCC = getTea(prepareBlackTea,13);
// Only change code above this line