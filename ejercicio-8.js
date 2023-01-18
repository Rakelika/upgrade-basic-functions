const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];


function repeatCounter(array) {
  let repeatWords = [];
  for (let i = 0; i < array.length; i++) {
      let count = 0;
      for (let e = 0; e < array.length; e++) {
          if (array[i] === array[e]) {
              count++
          }
      }
      let words =  {
          word: array[i],
          number: count,
      }
      repeatWords.push(words);
  }
  console.log(repeatWords)
}

repeatCounter(counterWords)
