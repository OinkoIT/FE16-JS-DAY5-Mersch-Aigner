"use strict";

const car = JSON.parse(cars);

console.log(car);

const baujahr = document.querySelectorAll(".baujahr");
const preis = document.querySelectorAll(".preis");
const pic = document.querySelectorAll(".pic");
const carName = document.querySelectorAll(".car");

const printCar = () => {
    car.forEach ((item, i) => {
        baujahr.innerHTML = `Baujahr: ${car[i].year}`;
        preis.innerHTML = `Preis: ${car[i].price}`;
        carName.innerHTML = `${car[i].carName}`;
        pic.src = `${car[i].image}`;

    })
};

printCar();
