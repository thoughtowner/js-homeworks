// 3. Задача: Магазин одежды
// Условие:
// Создайте конструктор ClothingItem для представления одежды с параметрами:

// type — тип одежды (например, "футболка", "джинсы").
// size — размер одежды.
// price — цена.
// Добавьте методы к прототипу:

// getInfo() — выводит строку "Тип: [type], Размер: [size], Цена: [price]".
// Создайте конструктор ClothingStore, который управляет запасами одежды:

// Метод addClothingItem(item) — добавляет одежду в магазин.
// Метод findBySize(size) — возвращает все элементы одежды, которые соответствуют заданному размеру.
// Метод getTotalValue() — возвращает общую стоимость всех элементов в магазине.
// Подсказка:
// Используйте массив для хранения элементов одежды и методы для поиска и расчёта.



function ClothingItem(type, size, price) {
    this.type = type;
    this.size = size;
    this.price = price;
}

ClothingItem.prototype.hetInfo = function() {
    console.log(`Тип: ${this.type}, Размер: ${this.size}, Цена: ${this.price}`);
}

function ClothingStore() {
    this.clothingItems = [];
}

ClothingStore.prototype.addClothingItem = function(item) {
    return this.clothingItems.push(item);
}

ClothingStore.prototype.findBySize = function(size) {
    return this.clothingItems.filter(function(element) { return element.size === size; });
}

ClothingStore.prototype.getTotalValue = function() {
    let totalValue = 0;
    for (let i = 0; i < this.clothingItems.length; i++) {
        totalValue += this.clothingItems[i].price;
    }
    return totalValue;
}

let clothingStore = new ClothingStore();
let clothingItemA = new ClothingItem('type', 10, 100);
let clothingItemB = new ClothingItem('type', 10, 150);
let clothingItemC = new ClothingItem('type', 20, 200);

clothingStore.addClothingItem(clothingItemA);
clothingStore.addClothingItem(clothingItemB);
clothingStore.addClothingItem(clothingItemC);
console.log(clothingStore.findBySize(10));
console.log(clothingStore.getTotalValue());