"use strict";

// Class declaration
class Car {
    constructor(make, model, year, mileage, color) {
        // Class Constructor
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
        this.color = color;
    }

    // METHODS

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
        console.log(`old mileage: ${this.mileage}`);
        this.mileage += 30;
        console.log(`new mileagea: ${this.mileage}`);
    }
}

// Assign new Car to myCar variable and pass values for constructor
const myCar = new Car("Dodge", "Charger", 2006, 2000, "White");

// Call the methods
myCar.driveToWork();
console.log(" "); // Space
myCar.driveAroundTheWorld();
console.log(" "); // Space
myCar.runErrands();
console.log(" "); // Space
