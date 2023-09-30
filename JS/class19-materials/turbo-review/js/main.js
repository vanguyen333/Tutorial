// *Variables*
// Declare a variable and assign it to a sentance as a string.
//  Alert if the sentance is a question
let word = "Life is beautiful!";
// if (word.includes("?")) {
//   alert(`it's a question`);
// } else {
//   alert("a sentence");
// }
// alert(word.endsWith("?"));
//Declare a variable, assign it a string of multiple words,
//  replace every "jr. dev" with "software engineer", and print it to the console
let words = "I am happy with the jr. developer position";
words.replace("jr developer", "software engineer");
// *Functions*
// Create a function that returns rock,
// paper, or scissors as randomly as possible
function rockPaperScissors() {
  let random = Math.random();
  if (random < 0.33) {
    return "rock";
  } else if (random < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}
rockPaperScissors();

// *Conditionals*
//Create a function that takes in a choice
//  (rock, paper, or scissors) and determines if
//  they won a game of rock paper scissors against a bot using the above function

function checkWin(choice) {
  let botChoice = rockPaperScissors();
  if (
    (choice === "rock" && botChoice === "scissors") ||
    (choice === "paper" && botChoice === "rock") ||
    (choice === "scissors" && botChoice === "paper")
  ) {
    console.log("WINNA");
  } else if (choice === botChoice) {
    console.log("TIE");
  } else {
    console.log("LOSE");
  }
}
checkWin("rock");

//*Loops*
//Create a function that takes an array of choices.
//  Play the game x times where x is the number of choices in the array.
// Print the results of each game to the console.
