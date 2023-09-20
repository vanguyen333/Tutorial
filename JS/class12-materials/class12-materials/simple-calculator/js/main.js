let total = 0;
//https://www.youtube.com/watch?v=_A20kVsaqIk&list=PLBf-QcbaigsJysJ-KFZvLGJvvW-3sfk1S&index=989
// 2:00:04
document.querySelector("#pumpkin").addEventListener("click", makeZero);
document.querySelector("#dominosPizza").addEventListener("click", jumanji);
document.querySelector("#zebra").addEventListener("click", add9);
document.querySelector("#cantThinkOfAnything").addEventListener("click", sub2);

function makeZero() {
  total = 0;
  document.querySelector("#placeToPutResult").innerText = total;
}

function jumanji() {
  total = total + 3;
  document.querySelector("#placeToPutResult").innerText = total;
}

function add9() {
  total = total + 9;
  document.querySelector("#placeToPutResult").innerHTML = total;
}

function sub2() {
  total = total - 2;
  document.querySelector("#placeToPutResult").innerHTML = total;
}
