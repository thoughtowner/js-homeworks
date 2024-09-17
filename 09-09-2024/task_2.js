// Создайте массив из 10 случайных чисел.
// Напишите функцию findMinMax, которая принимает массив и возвращает объект с двумя свойствами: min — минимальное значение в массиве, max — максимальное.
// Вызовите функцию для созданного массива и выведите результат в консоль.



function createRandomArray() {
    let randomArray = [];
    for (let i = 0; i < 10; i++) {
        randomArray.push(Math.floor(Math.random() * 100));
    }
    return randomArray;
}

function findMinMax(array) {
    let minMaxObj = {'min': array[0], 'max': array[0]};
    for (let i = 0; i < array.length; i++) {
        if (array[i] < minMaxObj['min']) {
            minMaxObj['min'] = array[i];
        } else if (array[i] > minMaxObj['min']) {
            minMaxObj['max'] = array[i];
        }
    }
    return minMaxObj;
}

randomArray = createRandomArray()
console.log(randomArray);
console.log(findMinMax(randomArray));