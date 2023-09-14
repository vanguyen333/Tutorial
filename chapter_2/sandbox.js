let ninja = ["shaun", "ryu", "chun-li"];
ninja[0] = "baby";
// console.log(ninja[0]);

let ages = [20, 25, 30, 35];
// console.log(ages[2]);

let random = ["shaun", "crystal", 30, 28];
// console.log(random);

// console.log(ninja.length); //3

//array methods
// let result = ninja.join(",");//baby,ryu,chun-li
// let result = ninja.indexOf("chun-li");//2
// let result = ninja.concat(["ken", "crystal"]); // ['baby', 'ryu', 'chun-li', 'ken', 'crystal']

// let result = ninja.push("ken"); //4: return the new length of the array
// let result = ninja.pop(); //will printout the last item from the array
// console.log(result);

let numb = null;
console.log(numb, numb + 3, `the age is ${numb}`);
let age; //undefined
console.log(age, age + 3, `the age is ${age}`);

//Booleans and comparisions
let email = "abc@yahoo.com";
let fruit = ["apple", "pear", "strawberry", "grapes"];
// let result = email.includes("@"); //true
let result = fruit.includes("mandarin"); //false
console.log(result);

//type conversion
let score = "100";
score = Number(score);
console.log(score + 1); //101
let index = Number("300");
console.log(index + 3, typeof index); //303, number
