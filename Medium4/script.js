"use strict";

class Car {
    constructor(make, model, year, mileage, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
        this.color = color;
    }

    driveToWork() {
        console.log(`old mileage: ${this.mileage}`);
        this.mileage += 33;
        console.log(`new mileagea: ${this.mileage}`);
    }

    driveAroundTheWorld() {
        console.log(`old mileage: ${this.mileage}`);
        this.mileage += 24000;
        console.log(`new mileagea: ${this.mileage}`);
    }

    runErrands() {
        console.log(`old mileage: ${this.mileage} |`);
        this.mileage += 30;
        console.log(`new mileagea: ${this.mileage}`);
    }
}

const myCar = new Car("Dodge", "Charger", 2006, 2000, "White");

myCar.driveToWork();
console.log(" "); // Space
myCar.driveAroundTheWorld();
console.log(" "); // Space
myCar.runErrands();
console.log(" "); // Space
