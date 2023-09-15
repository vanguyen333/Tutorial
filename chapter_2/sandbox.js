// let ninja = ["shaun", "ryu", "chun-li"];
// ninja[0] = "baby";
// // console.log(ninja[0]);

// let ages = [20, 25, 30, 35];
// // console.log(ages[2]);

// let random = ["shaun", "crystal", 30, 28];
// // console.log(random);

// // console.log(ninja.length); //3

// //array methods
// // let result = ninja.join(",");//baby,ryu,chun-li
// // let result = ninja.indexOf("chun-li");//2
// // let result = ninja.concat(["ken", "crystal"]); // ['baby', 'ryu', 'chun-li', 'ken', 'crystal']

// // let result = ninja.push("ken"); //4: return the new length of the array
// // let result = ninja.pop(); //will printout the last item from the array
// // console.log(result);

// let numb = null;
// console.log(numb, numb + 3, `the age is ${numb}`);
// let age; //undefined
// console.log(age, age + 3, `the age is ${age}`);

// //Booleans and comparisions
// let email = "abc@yahoo.com";
// let fruit = ["apple", "pear", "strawberry", "grapes"];
// // let result = email.includes("@"); //true
// let result = fruit.includes("mandarin"); //false
// console.log(result);

// //type conversion
// let score = "100";
// score = Number(score);
// console.log(score + 1); //101
// let index = Number("300");
// console.log(index + 3, typeof index); //303, number

////CONTROL FLOW
//for loop
// for (let i = 0; i < 5; i++) {
//   console.log("in loop:", i);
// }
// console.log("loop done");

// const names = ["shaun", "mario", "luigi"];
// for (let i = 0; i < names.length; i++) {
//   //   console.log(names[i]);
//   let html = `<div>${names[i]}</div>`;
//   console.log(html);
// }

//while loop
// const names = ["shaun", "mario", "luigi"];
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }
// let i = 0;
// while (i < names.length) {
//   console.log(names[i]);
//   i++;
// }

// let i = 5;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// CONDITIONAL STATEMENTS
// const age = 25;
// if (age > 20) {
//   console.log("you are over 20 years old");
// }
// const ninjas = ["shaun", "ryu", "chun-li", "yoshi"];
// if (ninjas.length > 4) {
//   console.log("that's a lot of ninjas");
// }

// const password = "passccdddkjgdkj1@";
// if (
//   password.length >= 12 ||
//   (password.includes(Number) && password.includes("@"))
// ) {
//   console.log("that password might be strong");
// } else if (password.length >= 8) {
//   console.log("that password is long enough");
// } else {
//   console.log("password is not long enough");
// }

// let user = false;
// if (!user) {
//   console.log("abc");
// }

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for (let i = 0; i < scores.length; i++) {
//   if (scores[i] === 0) {
//     continue;
//   }

//   console.log(scores[i]);
//   if (scores[i] === 100) {
//     console.log("congrats, u got the top score!");
//     break;
//   }
// }

//switch statement
// const grade = "D";
// switch (grade) {
//   case "A":
//     console.log("you got an A");
//     break;
//   case "B":
//     console.log("you got an B");
//     break;
//   case "C":
//     console.log("you got an C");
//     break;
//   case "D":
//     console.log("you got an D");
//     break;
//   case "E":
//     console.log("you got an E");
//     break;
//   default:
//     console.log("not valid grade");
// }

//variables and block scopes
let age = 30;
if (true) {
  let age = 20;
  age = 13;
  console.log("inside code block:", age);
  if (true) {
    let age = 50;
    console.log("inside second code block: ", age);
  }
}
console.log("outside code block", age);
