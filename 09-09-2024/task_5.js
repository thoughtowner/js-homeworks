// Напишите функцию formatDate, которая принимает объект Date и возвращает строку в формате DD.MM.YYYY HH:MM. Используйте методы объектов даты для форматирования.
// Вызовите функцию и выведите текущее время в этом формате.
// Напишите функцию, которая вычисляет разницу в днях между двумя датами.



function formatDecimalNumber(number, digit) {
    return Array((digit - Number(String(number).length)) + 1).join('0') + String(number);
}

function formatDate(date) {
    let numbersDuo = [[date.getDate(), 2], [date.getMonth()+1, 2], [date.getFullYear(), 4], [date.getHours(), 2], [date.getMinutes(), 2]];
    let numbers = [];
    for (let i = 0; i < numbersDuo.length; i++) {
        numbers.push(formatDecimalNumber(numbersDuo[i][0], numbersDuo[i][1]));
    }
    return `${numbers[0]}.${numbers[1]}.${numbers[2]} ${numbers[3]}:${numbers[4]}`;
}

function dateDifference(firstDate, secondDate) {
    return Math.floor((secondDate.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24));
}

let currentDate = new Date();
let randomDate = new Date('October 13, 2023 05:35:32')

console.log(formatDate(currentDate));
console.log(dateDifference(randomDate, currentDate));