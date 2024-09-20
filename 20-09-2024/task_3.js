// function memorize(fn) {
//     let xs, ys, rs;
  
//     return (x, y) => {
//         console.log({xs, ys, rs, x, y})
        
//         if(x !== xs || y !== ys) {
//             xs = x;
//             ys = y;
//             rs = fn(x, y);
//         }
    
//         return rs;
//     };
// }



function sortByFrequency(text) {
    let letters = {};
    for (let i = 0; i < text.length; i++) {
        if (!letters.hasOwnProperty(text[i])) {
            letters[text[i]] = 1;
        } else {
            letters[text[i]] += 1;
        }
    }
    let newLetters = [];
    for (let key in letters) {
        newLetters.push([key, letters[key]]);
    }
    return newLetters.sort(function(a, b) { return b[1] - a[1]; });
}

text = 'abcdefaabcccf';
console.log(sortByFrequency(text));