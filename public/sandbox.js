"use strict";
// let greet: Function;
//example
let greet; //void cuz NOT return anything
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
//example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
//example 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
