// Итерационный подсчет факториала
function factIterat(num){
    let result = 1;
    if (num < 0 || (num % 1 !== 0)) {
        return 'введите целое положительное число ¯\\_(ツ)_/¯ '
    }
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

console.log('итеративный метод: ',factIterat(3.2))
console.log('рекурсивный метод: ',factRec(3))