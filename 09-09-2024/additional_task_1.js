// Создайте функцию reverseString, которая принимает строку и возвращает ее в перевернутом виде.



function reverseString(text) {
    for (let i = text.length - 1; i >= 0; i--) {
        text += text[i];
    }
    return text.slice(text.length / 2);
}

let testText = 'abcde';
console.log(reverseString(testText));
