// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = "Christmas";
console.log(favHoliday.toLocaleUpperCase());

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let str = "holidays";
console.log(str.slice(5, 8));
console.log(str.slice(-3));
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function calc(num1, num2, num3, num4, num5) {
  let difference = 100 - num1 - num2 - num3 - num4 - num5;

  console.log(Math.abs(difference));
}
calc(1, 2, 3, 4, 5);
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.

function lowestAndHighestNum(n1, n2, n3) {
  console.log(
    `The lowest is:${Math.min(n1, n2, n3)} and the highest is ${Math.max(
      n1,
      n2,
      n3
    )} `
  );
}
lowestAndHighestNum(4, 9, 2);
// *Conditionals*
//Create a function that returns heads or tails
// randomly and as fairly as possible. Call the function.
function headTail() {
  let random = Math.random();
  if (random < 0.5) {
    return "heads";
  } else {
    return "tails";
  }
}
// console.log(headTail());
//shorter way
function headTail() {
  return Math.random() < 0.5 ? "head" : "tail";
}
// console.log(headTail());
//*Loops*
//Create a function that takes in a number. Console log the result
//  of heads or tails using the previous function x times
//  where x is the number passed into the function. Call the function.
function number(num) {
  for (let i = 1; i <= num; i++) {
    let result = headTail();
    console.log(result);
  }
}
number(5);
