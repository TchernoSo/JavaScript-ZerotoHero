// an Array to Store a Collection of Data
// it contains booleans, strings, and numbers, among other valid JavaScript data types:

let simpleArray = ['one', 2, 'three', true, false, undefined, null];



// Access an Array's Contents Using Bracket Notation and Change it

let myArray = ["a", "b", "c", "d"];
myArray[1]="not b anymore"
console.log(myArray);


// Add Items to an Array with push() and unshift()
// push() method adds elements to the end of an array, and unshift() adds elements to the beginning.

function mixedNumbers(arr) {
    arr.unshift("I", 2, "three");
    arr.push(7, "VIII", 9);
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));


//   Remove Items from an Array with pop() and shift()
// pop() removes an element from the end of an array, while shift() removes an element from the beginning. 

function popShift(arr) {
    let popped = arr.pop() ; 
    let shifted = arr.shift(); 
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));


//   Remove Items Using splice()
//The splice() method is a built-in method for JavaScript Array objects. It lets you change the content of your array by removing or replacing existing elements with new ones.

//How to remove array elements with splice()
let months = ["January", "February", "Monday", "Tuesday"];
let days = months.splice(2); //will start removing elements from index 2.

console.log(days); // ["Monday", "Tuesday"]

//define how many elements you want to remove from the array by passing a second number argument known as removeCount
let months = ["January", "February", "Monday", "Tuesday"];
let days = months.splice(2, 1);

console.log(days); // ["Monday"]
console.log(months); // ["January", "February", "Tuesday"] Remove only one element from the array



//remove and add array elements with splice()
Array.splice(start, removeCount, newItem, newItem, newItem, ...)

let months = ["January", "February", "Monday", "Tuesday"];
let days = months.splice(2, 2, "March", "April");

console.log(days); // ["Monday", "Tuesday"]
console.log(months); // ["January", "February", "March", "April"]

//add new array elements without removing any elements,you can add new elements without removing any by passing the number 0 to the removeCount parameter. 
let months = ["January", "February", "Monday", "Tuesday"];
months.splice(2, 0, "March");

console.log(months); 
// ["January", "February", "March", "Monday", "Tuesday"]




// Copy Array Items Using slice()
//slice() takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index).

function forecast(arr) {
    // Only change code below this line
  
    return arr.slice(2,4);
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'])); //returns [ 'warm', 'sunny' ]
