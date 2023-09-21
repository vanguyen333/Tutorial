//Write your pseduo code first!
// Celsius to F
// enter input,grab input(value), calculate input to F,
// Display result to screen

// from teacher psueduo code
// need the value that is in celsius
document.querySelector("#yell").addEventListener("click", convert);
function convert() {
  let temp = document.querySelector("#celsius").value;
  // convert from celsius to fahrenheit
  temp = (temp * 9) / 5 + 32;
  // show it
  document.querySelector("#placeToYell").innerText = temp;
}
