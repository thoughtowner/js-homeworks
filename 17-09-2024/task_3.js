// Задача 3: Система управления заказами в ресторане
// Условие:

// Создайте класс MenuItem, который представляет блюдо в ресторане с параметрами:

// name — название блюда.
// price — цена блюда.
// Создайте класс Order, который представляет заказ в ресторане с параметрами:

// orderNumber — номер заказа.
// items — массив блюд, включенных в заказ.
// tableNumber — номер стола.
// Добавьте методы:

// addItem(item) — добавляет блюдо в заказ.
// removeItem(item) — удаляет блюдо из заказа.
// calculateTotal() — возвращает общую сумму заказа.
// Создайте класс Table, который представляет стол в ресторане с параметрами:

// tableNumber — номер стола.
// order — текущий заказ на столе.
// Добавьте методы:

// placeOrder(order) — размещает заказ на столе.
// clearOrder() — очищает заказ после его завершения.
// Создайте класс Waiter, который представляет официанта с параметрами:

// name — имя официанта.
// assignedTables — массив столов, за которыми он обслуживает.
// Добавьте методы:

// assignTable(table) — назначает стол официанту.
// takeOrder(table, order) — позволяет официанту принимать заказ от стола.
// Задача:

// Создайте меню ресторана, столы и официантов.
// Реализуйте систему заказа блюд с возможностью добавления и удаления позиций.
// Организуйте систему обслуживания столов официантами, включая размещение заказов и их расчёт.
// Усложнение:

// Добавьте возможность отмены заказа до его подтверждения.
// Реализуйте учет чаевых для официантов.



function MenuItem(name, price) {
    this.name = name;
    this.price = price;
}

function Order(orderNumber, items, tableNumber) {
    this.orderNumber = orderNumber;
    this.items = items;
    this.tableNumber = tableNumber;
}

Order.prototype.addItem = function(item) {
    this.items.push(item);
}

Order.prototype.removeItem = function(item) {
    isDeleted = false;
    for (let i = 0; i < this.items.length; i++) {
        if (this.items[i] === item) {
            this.items.splice(i, 1);
            isDeleted = true;
        }
    }
    if (!isDeleted) {
        console.log(`Блюдо ${item} невозможно удалить, т.к. его нет в заказе`);
    }
}

Order.prototype.calculateTotal = function() {
    let totalPrice = 0;
    for (let i = 0; i < this.items.length; i++) {
        totalPrice += this.items[i].price;
    }
    return totalPrice;
}

function Table(tableNumber, order) {
    this.tableNumber = tableNumber;
    // Плохая практика из-за <ref *1> (у стола есть свойство заказа, а у заказа есть свойство стола).
    // Нужно тогда поменять свойство order на food
    this.order = order || null;
}

Table.prototype.placeOrder = function(order) {
    if (this.order === null) {
        this.order = order;
    } else {
        console.log(`Невозможно разместить заказ ${order}, т.к. на столе уже размещён заказ`);
    }
}

Table.prototype.clearOrder = function() {
    this.order = null;
}

function Waiter(name, assignedTables, assignedOrders) {
    this.name = name;
    this.assignedTables = assignedTables || [];
    this.assignedOrders = assignedOrders || [];
}

Waiter.prototype.assignTable = function(table) {
    this.assignedTables.push(table);
}

Waiter.prototype.takeOrder = function(order) {
    this.assignedOrders.push(order);
}

let item1 = new MenuItem('item1', 100);
let item2 = new MenuItem('item2', 150);
let item3 = new MenuItem('item3', 200);
let table = new Table(1);
let order = new Order(1, [item1, item2], table);
let waiter = new Waiter('waiter');

order.removeItem(item2);
order.addItem(item3);
console.log(order.items);
console.log(order.calculateTotal());
waiter.assignTable(table);
console.log(waiter.assignedTables);
waiter.takeOrder(order);
console.log(waiter.assignedOrders);
table.placeOrder(order);
console.log(table.order);
table.clearOrder();
console.log(table.order);