// *Variables*
// Declare a variable, assign it a value, and alert the value
const name = "van";
// alert(name);
//declare a var, assign a boolean, alert it
let naem = true;
// alert(naem);
// Create a variable, divide it by 10, and console log the value
const num = 20;
// console.log(num / 10);
// *Functions*
// Create a function that multiplys 3 numbers and alerts the product
function multiplys(num1, num2, num3) {
  alerts(num1 * num2 * num3);
}
// Create a function that takes in 4 numbers. Add the first two numbers and subtract the next two. Console log the result
function elephant(num1, num2, num3, num4) {
  console.log(num1 + num2 - num3 - num4);
}
// *Conditionals*
// Create a function that takes in 3 numbers. Starting with 100 add the first number,
//  subtract the second, and divide the third.
//  If the value is greater then 25,
// console log "WE HAVE A WINNNA"
function zebra(num1, num2, num3) {
  let result = (100 + num1 - num2) / num3;
  if (result > 25) {
    console.log("WE HAVE A WINNNA");
  }
}
// Create a function that takes in a day of the week.
// If it is a weekend alert, "weekend" and if not alert "week day".
//  Handle capitilization and if the user does
//  not enter a day of the week alert "Try again!"
function weekend(day) {
  if (day.toLowerCase() === "sunday" || day.toLowerCase() === "saturday") {
    alert("weekend");
  } else {
    alert("Try again");
  }
}
//*Loops*
//Create a function that takes in a number.
// Console log all values from 1 to that number or greater,
// but count by 3
function check(num) {
  for (let i = 1; i < 10; i += 3) {
    console.log(i);
  }
}

//create a function that takes in a number. consolelog all values
// from 1 to that number, but if the number is divisible by 3 log
// "fizz", if the number is divisible by 5 log "buzz" insted of
// the number, and if the number is divisible by 3 and 5 log
// 'fizzbuzz" in stead of that number

// function fizzBuzz(num) {
//   if (num % 3 === 0 && num % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (num % 3 === 0) {
//     console.log("fizz");
//   } else {
//     console.log("buzz");
//   }
// }
// fizzBuzz(15);

function fizzbuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
fizzbuzz(15);
