// *Variables*
// Declare a variable and assign it to your fav drink as a string.
//  Make sure there is no whitespace on either side of the string,
// and print the value to the console

const favDrink = "water    ";
console.log(favDrink.trim());
//Declare a variable, assign it a string of multiple words,
//  and check to see if one of the words is "apple".
const words = "Hello a wonderful day apple";
let appleCheck = words.includes("apple");
// =-1 means apple is not there, != -1 means it's there
if (console.log(words.search("apple")) !== -1) {
  console.log("yes");
} else {
  console.log("no");
} //index 22nd
console.log(appleCheck);
// *Functions*
// Create a function that returns rock, paper,
//  or scissors as randomly as possible
function abc() {
  let rockPaperScissors = ["rock", "paper", "scissors"];
  let randNum = Math.floor(Math.random() * rockPaperScissors.length);
  if (randNum === 0) {
    console.log("rock");
  } else if (randNum === 1) {
    console.log("paper");
  } else {
    console.log("scissors");
  }
}
// abc();
//solution
function rps() {
  let random = Math.random();
  if (random < 0.33) {
    return "rock";
  } else if (random < 0.66) {
    return "paper";
  } else {
    return "scissor";
  }
}
console.log(rps());
// *Conditionals*
//Create a function that takes in a choice
//  (rock, paper, or scissors) and determines
// if they won a game of rock paper scissors against
//  a bot using the above function
function checkWin(choice) {
  let botChoice = rps();
  if (
    (choice === "rock" && botChoice === "scissors") ||
    (choice === "paper" && botChoice === "rock") ||
    (choice === "scissors" && botChoice === "paper")
  ) {
    console.log("you won");
  } else if (choice === botChoice) {
    console.log("you tied");
  } else {
    console.log("you lost");
  }
}
// checkWin("paper");
//*Loops*
//Create a function that takes an array of choices.
//  Play the game x times where x is the number of choices in the array.
//  Print the results of each game to the console.
function playGame(arr) {
  arr.forEach((choice) => {
    checkWin(choice);
  });
}
playGame(["rock", "paper", "paper"]);
