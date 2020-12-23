class Vehicle {
  public constructor(public numberOfWheels: number) {}
}

class Car extends Vehicle {
  public getCarInfo(): void {
    console.info(`Number of wheels: ${this.numberOfWheels}.`)
  }
}

const car = new Car(4)
