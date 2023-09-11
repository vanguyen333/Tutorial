import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplates.js";
import { Payment } from "./classes/Payment.js";
let docOne;
let docTwo;
docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Payment("mario", "plumbing work0", 200);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const form = document.querySelector(".new-item-form");
//inputs
const type = document.querySelector("#type");
const toform = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//list template instace
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toform.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toform.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
//Generics
// const addUID = <T extends { name: string }>(obj: T) => {
//   let uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };
// let doc1 = addUID({ name: "yoshi", age: 40 });
// // let doc2 = addUID("hello");
// console.log(doc1.name); //because of the <T>, doc1.name Wont have error
//Enums: store a set of constants, keywords & associate 'em with numeric value
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docone = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: "name of the wind" },
};
const doctwo = {
    uid: 10,
    resourceType: ResourceType.PERSON,
    data: { name: "yoshi" },
};
console.log(docone, doctwo);
