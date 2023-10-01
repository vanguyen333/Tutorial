//Arrays

//Create and array of numbers.
// Sum all of the numbers. Alert the sum.
let nums = [1, 2, 3];
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}
console.log(sum);

//cach 2
let arr = [3, 4, 5, 2, 3];
// alert(arr.reduce((acc, c) => acc + c));

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every
//  original number squared

function numbers(num) {
  for (let i = 1; i <= num.length; i++) {
    console.log(i * i);
  }
}
numbers([1, 2, 3]);
// solution
let newArr = arr.map((num) => num ** 2);
console.log(newArr);
//Create a function that takes string
//Print the reverse of that string to the console
function reverse(str) {
  console.log(str.split("").reverse().join(""));
}
// reverse("hello world");
//Create a function that takes in a string
//Alert if the string is a palindrome(xuoi nguoc nhu nhau vd: leonnoel) or not
let palidromeCheck = (str) => str === str.split("").reverse().join("");
console.log(palidromeCheck("leonnoel")); //true
