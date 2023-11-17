// ES6, released in 2015, added many powerful new features to the language “Modern JavaScript”

// Mutate an Array Declared with const

const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);  //by the index you can reassigned the variable const






// Prevent Object Mutation, JavaScript provides a function Object.freeze to prevent data mutation.
function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
  Object.freeze(MATH_CONSTANTS) /////
  
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();






  //   Arrow Functions to Write Concise Anonymous Functions

const myFunc = function() {
    const myVar = "value";
    return myVar;
  }

// with Arrow
const myFunc = () => {
    const myVar = "value";
    return myVar;
  }

// Without indentation
const myFunc = () => "value";





// Arrow Functions with Parameters
const doubler = (item) => item * 2;
doubler(4);

//Is the same as:
const double2 = function Double(item){
    return item * 2
  }
  
  double2(4)

  


//Default Parameters for Your Functions
const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting("John"));
      console.log(greeting());  
      
// or 

const increment = (number, value = 1) => number + value; //where value start as 1




// Rest Parameter with Function Parameters, with ..."args"
const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  }
  
  sum(0, 1, 2,3,4)

//   or 

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);




// Destructuring Assignment to Extract Values from Objects
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;

// to ES6
const { name, age } = user;


// Destructuring Assignment to Assign Variables from Objects
const user = { name: 'John Doe', age: 34} 

// to ES6

const { name: userName, age: userAge } = user;




// Destructuring Assignment to Assign Variables from Nested Objects
const user = {
    johnDoe: { 
      age: 34,
      email: 'johnDoe@freeCodeCamp.com'
    }
  };


// with ES6

const { johnDoe: { age, email }} = user; // extract the values of object properties and assign them to variables with the same name

// or 

const { johnDoe: { age: userAge, email: userEmail }} = user; // assign an object properties' values to variables with different names





// Destructuring Assignment to Assign Variables from Arrays
let a = 8, b = 6;
// Only change code below this line

[a, b] = [b, a];

console.log(a, b) // b will be 8 and a will be 6






// Destructuring via rest elements
function removeFirstTwo(list) {
    const [, , ...shorterList] = list; // the "..."
    return shorterList;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);
  console.log(source)





//   Destructuring Assignment to Pass an Object as a Function's Parameters

const profileUpdate = (profileData) => {
    const { name, age, nationality, location } = profileData;
  
  }

//   With ES6
const profileUpdate = ({ name, age, nationality, location }) => {

}