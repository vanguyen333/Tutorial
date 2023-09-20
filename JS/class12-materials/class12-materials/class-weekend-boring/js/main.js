document.querySelector("#check").addEventListener("click", check);

function check() {
  const day = document.querySelector("#day").value.toLowerCase();

  //Conditionals go here
  if (day === "monday") {
    document.querySelector("#placeToSee").innerText = "energetic";
  } else if (day === "tuesday" || day === "wednesday") {
    document.getElementById("placeToSee").innerText = "magical";
  } else if (day === "thursday" || day === "friday") {
    document.getElementById("placeToSee").innerText = "Woo Hoo";
  } else {
    document.getElementById("placeToSee").innerText = "enjoy!";
  }
}
