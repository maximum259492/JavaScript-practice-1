// Метод REDUCE Метод REDUCE Метод REDUCE Метод REDUCE Метод REDUCE Метод REDUCE Метод REDUCE Метод REDUCE Метод REDUCE Метод REDUCE Метод REDUCE

// const operations = [100, -20, 7, -30, 50]
// let balance = 0
// for (const operation of operations) {
//     balance += operation
// }
// console.log(balance);



// Метод Reduce() применяет функцию к аккумулятору и каждому элементу массива (слева направо), чтобы свести массив к одному значению.

// const finalBalance = operations.reduce((acc, operation, i) => {
//     console.log(`Итерация ${i + 1} acc: ${acc}, operation ${operation}`)
//     return acc += operation
// }, 0)

// 0 - acc = 0, value = 100
// 1 - acc = 100, value = -20

// console.log(finalBalance);

// const minElement = operations.reduce((acc, operation, i) => {
//     if (operation > 0) {
//         return acc;
//     } else {
//         return operation
//     }

// }, 0)
// console.log(minElement)

/*
    Найти среднее значение последовательности
    чисел с помощью reduce()
 */

// const arr = [2, 4, 4, 10]

// const average = arr.reduce((acc, num, i) => {
//     acc += num
//     if (i === arr.length - 1) {
//         return acc / arr.length
//     }
//     else {
//         return acc
//     }

// }, 0)
// console.log(average)



// Метод Find и FindIndex

// const arr = [2, 4, 4, 10, 20]
// let elGT5;

// for (const el of arr) {
//     if (el > 5) {
//         elGT5 = el
//         break;

//     }
// }

// console.log(elGT5)

// elGT5 = arr.find(el => el > 5)
// elGT5Index = arr.findIndex(el => el < 0)
// console.log(elGT5)
// console.log(elGT5Index)


/* Написать функцию, которая возвращает true,
    если элемент есть, и false, если нет
*/

const arr = [2, 4, 4, 10, 20]

// function some(arr, el){
//     let check = arr.includes(el)
//     console.log(check)
// }

// some(arr,4)


function some(array, element) {
    const res = array.find(el => {
        return el === element
    })
    return res === undefined ? false : true
}

console.log(some(arr, 10))

console.log(arr.some(el => el === 10)) // Метод Some() проверяет, если ли в масстве элемент равный задаваемому