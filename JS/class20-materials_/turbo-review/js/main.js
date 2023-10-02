// *Variables*
// Declare a variable and assign it to a sentance
//  that is a positive affirmation.
//  Print the affirmation to the console
// multiple times using a method
let sentence = "I am thankful for the developer job";
function repeatedSentence() {
  let sentences = sentence.repeat(3);
  console.log(sentences);
}
repeatedSentence();
//Declare a variable, assign it an array of letters,
// combine the letters into one word, and alert it
let arr = ["I", "l", "o", "v", "e", "y", "o", "u"];
console.log(arr.join(""));
// *Functions*
// Create a function that returns rock, paper,
// lizard, spock or scissors as randomly as possible
function random() {
  let rand = Math.random();
  if (rand < 0.22) {
    return "rock";
  } else if (rand < 0.44) {
    return "paper";
  } else if (rand < 0.66) {
    return "lizard";
  } else if (rand < 0.88) {
    return "spock";
  } else {
    return "scissors";
  }
}
random();
// *Conditionals*
//Create a function that takes in a choice
//  (rock, paper, scissors, lizard, or spock)
//  and determines if they won a game of rock paper
//  scissors against a bot using the above function
function checkWin(choice) {
  let botChoice = random();
  if (
    (choice === "rock" && botChoice === "scissors") ||
    (choice === "paper" && botChoice === "rock") ||
    (choice === "scissors" && botChoice === "paper") ||
    (choice === "spock" && botChoice === "rock") ||
    (choice === "spock" && botChoice === "scissors") ||
    (choice === "lizard" && botChoice === "paper") ||
    (choice === "lizard" && botChoice === "spock") ||
    (choice === "scissors" && botChoice === "lizard") ||
    (choice === "paper" && botChoice === "spock")
  ) {
    console.log("won");
  } else if (choice === botChoice) {
    console.log("tie");
  } else {
    console.log("lose");
  }
}
checkWin("rock");
