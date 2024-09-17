// 2. Кассовый аппарат
// Условие:
// Создайте класс Product, который будет представлять товар с характеристиками:
// name — название товара.
// price — цена товара.

// Создайте класс ShoppingCart, который будет представлять корзину покупок. Этот класс должен иметь следующие методы:
// addProduct(product, quantity) — добавляет товар в корзину.
// removeProduct(product) — удаляет товар из корзины.
// getTotalPrice() — возвращает общую стоимость всех товаров в корзине.
// checkout() — выводит список всех товаров и общую сумму к оплате, затем очищает корзину.

// Создайте несколько объектов класса Product, добавьте их в корзину и рассчитайте итоговую сумму покупок.

// Ожидаемый результат:
// Можно добавлять и удалять товары из корзины.
// Корзина корректно рассчитывает общую стоимость товаров.
// Метод checkout() выводит итоговый список покупок и очищает корзину.



// pseudo classes

// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }

// class ShoppingCart {
//     constructor() {
//         this.products = {};
//     }

//     addProduct(product, quantity) {
//         this.products[product.name] = {'price': product.price, 'quantity': quantity};
//     }

//     removeProduct(product, quantity) {
//         if (quantity >= this.products[product.name]['quantity']) {
//             delete this.products[product.name];
//         } else {
//             this.products[product.name]['quantity'] -= quantity;
//         }
//     }

//     getTotalPrice() {
//         let totalPrice = 0;
//         for (let productName in this.products) {
//             totalPrice += this.products[productName]['quantity'] * this.products[productName]['price'];
//         }
//         return totalPrice;
//     }

//     checkout() {
//         let allProducts = [];
//         let totalPrice = this.getTotalPrice();
//         for (let productName in this.products) {
//             allProducts.push(productName);
//         }
//         this.products = {};
//         console.log(`${allProducts} | ${totalPrice} dollars`);
//     }
// }

// let milk = new Product('milk', 100);
// let cake = new Product('cake', 250);
// let apples = new Product('apples', 150);

// let shoppingCart = new ShoppingCart();
// shoppingCart.addProduct(milk, 3);
// shoppingCart.addProduct(cake, 1);
// shoppingCart.addProduct(apples, 2);

// console.log(shoppingCart.getTotalPrice());
// shoppingCart.removeProduct(cake, 10);
// shoppingCart.checkout();
// console.log(shoppingCart.getTotalPrice());



// functions

function Product(name, price) {
    this.name = name;
    this.price = price;
}

function ShoppingCart() {
    this.products = {};
}

ShoppingCart.prototype.addProduct = function(product, quantity) {
    this.products[product.name] = {'price': product.price, 'quantity': quantity};
}

ShoppingCart.prototype.removeProduct = function(product, quantity) {
    if (quantity >= this.products[product.name]['quantity']) {
        delete this.products[product.name];
    } else {
        this.products[product.name]['quantity'] -= quantity;
    }
}

ShoppingCart.prototype.getTotalPrice = function() {
    let totalPrice = 0;
    for (let productName in this.products) {
        totalPrice += this.products[productName]['quantity'] * this.products[productName]['price'];
    }
    return totalPrice;
}

ShoppingCart.prototype.checkout = function() {
    let allProducts = [];
    let totalPrice = this.getTotalPrice();
    for (let productName in this.products) {
        allProducts.push(productName);
    }
    this.products = {};
    console.log(`${allProducts} | ${totalPrice} dollars`);
}

let milk = new Product('milk', 100);
let cake = new Product('cake', 250);
let apples = new Product('apples', 150);

let shoppingCart = new ShoppingCart();
shoppingCart.addProduct(milk, 3);
shoppingCart.addProduct(cake, 1);
shoppingCart.addProduct(apples, 2);

console.log(shoppingCart.getTotalPrice());
shoppingCart.removeProduct(cake, 10);
shoppingCart.checkout();
console.log(shoppingCart.getTotalPrice());