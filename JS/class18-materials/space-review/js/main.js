//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let arr = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }

// console.log(sum);
//another way
let sum = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum);
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function check(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] * arr[i]);
  }
}
check([1, 2, 3]);
//Create a function that takes string
//Print the reverse of that string to the console
function reverseWord(word) {
  let reversedword = word.reverse().join("");
  console.log(reversedword);
}
reverseWord("Hello");
//Create a function that takes in a string
//Alert if the string is a palindrome or not
function str(word) {
  alert;
}
