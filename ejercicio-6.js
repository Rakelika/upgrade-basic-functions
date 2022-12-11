const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

  
 function removeDuplicates(param) {
    
  for (let index = param.length; index >= 0; index--) {
    if (param.indexOf(param[index]) !== index) {
      param.splice(index, 1)
    }  
  }
    return param
}

console.log(removeDuplicates(duplicates))
 