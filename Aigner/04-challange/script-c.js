"use strict";

const car = JSON.parse(cars);

console.log(car);

const baujahr = document.querySelectorAll(".baujahr");
const preis = document.querySelectorAll(".preis");
const pic = document.querySelectorAll(".pic");
const carName = document.querySelectorAll(".name");

const printCar = () => {
    car.forEach ((item, i) => {
        baujahr[i].innerHTML = `Baujahr: ${car[i].year}`;
        preis[i].innerHTML = `Preis: ${car[i].price} €`;
        carName[i].innerHTML = `${car[i].carName}`;
        pic[i].src = `${car[i].image}`;
    })
};

// const printCar = () => {
//     for (let i = 0; i < usersList.length; i++) {
//       baujahr[i].innerHTML = `Baujahr: ${car[i].year}`;
//       preis[i].innerHTML = `Preis: ${car[i].price}`;
//       carName[i].innerHTML = `${car[i].carName}`;
//       pic[i].src = `${car[i].image}`;
//     }
//   };

printCar();
