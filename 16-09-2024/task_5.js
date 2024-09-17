// 5. Задача: Электронные устройства
// Условие:
// Создайте конструктор Device для представления электронных устройств с параметрами:

// brand — бренд устройства.
// power — мощность устройства (в ваттах).
// Добавьте методы к прототипу:

// turnOn() — выводит сообщение "Устройство [brand] включено".
// turnOff() — выводит сообщение "Устройство [brand] выключено".
// Создайте конструктор SmartDevice, который наследует от Device и добавляет свойство:

// isConnectedToWifi — подключено ли устройство к Wi-Fi (булевое значение).
// Добавьте метод connectToWifi(), который меняет значение свойства isConnectedToWifi и выводит сообщение "Устройство [brand] подключено к Wi-Fi".

// Подсказка:
// Используйте прототипы для наследования методов turnOn и turnOff.



function Device(brand, power) {
    this.brand = brand;
    this.power = power;
}

Device.prototype.turnOn = function() {
    console.log(`Устройство ${this.brand} включено`);
}

Device.prototype.turnOff = function() {
    console.log(`Устройство ${this.brand} выключено`);
}

function SmartDevice(brand, power, isConnectedToWifi) {
    Device.call(this, brand, power);
    this.isConnectedToWifi = isConnectedToWifi;
}

SmartDevice.prototype = Object.create(Device.prototype);

SmartDevice.prototype.connectToWifi = function() {
    this.isConnectedToWifi = !this.isConnectedToWifi;
    console.log(`Устройство ${this.brand} подключено к Wi-Fi`);
}

let device = new Device('brand', 100);
let smartDevice = new SmartDevice('brand', 100, false);

device.turnOn();
smartDevice.turnOff();
smartDevice.connectToWifi();
console.log(smartDevice.isConnectedToWifi);