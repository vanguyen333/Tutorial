const thisinh = document.querySelectorAll(".contestant");

Array.from(thisinh).forEach((element) =>
  element.addEventListener("click", checkForRose)
);
function checkForRose(click) {
  if (click.target.classList.contains("rose")) {
    document.querySelector("#nikki").classList.toggle("hidden");
  } else {
    alert("wrong");
  }
}

// const contestants = document.querySelectorAll(".contestant");

// Array.from(contestants).forEach((element) =>
//   element.addEventListener("click", checkForRose)
// );

// function checkForRose(click) {
//   if (click.target.classList.contains("rose")) {
//     document.querySelector("#nikki").classList.toggle("hidden");
//   } else {
//     alert("Wrong!");
//   }
// }
