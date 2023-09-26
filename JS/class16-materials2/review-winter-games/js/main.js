//Create a function that takes in an array of numbers.
// Return a new array containing every even number
// from the original array (do not use map or filter)
function evenNumCheck(num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      console.log(num[i]);
    }
  }
}
evenNumCheck([1, 2, 3, 4, 5]);
//solution from teacher
function newArrEven(arr) {
  let newArr = [];
  arr.forEach((item, index) => {
    if (item % 2 === 0) {
      newArr.push(item);
    }
  });
  return newArr;
}
console.log(newArrEven([4, 5, 6, 7, 8, 9]));
