// 1. Задача: Управление транспортными средствами
// Условие:
// Создайте конструктор Vehicle для транспортных средств с такими параметрами, как:

// brand — марка транспортного средства.
// model — модель транспортного средства.
// year — год выпуска.
// Добавьте методы к прототипу:

// start() — выводит сообщение "Транспортное средство [brand] [model] завелось".
// stop() — выводит сообщение "Транспортное средство [brand] [model] остановилось".
// Создайте конструктор Car, который наследует от Vehicle, добавляя свойство fuelType — тип топлива, и метод:

// refuel() — выводит сообщение "Машина заправлена [fuelType]".
// Подсказка:
// Используйте функцию-конструктор и прототипы для создания объекта Car с наследованием от Vehicle.



function Vehicle(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

Vehicle.prototype.start = function() {
    console.log(`Транспортное средство ${this.brand} ${this.model} завелось`);
}

Vehicle.prototype.stop = function() {
    console.log(`Транспортное средство ${this.brand} ${this.model} остановилось`);
}

function Car(brand, model, year, fuelType) {
    Vehicle.call(this, brand, model, year);
    this.fuelType = fuelType;
}

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.refuel = function() {
    console.log(`Машина заправлена ${this.fuelType}`);
}

let vehicle = new Vehicle('vehicle brand', 'vehicle model', 2000);
vehicle.start();
let car = new Car('car brand', 'car model', 2000, 98);
car.stop();
car.refuel();