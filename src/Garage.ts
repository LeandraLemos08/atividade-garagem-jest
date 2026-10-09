import { Car } from "./Car";

export class Garage {
    private cars: Car[];

    constructor() {
        this.cars = [];
    }

    public addCar(car: Car) {
        const duplicateCar = this.cars.find(c => c.getBrand() === car.getBrand() && c.getModel() === car.getModel() && c.getYear() === car.getYear());
        if (duplicateCar) {
            throw new Error("Car already exists in the garage.");
        }
        this.cars.push(car);
        car.setStored(true);
    }

    public removeCar(car: Car) {
        this.cars = this.cars.filter((c) => c !== car);
        car.setStored(false);
    }

    public getCarCount(): number {
        return this.cars.length;
    }

    public findCarByBrand(brand: string): Car | undefined {
        return this.cars.find(car => car.getBrand() === brand);
    }

    public findCarByModel(model: string): Car | undefined {
        return this.cars.find((c) => c.getModel() === model);
    }
}





