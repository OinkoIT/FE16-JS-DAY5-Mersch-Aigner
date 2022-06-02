"use strict";
//Ex 1
const cars1 = {
  brand: "Tesla",
  model: "P",
  PS: 180,
  color: ["White", "Black", "Red"],
  techData: function () {
    return this.brand + " " + this.model;
  },
};
document.querySelector(".basic-ex1").innerHTML += cars1.techData() + "<br>";
const cars2 = {
  brand: "VW",
  model: "Golf",
  PS: 120,
  color: ["Yellow", "Black", "Red"],
  techData: function () {
    return this.brand + " " + this.model;
  },
};
document.querySelector(".basic-ex1").innerHTML += cars2.techData() + "<br>";

const cars3 = {
  brand: "Peugeot",
  model: "207",
  PS: 420,
  color: ["White", "Pink", "Red"],
  techData: function () {
    return this.brand + " " + this.model;
  },
};
document.querySelector(".basic-ex1").innerHTML += cars3.techData() + "<br>";

const animal1 = {
  type: "Cat",
  race: ["Maine Coon", "Prussian Blue", "Siamese"],
  character: ["fierce", "cuddly", "always hungry"],
  generalData: function () {
    return this.type + " " + this.race[0];
  },
};
document.querySelector(".basic-ex1").innerHTML +=
  animal1.generalData() + "<br>";

const animal2 = {
  type: "Dog",
  race: ["Golden Retriever", "Terrier", "Corgy"],
  character: ["stupid", "cuddly", "always hungry"],
  generalData: function () {
    return this.type + " " + this.race[0];
  },
};
document.querySelector(".basic-ex1").innerHTML +=
  animal2.generalData() + "<br>";

const animal3 = {
  type: "Rodent",
  race: ["Mouse", "Rat", "Hamster"],
  character: ["fierce", "fearful", "always hungry"],
  generalData: function () {
    return this.type + " " + this.race[0];
  },
};
document.querySelector(".basic-ex1").innerHTML +=
  animal3.generalData() + "<br>";

const person1 = {
  firstName: "John",
  lastName: "Wick",
  weight: 90,
  age: 54,
  profession: "Assassin",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
document.querySelector(".basic-ex1").innerHTML += person1.fullName() + "<br>";

const person2 = {
  firstName: "Jon",
  lastName: "Arbuckle",
  weight: 70,
  age: 71,
  profession: "Cartoonist",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
document.querySelector(".basic-ex1").innerHTML += person2.fullName() + "<br>";

const person3 = {
  firstName: "John",
  lastName: "Snow",
  weight: 60,
  age: 33,
  profession: "Iligetimate Son",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
document.querySelector(".basic-ex1").innerHTML += person3.fullName() + "<br>";

// Ex2
/*Based on the following two Objects definitions:

var sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
var fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;
print the following message within the browser: My favorite sandwich is a Hamburger which has approximately 260 calories, along with it I enjoy eating Large French Fries which have about 570 calories.*/

// var sandwiches = { sandwich: "hamburger", calories: 260 };
// var fries = { fries_size: "Large French Fries", calories: 570 };

var sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
var fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;

var sandwichObj = JSON.parse(sandwiches);
var friesObj = JSON.parse(fries);

console.log(sandwichObj);
console.log(friesObj);

document.querySelector(".basic-ex1").innerHTML += `My favorite sandwich is a ${sandwichObj.sandwich} which has approximately ${sandwichObj.calories} calories, along with it I enjoy eating ${friesObj.fries_size} which have about ${friesObj.calories} calories. <br>`;

