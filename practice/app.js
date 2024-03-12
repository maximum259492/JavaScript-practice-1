// Цикл в Цикле Цикл в Цикле Цикл в Цикле Цикл в Цикле Цикл в Цикле Цикл в Цикле Цикл в Цикле Цикл в Цикле Цикл в Цикле Цикл в Цикле Цикл в Цикле

// for (let i = 1; i < 5; i++) {
//     console.log(`Цикл 1 - ${i}`);
//     for (let j = 1; j < 5; j++) {
//         console.log(`Цикл 2 - ${j}`)
//     }

// }

// const tasks = [[1, 'Задача 1'], [2, 'Задача 2']]

// for (let i = 0; i < tasks.length; i++) {
//     for (let j = 0; j < tasks[i].length; j++) {
//         console.log(tasks[i][j]) // Берет i-тый элемент массива, который является массивом и достает оттуда элемент j
//     }

// }


// ЦИКЛ WHILE ЦИКЛ WHILE ЦИКЛ WHILE ЦИКЛ WHILE ЦИКЛ WHILE ЦИКЛ WHILE ЦИКЛ WHILE ЦИКЛ WHILE ЦИКЛ WHILE ЦИКЛ WHILE ЦИКЛ WHILE ЦИКЛ WHILE ЦИКЛ WHILE ЦИКЛ WHILE

// for (let i = 1; i < 5; i++) {
//     console.log(`Вывод - ${i}`)
// }

// let i = 1;
// while (i < 5) {
//     console.log(`Вывод - ${i}`)
//     i++;
// }


// const arr = [1, 4, 8, 7]
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 5) {
//         break;
//     }
//     console.log(arr[i])
// }

// let i = 0
// while (arr[i] <= 5 && i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }


// let j = 0
// do{
//     console.log(j)
//     j++
// } while(j < 0) // do while - Выполняется хотя бы один раз


// ЦИКЛЫ FOR OF и FOR IN ЦИКЛЫ FOR OF и FOR IN ЦИКЛЫ FOR OF и FOR IN ЦИКЛЫ FOR OF и FOR IN ЦИКЛЫ FOR OF и FOR IN ЦИКЛЫ FOR OF и FOR IN ЦИКЛЫ FOR OF и FOR IN 

// const arr = [1, 4, 8, 7]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// const arr = [1, 4, 8, 7, 'Макс']

// for (let element of arr) { // Получение каждого элемента из массива arr
//     console.log(element)
// }

// for (let index in arr) { // Получение идекса каждого элемента массива arr
//     console.log(index)
// }


/*
    Есть выгрузка операций пользователя
    const operations = [1000, -700, 300, -500, 10000]
    а так же начальный баланс в 100$
    Необходимо сделать функции расчета:
    - Итогового баланса 
    - Наличия отрицательного балланса (если после очередной операции баланс < 0, то выдавать false)
    - Расчета среднего расхода и среднего дохода
 */

const operations = [1000, -700, 300, -500, 10000]
const Expenses = [];
const income = [];
const startingBalance = 100;


function finalBalance(arrayOfOperations, initialBalance) {
    let balance = initialBalance
    for (const element of arrayOfOperations) {
        balance += element
    }
    return balance
}

console.log(finalBalance(operations, startingBalance))

function isOkay(arrayOfOperations, initialBalance) {
    let balance = initialBalance
    let isOkay = true
    for (const element of arrayOfOperations) {
        balance += element
        if (balance < 0) {
            isOkay = false
            break;
        }
    }
    return isOkay
}

console.log(isOkay(operations, startingBalance))


function average(arrayOfOperations) {
    let positiveCount = 0;
    let positiveSum = 0;
    let negativeCount = 0;
    let negativeSum = 0;
    for (const element of arrayOfOperations) {
        if (element > 0) {
            positiveCount++;
            positiveSum += element;
        }
        if (element < 0) {
            negativeCount++;
            negativeSum += element
        }
    }
    return [positiveSum / positiveCount, negativeSum / negativeCount]
}

console.log(average(operations))