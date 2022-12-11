const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(param) {
    let LongestWord = param[0];

    for (let index = 0; index < param.length; index++) {
        if(param[index].length > LongestWord.length) {
            LongestWord = param[index];
        }
    }
    return LongestWord;
}

console.log('La palabra más larga es ' + findLongestWord(avengers));