"use strict";
{
    class Car {
        constructor(brand, model, year) {
            this.brand = brand;
            this.model = model;
            this.year = year;
        }
        displayInfo() {
            console.log(`Your car model is: ${this.year} ${this.model} ${this.brand}`);
        }
    }
    const car1 = new Car("Toyota", "Corolla", 2020);
    car1.displayInfo();
}
