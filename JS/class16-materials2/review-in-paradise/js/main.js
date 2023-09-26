// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let faveFood = "pho";
faveFood = "KFC";
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let str = "Hello, world!";
// alert(str.charAt(1));
// *Functions*
// Create a function that takes in 3 numbers.
//  Divide the first two numbers and multiply the last.
// Alert the product. Call the function.
function divideMul(num1, num2, num3) {
  alert(((num1 / num2) * num3).toFixed(2));
}
// divideMul(1, 2, 3);

// Create a function that takes in 1 number.
//  Console log the cube root of the number. Call the function.
function cube(num) {
  console.log(Math.cbrt(num)); //can bac 3
}
// cube(27);
// *Conditionals*
//Create a function that takes in a month.
//  If it is a summer month alert "YAY".
//  If another other month, alert "Booo"
function summerMonthCheck(month) {
  let lowerCaseMonth = month.toLowerCase();
  if (
    lowerCaseMonth === "may" ||
    lowerCaseMonth === "june" ||
    lowerCaseMonth === "july"
  ) {
    alert("YAY");
  } else {
    alert("BOO");
  }
}
// summerMonthCheck("may");

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
//*Loops*
//Create a function that takes in a number.
// Console log every number from 1 to that number
// while skipping multiples of 5.//multiples of 5 are 5,10,15,20,25,30...
function skip5(num) {
  for (let i = 0; i <= num; i++) {
    if (i % 5 !== 0) {
      console.log(i);
    }
  }
}
skip5(10);
