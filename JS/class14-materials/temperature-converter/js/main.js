//Write your pseduo code first!
//only onClick
document.querySelector("#yell").addEventListener("click", convert);

function convert() {
  //   console.log("hello");//just to check if the function works
  //grab value of input
  let tempt = document.querySelector("#temp").value;
  //convert C to F
  tempt = (tempt * 9) / 5 + 32;
  //show result
  document.querySelector("#placeToYell").innerText = tempt;
}
