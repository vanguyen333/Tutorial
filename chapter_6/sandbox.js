//DOCUMENT OBJECT MODEL
// const para = document.querySelector("h1");
// console.log(para);

// const paras = document.querySelectorAll("p");
// paras.forEach((para) => {
//   console.log(para);
// });
// const errors = document.querySelectorAll("p.error");
// console.log(errors);
// console.log(paras[0]);

// const title = document.getElementById("page-title");
// console.log(title);

const errors = document.getElementsByClassName("error");
// console.log(errors);
// errors.forEach((error) => {
//   console.log(error);
// });

//get elements by their tag name
// const para0 = document.getElementsByTagName("p");
// console.log(para0[1]);

// const para = document.querySelector("p");
// console.log(para.innerHTML);
// para.innerText += " ninjas are awesome";
// console.log(para.innerHTML);
const paras = document.querySelectorAll("p");
// paras.forEach((para) => {
//   console.log(para.innerText);
//   para.innerText += "new text";
// });

const content = document.querySelector(".content");
// console.log(content.innerText);
// console.log(content.innerHTML);
// content.innerHTML = "<h2>THIS IS A NEW H2</h2>";
// console.log(content);

const people = ["mario", "luigi", "yoshi"];
// people.forEach((person) => {
//   content.innerHTML += `<p>${person}</p>`;
// });

// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));
// link.setAttribute("href", "https://www.thenetninja.co.uk");
// link.innerText = "The Net Ninja website";

// const msg = document.querySelector("p");
// console.log(msg.getAttribute("class"));
// msg.setAttribute("class", "success");
// msg.setAttribute("style", "color:green");

const title = document.querySelector("h1");
// title.setAttribute("style", "margin: 50px");

console.log(title.style);
console.log(title.style.color);

title.style.margin = "50px";
title.style.color = "crimson";
title.style.fontSize = "60px";
title.style.margin = ""; //delete the previous margin of 50px
