function counter() {
    return function otherCounter(count) {
        count += 1;
        return count;
    }
}

function countWords(text) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            count += 1;
        }
    }
    return count + 1;
}

let text = 'Привет, я написал рандомный текст, чтобы посчитать в нём количество слов!';
console.log(countWords(text));

console.log(counter());