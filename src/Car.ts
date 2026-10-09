export class Car {
    protected brand: string;
    protected model: string;
    protected year: number;
    protected stored: boolean;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.stored = true;
    }
      
     public getBrand(): string {
        return this.brand;
    }

    public setBrand(value: string): void {
        this.brand = value;
    }

    public getModel(): string {
        return this.model;
    }

    public setModel(model: string): void {
        this.model = model;
    }

    public getYear(): number {
        return this.year;
    }

    public setYear(year: number): void {
        this.year = year;
    }

    public getStored(): boolean {
        return this.stored;
    }

    public setStored(status: boolean) {
        this.stored = status;
    }
}

    // const myCar = new Car("Toyota", "Camry", 2020);
    // myCar.setStored(false);

