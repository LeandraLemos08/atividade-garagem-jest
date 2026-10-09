import { Car } from '../src/Car';
import { Garage } from '../src/Garage';

describe('Garage', () => {
    test('should add a car to the garage', () => {
        const garage = new Garage();
        const car = new Car('Toyota', 'Corolla', 2020);
        garage.addCar(car);
        expect(garage.getCarCount()).toBe(1);
    });
    test('should remove a car from the garage', () => {
        const garage = new Garage();
        const car = new Car('Honda', 'Civic', 2021);
        garage.addCar(car);
        garage.removeCar(car);
        expect(garage.getCarCount()).toBe(0);
    });
    test('Stored property should be true when a car is added to the garage', () => {
        const garage = new Garage();
        const car = new Car('Ford', 'Mustang', 2022);
        garage.addCar(car);
        expect(car.getStored()).toBe(true);
    });
    test('Stored property should be false when a car is removed from the garage', () => {
        const garage = new Garage();
        const car = new Car('Chevrolet', 'Camaro', 2023);
        garage.addCar(car);
        garage.removeCar(car);
        expect(car.getStored()).toBe(false);
    });
    test('should add several cars to the garage and get the correct count', () => {
        const garage = new Garage();
        const car1 = new Car('Toyota', 'Corolla', 2020);
        const car2 = new Car('Honda', 'Civic', 2021);
        const car3 = new Car('Ford', 'Mustang', 2022);
        garage.addCar(car1);
        garage.addCar(car2);
        garage.addCar(car3);
        expect(garage.getCarCount()).toBe(3);
    });
    test('Stored property should be true for all cars when they are added to the garage', () => {
        const garage = new Garage();
        const car1 = new Car('Toyota', 'Corolla', 2020);
        const car2 = new Car('Honda', 'Civic', 2021);
        const car3 = new Car('Ford', 'Mustang', 2022);
        garage.addCar(car1);
        garage.addCar(car2);
        garage.addCar(car3);
        expect(car1.getStored()).toBe(true);
        expect(car2.getStored()).toBe(true);
        expect(car3.getStored()).toBe(true);
    });
    test('Stored property should be false for all cars when they are removed from the garage', () => {
        const garage = new Garage();
        const car1 = new Car('Toyota', 'Corolla', 2020);
        const car2 = new Car('Honda', 'Civic', 2021);
        const car3 = new Car('Ford', 'Mustang', 2022);
        garage.addCar(car1);
        garage.addCar(car2);
        garage.addCar(car3);
        garage.removeCar(car1);
        garage.removeCar(car2);
        garage.removeCar(car3);
        expect(car1.getStored()).toBe(false);
        expect(car2.getStored()).toBe(false);
        expect(car3.getStored()).toBe(false);
    });
    test('Should find a car existing in the garage', () => {
        const garage = new Garage();
        const car1 = new Car('Toyota', 'Corolla', 2020);
        const car2 = new Car('Honda', 'Civic', 2021);
        garage.addCar(car1);
        garage.addCar(car2);
        const foundCar = garage.findCarByBrand('Toyota');
        expect(foundCar).toBe(car1);
        const foundCar2 = garage.findCarByModel('Civic');
        expect(foundCar2).toBe(car2);
    });
    test('Should return undefined when searching for a car that does not exist in the garage', () => {
        const garage = new Garage();
        const car1 = new Car('Toyota', 'Corolla', 2020);
        const car2 = new Car('Honda', 'Civic', 2021);
        garage.addCar(car1);
        garage.addCar(car2);
        const foundCar = garage.findCarByBrand('Ford');
        expect(foundCar).toBeUndefined();
        const foundCar2 = garage.findCarByModel('Mustang');
        expect(foundCar2).toBeUndefined();
    });

    test('Should not add a duplicate car to the garage', () => {
        const garage = new Garage();
        garage.addCar(new Car('Toyota', 'Corolla', 2020));
        garage.addCar(new Car('Toyota', 'Corolla', 2020));
        expect(() => garage.addCar(new Car('Toyota', 'Corolla', 2020))).toThrow();
    });

   test('Should verify the brand of the car when adding to the garage', () => {
        const garage = new Garage();
        const car = new Car('Toyota', 'Corolla', 2020);
        garage.addCar(car);
        const foundCar = garage.findCarByBrand('Toyota');
        expect(foundCar).toBeDefined();
        expect(foundCar?.getBrand()).toBe('Toyota');
    });
    test('Should verify the model of the car when adding to the garage', () => {
        const garage = new Garage();
        const car = new Car('Honda', 'Civic', 2021);
        garage.addCar(car);
        const foundCar = garage.findCarByModel('Civic');
        expect(foundCar).toBeDefined();
        expect(foundCar?.getModel()).toBe('Civic');
    });
    test('Should verify the year of the car when adding to the garage', () => {
        const garage = new Garage();
        const car = new Car('Ford', 'Mustang', 2022);
        garage.addCar(car);
        const foundCar = garage.findCarByBrand('Ford');
        expect(foundCar).toBeDefined();
        expect(foundCar?.getYear()).toBe(2022);
    });
    test('Should remove a car from the garage between several cars', () => {
        const garage = new Garage();
        const car1 = new Car('Toyota', 'Corolla', 2020);
        const car2 = new Car('Honda', 'Civic', 2021);
        const car3 = new Car('Ford', 'Mustang', 2022);
        garage.addCar(car1);
        garage.addCar(car2);
        garage.addCar(car3);
        garage.removeCar(car2);
        expect(garage.getCarCount()).toBe(2);
        expect(garage.findCarByBrand('Honda')).toBeUndefined();
    });
    test('Should verify stored property of a car after removing it from the garage', () => {
        const garage = new Garage();
        const car1 = new Car('Toyota', 'Corolla', 2020);
        const car2 = new Car('Honda', 'Civic', 2021);
        garage.addCar(car1);
        garage.addCar(car2);
        garage.removeCar(car1);
        expect(car1.getStored()).toBe(false);
        expect(car2.getStored()).toBe(true);
    });
});

    describe('Car', () => {
    test('should create a car with the correct properties', () => {
        const car = new Car('Toyota', 'Camry', 2020);
        expect(car.getBrand()).toBe('Toyota');
        expect(car.getModel()).toBe('Camry');
        expect(car.getYear()).toBe(2020);
        expect(car).toBeInstanceOf(Car);
    });
    test('Stored property should be true when a car is created', () => {
        const car = new Car('Honda', 'Civic', 2021);
        expect(car.getStored()).toBe(true);
    });
    test('Stored property should be false when a car is not stored', () => {
        const car = new Car('Ford', 'Mustang', 2022);
        car.setStored(false);
        expect(car.getStored()).toBe(false);
    });
    test('Stored property should be true when a car is stored again', () => {
        const car = new Car('Chevrolet', 'Camaro', 2023);
        car.setStored(false);
        car.setStored(true);
        expect(car.getStored()).toBe(true);
    });
});
   