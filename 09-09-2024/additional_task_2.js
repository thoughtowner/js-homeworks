// Напишите функцию, которая принимает строку и возвращает ее, удалив все гласные буквы.



function removeVowels(text) {
    let vowels = "aeiouy";
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (text[i] === vowels[j]) {
                text = text.slice(0, i) + text.slice(i+1, text.length);
                i -= 1;
                break;
            }
        }
    }
    return text;
}
  
let randomText = 'Random text';
console.log(removeVowels(randomText));