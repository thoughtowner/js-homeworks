// Создайте массив строк, представляющих имена студентов: ["Анна", "Иван", "Мария", "Алексей", "Екатерина"].
// Используя цикл, выведите в консоль сообщение для каждого студента: "Студент {имя}, ваш порядковый номер: {индекс}".
// Напишите функцию findLongestName, которая находит самое длинное имя в массиве студентов и возвращает его.



let names = ["Анна", "Иван", "Мария", "Алексей", "Екатерина"];

for (let i = 0; i < names.length; i++) {
    console.log(`Student ${names[i]}, your serial number: ${i+1}`);
}

function findLongestName(names) {
    let longestName = names[0];
    for (let i = 0; i < names.length; i++) {
        if (names[i].length > longestName.length) {
            longestName = names[i];
        }
    }
    return longestName;
}

console.log(`The longest name: ${findLongestName(names)}`);