// Итерационный подсчет факториала
function factIterat(num){
    let result = 1;
    while (num > 0) {
        result *= num
        num--
    }
    return result
}

// Рекурсивный расчет факториала
function factRec(num){
    let result = 0;

    return result
}

console.log('итеративный метод: ',factIterat(3))
console.log('рекурсивный метод: ',factRec(3))