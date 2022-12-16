const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  
  function finderName(array, param) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].includes(param)) {
        console.log(true, i);
      }
  }

  if (!array.includes(param)) {
    console.log(false);       
  }
}

finderName(nameFinder, 'Bruce')