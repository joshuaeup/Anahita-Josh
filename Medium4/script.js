"use strict";

class Car {
    constructor(make, model, year, milage, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.milage = milage;
        this.color = color;
    }

    driveToWork() {
        console.log(
            `old mileage: ${this.milage} | new mileagea: ${this.milage + 33}`
        );
    }

    driveAroundTheWorld() {
        console.log(
            `old mileage: ${this.milage} | new mileagea: ${this.milage + 24000}`
        );
    }

    runErrands() {
        console.log(
            `old mileage: ${this.milage} | new mileagea: ${this.milage + 30}`
        );
    }
}

const myCar = new Car("Dodge", "Charger", 2006, 2000, "White");

myCar.driveToWork();
myCar.driveAroundTheWorld();
myCar.runErrands();
