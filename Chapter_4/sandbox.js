//CHAPTER 4
//function declaration
// function greetig() {
//   console.log("hi there");
// }

//function expression

// const speak = function () {
//   console.log("speak");
// };
// speak();

//arrow func
// const greet = () => {
//   console.log("hello there");
// };
// greet();

//arguments and parameters
// const speak = function (name = "Vanni", time = "night") {
//   console.log(`good ${time} ${name}`);
// };

// speak();

//Returning values
// const calcArea = function (radius) {
//   return 3.14 * radius ** 2;
// };
// const area = calcArea(5);
// console.log(area);

//arrow function
// const calcArea = (radius) => {
//   return 3.14 * radius ** 2;
// };
// console.log(calcArea(5));

// const bill = (products, tax) => {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };
// console.log(bill([10, 15, 30], 0.2));

//functions and methods
// const greet = () => {
//   return "hi there";
// };
// console.log(greet().toUpperCase());

//callbacks & foreach
// const myFunc = (callbackFunc) => {
//   let value = 50;
//   callbackFunc(value);
// };
// myFunc((value) => {
//   console.log(value);
// });

// let people = ["mario", "luigi", , "ryu", "shaun", "chun-li"];
// const logPerson = (person, index) => {
//   console.log(`${index} - hello ${person}`);
// };

// people.forEach(logPerson);

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
// }

//get a reference to the 'ul'
const ul = document.querySelector(".people");

const people = ["mario", "luigi", "ryu", "shaun", "chun-li"];

let html = ``;
people.forEach((person) => {
  html += `<li style="color:purple">${person}</li>`;
});
console.log(html);
ul.innerHTML = html;
