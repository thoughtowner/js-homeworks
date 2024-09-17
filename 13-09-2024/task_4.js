// 4. Задача: Система онлайн-заказов
// Условие:
// Создайте классы для системы онлайн-заказов:
// Customer — представляет покупателя с именем и email.
// Order — представляет заказ и содержит:
// Список товаров (объекты класса Product).
// Сумму заказа.
// Покупателя, оформившего заказ (объект класса Customer).

// Создайте класс Product, который имеет свойства:
// name — название товара.
// price — цена товара.

// Класс Order должен иметь методы:
// addProduct(product, quantity) — добавляет товар в заказ.
// calculateTotal() — рассчитывает итоговую сумму заказа.
// printOrder() — выводит информацию о заказе: покупатель, товары, общая стоимость.
// Создайте несколько покупателей, товары, оформите несколько заказов и выведите информацию о каждом заказе.



class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Order {
    constructor(name) {
        this.products = {};
        this.totalCost = 0;
        this.customer = name;
    }

    addProduct(product, quantity) {
        this.products[product.name] = {'price': product.price, 'quantity': quantity};
    }

    calculateTotal() {
        let currentTotalCost = 0;
        for (let productName in this.products) {
            currentTotalCost += this.products[productName]['price'] * this.products[productName]['quantity'];
        }
        this.totalCost = currentTotalCost;
        return this.totalCost;
    }

    printOrder() {
        let productsList = [];
        for (let productName in this.products) {
            productsList.push(productName);
        }
        return `${this.customer.name} (${this.customer.email}) | ${productsList} | ${this.calculateTotal()} dollars`;
    }
}

let customer = new Customer('customer', 'customer@gmail.com');

let milk = new Product('milk', 100);
let cake = new Product('cake', 250);
let apples = new Product('apples', 150);

let order = new Order(customer);
order.addProduct(milk, 3);
order.addProduct(cake, 1);

console.log(order.printOrder());
order.addProduct(apples, 2);
console.log(order.printOrder());