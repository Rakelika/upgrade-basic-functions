const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
  let sumNumbers = 0;
  let sumStrings = 0;

  for (let element of param) {
    if (typeof(element)==='string'){
        sumStrings += element.length;
    }

    if (typeof(element)==='number'){
      sumNumbers += element;
    }
  
     }
      
     return (sumNumbers + sumStrings) / param.length;
}


console.log(averageWord(mixedElements))