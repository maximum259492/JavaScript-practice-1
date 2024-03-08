
// ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ ФУНКЦИИ 
// function logName(name, surname) {
//     console.log(`Мое имя ${name} ${surname}`)
// }

// logName('Максон', 'Билык')

// function countDepositSum(depositInUSD, month, rate) {
//     return depositInUSD * (1 + rate / 12) ** month
// }

// const example1 = countDepositSum(1000, 36, 0.1)
// console.log(example1)

// const example2 = countDepositSum(1000, 48, 0.1)
// console.log(example2)

// АНОНИМНЫЕ ФУНКЦИИ АНОНИМНЫЕ ФУНКЦИИ АНОНИМНЫЕ ФУНКЦИИ 

// function powerOfTwo(num) {
//     return num * num;
// }
// console.log(powerOfTwo(11))


// const pOft = function (num) { // Анонимная - нет названия, содержиться в переменной 
//     return num * num;
// }

// console.log(pOft(12))

// СТРЕЛОЧНЫЕ ФУНКЦИИ  СТРЕЛОЧНЫЕ ФУНКЦИИ  СТРЕЛОЧНЫЕ ФУНКЦИИ $

// function powerOfTwo(num) {
//     return num * num
// }

// console.log(powerOfTwo(5))

// const poft = (num) => num * num // Стрелочная функция 
// const pofg = num => num * num // Можно опустить скобки аргумента 
// const arrowExample = (num, i) => { // Если 2 аргумента -> ставим Скобки 
//     console.log(num);
//     return num * num
// }
// console.log(poft(4))
// console.log(pofg(6))
// console.log(arrowExample(8))

/* Переписать функцию в стрелочную */

function toPower(num, power) {
    const res = num ** power
    return res
}

console.log(toPower(2, 3))

const toPowerArrow = (num,power) => num ** power

console.log(toPowerArrow(5,3))