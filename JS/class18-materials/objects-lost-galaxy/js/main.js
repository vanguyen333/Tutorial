//Create a mouse object that has four properties and three methods
let mouse = {
  color: "white",
  size: "small",
  breed: "lab",
  tail: "none",
  eat: function (food) {
    return food;
  },
  drink: function (type) {
    return type;
  },
  run: function () {
    return "run very fast";
  },
};

let chuot = {};
chuot.brand = "logitech";
chuot.ergo = true;
chuot.model = "mx ergo";
chuot.trackBall = true;
chuot.leftClick = function () {
  console.log("Click left");
};
chuot.rightClick = function () {
  console.log("Click right");
};
chuot.scrollWheel = function () {
  console.log("Jump");
};
