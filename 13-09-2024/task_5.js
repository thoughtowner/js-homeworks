// 5. Иерархия домашних животных
// Условие:
// Создайте абстрактный класс Pet, который будет представлять домашнее животное с методами:
// eat() — выводит сообщение "Животное ест".
// makeSound() — метод, который должен быть переопределен в классах-наследниках.
// Создайте классы Dog и Cat, которые наследуют Pet.

// Переопределите метод makeSound() для каждого класса:
// Для Dog — выводит "Собака лает".
// Для Cat — выводит "Кошка мяукает".
// Добавьте метод sleep() для каждого питомца, который выводит сообщение о том, что питомец спит.

// Создайте объекты для каждого класса и вызовите методы eat(), makeSound() и sleep().

// Ожидаемый результат:
// Объекты классов Dog и Cat корректно переопределяют метод makeSound().
// Методы eat() и sleep() работают для каждого питомца.



class Pet {
    constructor(name) {
        this.name = name;
    }

    eat() {
        return 'The pet eats';
    }

    sleep() {
        return 'The pet sleep';
    }

    makeSound() {
        return 'The pet make sound';
    }
}

class Cat extends Pet {
    constructor(name) {
        super(name);
    }

    eat() {
        return super.eat();
    }

    sleep() {
        return super.sleep();
    }

    makeSound() {
        return `Cat ${this.name} meows`;
    }
}

class Dog extends Pet {
    constructor(name) {
        super(name);
    }

    eat() {
        return super.eat();
    }

    sleep() {
        return super.sleep();
    }

    makeSound() {
        return `Dog ${this.name} barks`;
    }
}

let cat = new Cat('cat');
let dog = new Dog('dog');

console.log(cat.eat());
console.log(cat.sleep());
console.log(dog.makeSound());