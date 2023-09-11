import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplates.js";

import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Payment("mario", "plumbing work0", 200);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);

const form = document.querySelector(".new-item-form") as HTMLFormElement;

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toform = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

//list template instace
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(toform.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(toform.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, "end");
});

//Generics
const addUID = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let doc1 = addUID({ name: "yoshi", age: 40 });
// let doc2 = addUID("hello");
console.log(doc1.name); //because of the <T>, doc1.name Wont have error

//with interfaces
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T; //T is any type of value
}
const doc3: Resource<object> = {
  uid: 1,
  resourceName: "person",
  data: { name: "shaun" },
};
const doc4: Resource<string[]> = {
  uid: 2,
  resourceName: "shoppingList",
  data: ["break", "milk"],
};
console.log(doc4, doc3);
