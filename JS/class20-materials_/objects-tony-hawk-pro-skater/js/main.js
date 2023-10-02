//Create a Tony Hawk Pro Skater constructor that makes
//  fighting game characters with 4 properties and 3 methods

function MakeCharacters(outfit, tool, color, strengths) {
  this.outfit = outfit;
  this.tool = tool;
  this.color = color;
  this.strengths = strengths;
  this.fight = function () {
    alert("beat on");
  };
  this.fly = function () {
    alert("Fly high");
  };
  this.defense = function () {
    alert("all-way defense");
  };
}
//solution
function TonyHawkProSkaterCharacter(chName, sponsor, speacialMove, stance) {
  this.characterName = chName;
  this.sponsor = sponsor;
  this.speacialMove = speacialMove;
  this.stance = stance;
  this.grind = function () {
    alert("5050");
  };
  this.flip = function () {
    alert("Kickflip Underflip");
  };
  this.taunt = function () {
    alert("First Try");
  };
}

let KareemCampbell = new TonyHawkProSkaterCharacter(
  "Kareem",
  "Element",
  "Laserflip",
  "Goofy"
);

//Classes are like tempaltes for Objects

class MakeCar {
  constructor(carMake, carModel, carColor, numOfDoors) {
    this.make = carMake;
    this.model = carModel;
    this.color = carColor;
    this.doors = numOfDoors;
  }
  honk() {
    alert("Beep Beep Beep");
  }
  lock() {
    alert(`Locked ${this.doors} doors!`);
  }
}
