//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

let faveColors = ['red', 'green', 'black']
 faveColors = faveColors.slice();
 console.log(faveColors);
// i had the delete the const for the favecolors to get it right for some reason

//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

faveColors.push('blue')
console.log(faveColors);
//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

function middleNums (mid) {

  let number = []
  number.push(mid[1]);

  return number;
}
console.log(middleNums([1, 2, 3]));


//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

function bigOrSmallArray(arr) {
  const answers = [];
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] <= 100) {
      answers.push('small');
    } else {
      answers.push('big');
    }
  }
  return(answers);
}

console.log(bigOrSmallArray([0, 234, 9, 827, 1, 2918, 10]))