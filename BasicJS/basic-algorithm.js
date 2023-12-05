// Convert Celsius to Fahrenheit 

function convertCtoF(celsius) {
    let fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
  }
  
  convertCtoF(30);






 //Reverse a String
  function reverseString(str) {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

reverseString("hello");

// or

function reverseString(str) {
    return str
      .split("")
      .reverse()
      .join("");
  }










  //Factorialize a Number
 
 
 
 // Looping solution

  function factorialize(num) {
    let product = 1;
    for (let i = 2; i <= num; i++) {
      product *= i;
    }
    return product;
  }
  
  factorialize(5);



//   or 



// Recursive solution

function factorialize(num) {
  if (num <= 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

factorialize(5);




// Find the Longest Word in a String
function findLongestWordLength(str) {
    let longestLength = 0;
    let currentLength = 0;
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        if (currentLength > longestLength) {
          longestLength = currentLength;
        }
        currentLength = 0;
      } else {
        currentLength++;
      }
    }
    if (currentLength > longestLength) {
      longestLength = currentLength;
    }
    
    return longestLength;
    }

    findLongestWordLength("The quick brown fox jumped over the lazy dog");



    // Return Largest Numbers in Arrays, Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
    function largestOfFour(arr) {
        const results = [];
        for (let i = 0; i < arr.length; i++) {
          let largestNumber = arr[i][0];
          for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > largestNumber) {
              largestNumber = arr[i][j];
            }
          }
          results[i] = largestNumber;
        }
      
        return results;
      }

      largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);





 //   Confirm the Ending
 function confirmEnding(str, target) {
     return str.slice(str.length - target.length) === target;
 }

confirmEnding("Bastian", "n");


      
      
//   Repeat a String Repeat a String 

function repeatStringNumTimes(str, num) {
    let accumulatedStr = "";
  
    for (let i = 0; i < num; i++) {
      accumulatedStr += str;
    }
  
    return accumulatedStr;
  }
  
  repeatStringNumTimes("abc", 3); //returns 'abcabcabc'





//   Check if a value is classified as a boolean primitive. Return true or false.
function booWho(bool) {
    return typeof bool === "boolean";
 }
 
 booWho(null);





//  Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle) {
      updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
  }
  
  titleCase("I'm a little tea pot");





//   Slice and Splice, Copy each element of the first array into the second array, in order.

function frankenSplice(arr1, arr2, n) {
    let localArray = arr2.slice();
  for (let i = 0; i < arr1.length; i++) {
    localArray.splice(n, 0, arr1[i]);
    n++;
  }
  return localArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);



// Compare strings

function mutation(arr) {
    const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

mutation(["hello", "hey"]);







// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


function chunkArrayInGroups(arr, size) {
    let temp = [];
    const result = [];
  
    for (let a = 0; a < arr.length; a++) {
      if (a % size !== size - 1) temp.push(arr[a]);
      else {
        temp.push(arr[a]);
        result.push(temp);
        temp = [];
      }
    }
  
    if (temp.length !== 0) result.push(temp);
    return result;
  }

  chunkArrayInGroups(["a", "b", "c", "d"], 2);