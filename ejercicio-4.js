const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    let promedio = 0;
    for (let index = 0; index < param.length; index++) {
        promedio += param[index] / param.length;
    }
    return promedio
}

console.log(average(numbers))