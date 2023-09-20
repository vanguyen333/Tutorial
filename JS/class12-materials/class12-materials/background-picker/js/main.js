document.querySelector("#purple").onclick = colorPurple;
document.querySelector("#green").onclick = colorGreen;
document.getElementById("#blue").onclick = colorBlue;

function colorPurple() {
  document.querySelector("body").style.backgroundColor =
    "rgba(241, 63, 247, 1)";
  document.querySelector("body").style.color = "white";
}
function colorGreen() {
  document.querySelector("body").style.backgroundColor = "green";
  document.querySelector("body").style.color = "white";
}
function colorBlue() {
  document.querySelector("body").style.backgroundColor = "green";
  document.querySelector("body").style.color = "white";
  // document.querySelector("body").style.backgroundColor = "blue";
  // document.querySelector("body").style.color = "white";
}

// document.getElementById('purple').onclick = partyPurple
// document.getElementById('green').onclick = partyGreen
// document.getElementById('blue').onclick = partyBlue

// function partyPurple() {
//   document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
//   document.querySelector('body').style.color = 'white'
// }

// function partyGreen() {
//   document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
//   document.querySelector('body').style.color = 'white'
// }

// function partyBlue() {
//   document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
//   document.querySelector('body').style.color = 'white'
// }
