//Create a function that takes in an array of numbers.
//  Multiply each number together and alert the product.
function arrayCheck(arr) {
  let product = 1;
  //   for (let i = 1; i < arr.length; i++) {
  //     product *= arr[i];
  //    }
  //     console.log(product);
  arr.forEach((item, index) => {
    product *= item;
  });
  console.log(product);
}
arrayCheck([1, 2, 3]);
