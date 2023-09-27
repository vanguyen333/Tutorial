//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ["master chef", "the voice", "disney"];
for (let i = 0; i < tvShows.length; i++) {
  console.log(tvShows[i]);
}
tvShows.forEach((item, index) => console.log(item, index));
tvShows.forEach((show) => console.log(show));
//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNumbers = numbers.filter((a) => a % 2 === 0);
console.log(evenNumbers);
//solution
let nums = [2, 7, 118, 18, 9];
// function onlyEvens(arr) {
//   return arr.filter((num) =>
//     num % 2 === 0 ? console.log(num) : console.log("odd")
//   );
// }
// onlyEvens(nums);
function onlyEvens(arr) {
  return arr.filter((num) => num % 2 === 0);
}
console.log(onlyEvens(nums));

let evens = (arr) => arr.filter((num) => num % 2 === 0);
console.log(evens(nums));
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function secondLowAndHigh(arr) {
  let sorted = arr.sort((a, b) => a - b); //sorted lowest to greatest
  alert(sorted[1] + sorted[sorted.length - 2]); //[1,2,3,4,5,7]
}
secondLowAndHigh([2, 3, 7, 4, 5, 1]);
