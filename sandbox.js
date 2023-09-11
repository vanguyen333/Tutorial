//arrays
var names = ["luigi", "mario", "yoshi"];
// names = "van";//wont work
names.push("toad");
//names.push(3); //wont work
names[0] = "van";
var numbers = [10, 20, 30];
numbers.push(25);
// numbers.push("shaun");//wont work
numbers[1] = 3;
var mixed = ["ken", 4, "chun-li", 8, 9];
mixed.push("ryu");
mixed.push(10);
mixed[0] = 3;
//objects
var ninja = {
    name: "mario",
    belt: "belt",
    age: 30,
};
ninja.age = 40;
ninja.name = "ryu";
// ninja.age = "30";//wont work
// ninja.skills = ["fighting", "sneaking"]; //wont work
ninja = {
    name: "yoshi",
    belt: "orange",
    age: 40,
};
