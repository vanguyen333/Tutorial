// *Variables*
// Create a variable and console log the value
const name = "me";
console.log(name);
// Create a variable, add 10 to it, and alert the value
let num = 1;
num += 10;
// alert(num);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub(num1, num2, num3, num4) {
  alert(num1 - num2 - num3 - num4);
}
// sub(9, 2, 1, 3);
// Create a function that divides one number by another and returns the remainder
function divide(num1, num2) {
  return num1 % num2;
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function sum(num1, num2) {
  if (num1 + num2 > 50) {
    alert("Jumanji");
  }
}
// sum(30, 30);
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplys3Nums(num1, num2, num3) {
  if ((num1 * num2 * num3) % 3 === 0) {
    alert("ZEBRA");
  }
}
multiplys3Nums(3, 3, 3);
