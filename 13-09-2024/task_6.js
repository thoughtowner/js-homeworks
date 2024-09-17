// 6. Математические выражения
// Условие:
// Создайте класс Expression, представляющий математическое выражение с двумя числами и операцией (например, сложение или умножение). Этот класс должен содержать методы:
// evaluate() — возвращает результат выражения.
// toString() — возвращает строковое представление выражения, например, "3 + 5 = 8".

// Создайте подклассы для различных математических операций:
// Addition для сложения.
// Subtraction для вычитания.
// Multiplication для умножения.
// Division для деления (с проверкой деления на ноль).
// Создайте несколько объектов выражений и выведите результаты их вычислений.

// Ожидаемый результат:
// Каждый объект правильно вычисляет математическое выражение.
// Метод toString() корректно выводит информацию в формате "a op b = result".



class Expression {
    constructor(firstNumber, secondNumber) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }

    evaluate() {
        return 'result';
    }

    toString() {
        return `${this.firstNumber} operation ${this.secondNumber} = ${this.evaluate()}`;
    }
}


class Addition extends Expression {
    constructor(firstNumber, secondNumber) {
        super(firstNumber, secondNumber);
    }

    evaluate() {
        return this.firstNumber + this.secondNumber;
    }

    toString() {
        return `${this.firstNumber} + ${this.secondNumber} = ${this.evaluate()}`;
    }
}


class Subtraction extends Expression {
    constructor(firstNumber, secondNumber) {
        super(firstNumber, secondNumber);
    }

    evaluate() {
        return this.firstNumber - this.secondNumber;
    }

    toString() {
        return `${this.firstNumber} - ${this.secondNumber} = ${this.evaluate()}`;
    }
}


class Multiplication extends Expression {
    constructor(firstNumber, secondNumber) {
        super(firstNumber, secondNumber);
    }

    evaluate() {
        return this.firstNumber * this.secondNumber;
    }

    toString() {
        return `${this.firstNumber} * ${this.secondNumber} = ${this.evaluate()}`;
    }
}


class Division extends Expression {
    constructor(firstNumber, secondNumber) {
        super(firstNumber, secondNumber);
    }

    evaluate() {
        if (this.secondNumber === 0) {
            return 'Division by zero is detected';
        } else {
            return this.firstNumber / this.secondNumber;
        }
    }

    toString() {
        if (this.evaluate() === 'Division by zero is detected') {
            return this.evaluate();
        } else {
            return `${this.firstNumber} / ${this.secondNumber} = ${this.evaluate()}`;
        }
    }
}

let addition = new Addition(1, 2);
let division = new Division(1, 0);
console.log(addition.toString());
console.log(division.toString());