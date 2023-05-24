/*
To iterate through the reals each step much equally traverse:
   1. The natural numbers
   2. Fractions approaching 0
   3. Fractions approaching 999...
   4. Negative numbers
Such that every combination of these dimensions is visited.

To do this we'll break the problem down into smaller ones, traversing numbers within a specified number of digits.

    1. numberArray produces the natural numbers of digit length
    2. reverseString handles fractions approaching 0
    3. decimalArray handles decimals approaching 999...
    4. we'll produce positive and negative numbers at once
*/

// Be careful adjusting these values, it can lead to very high processing time
var wDigits = 1 // digits left of the decimal (whole values)
var fDigits = 1 // digits right of the decimal (fractional values)

var wArray = numberArray(wDigits), fArray = numberArray(fDigits)
var numArray = wArray, decArray = decimalArray(fArray)

for (let i=0; i<numArray.length; i++) {
  for (let j=0; j<decArray.length; j++) {
     console.log(Number(numArray[i]+"."+decArray[j]))
     console.log(Number(-numArray[i]+"."+decArray[j]))
  }
}

// Produce whole numbers of a given digit length
function numberArray(digitCount) {
  let dCount = 1;
	const numberArray = [];
  
  while (dCount <= digitCount) {
    // Calculate the starting number
    const start = Math.pow(10, dCount - 1);
    // Calculate the ending number
    const end = Math.pow(10, dCount) - 1;
    for (let i = start; i <= end; i++) {
      numberArray.push(i);
    }
    dCount++;
	}
  return numberArray;
}

// Produce decimal values by modifying corresponding whole values
function decimalArray(numberArray) {
  const decimalArray = []
  for (let i=0; i<numberArray.length; i++) {
    decimalArray.push(reverseString(numberArray[i]));
  }
  return decimalArray;
}

// A helper runction to convert possible whole values to possible fractional values
function reverseString(str) {
    return String(str).split("").reverse().join("");
}
