let result = [];

function flattenArray(array) {
    let exampleList = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof(array[i]) === typeof(exampleList)) {
            flattenArray(array[i]);
            continue;
        }
        result.push(array[i]);
    }
    return result;
}

let array = [1, 2, [3, [4, 5], 6], [7], 8];
console.log(flattenArray(array, []));



// function multiplyExceptSelf(array) {
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         array[array.length + i] = array[i];
//         result[i] = 1;
//     }
//     for (let i = 0; i < array.length/2; i++) {
//         for (let j = 0; j < array.length/2; j++) {
//             result[j] *= array[i+1];
//         }
//     }
//     return result;
// }

// array = [1, 2, 3, 4, 5];
// console.log(multiplyExceptSelf(array));