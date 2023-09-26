//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ["tom&jerry", "peterpan", "hannah montana"];
// movies.forEach((x, i) => (document.querySelector("h2").innerText += x));
for (let i = 0; i < movies.length; i++) {
  document.querySelector("h2").innerText += movies[i];
}

//Create an array of numbers. Loop through the array and add three to each number and replace the old number.
let nums = [1, 2, 3];
nums.forEach((x, i) => console.log(x + 3));
// nums.forEach((item, i) => {
//   nums[i] = item + 3;
// });
for (let i = 0; i < nums.length; i++) {}
//Find the average of all the numbers from question three
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}
let average = sum / nums.length;
console.log(average);
