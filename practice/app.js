
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

// const arr = [2, 4, 4, 10, 20]

// function some(arr, el){
//     let check = arr.includes(el)
//     console.log(check)
// }

// some(arr,4)


// function some(array, element) {
//     const res = array.find(el => {
//         return el === element
//     })
//     return res === undefined ? false : true
// }

// console.log(some(arr, 10))

// console.log(arr.some(el => el === 10)) // Метод Some() проверяет, если ли в масстве элемент равный задаваемому

// Метод Flat/FlatMap Метод Flat/FlatMap Метод Flat/FlatMap Метод Flat/FlatMap Метод Flat/FlatMap Метод Flat/FlatMap Метод Flat/FlatMap Метод Flat/FlatMap 

// const prices = [[2, 4], [3, 4], [10, 20]]



// // Метод flat() возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth.

// const res = prices.flat();

// // Метод flatMap() позволяет сформировать массив, применяя функцию к каждому элементу, затем уменьшает вложенность, делая этот массив плоским, и возвращает его. 
// const res2 = prices.flatMap((el, index) => el[1]);
// console.log(res)
// console.log(res2)

// Метод Sort Метод Sort Метод Sort Метод Sort Метод Sort Метод Sort Метод Sort Метод Sort Метод Sort Метод Sort Метод Sort Метод Sort Метод Sort Метод Sort

// const users = ['Vasya', 'Masha', 'Katya', 'Anya']
// console.log(users)

// // Метод sort() на месте сортирует элементы массива и возвращает отсортированный массив.
// users.sort();
// console.log(users)

const operations = [100, -300, 0, -100, 50, 480]
console.log(operations)

// return < 0 - a, b - сохраняем порядок
// return  > 0 - b, a - меняем порядок
operations.sort((a, b) => {
    return a - b // Возвращаем числа по возрастанию 
});
console.log(operations)

operations.sort((a, b) => b - a); // Возвращаем числа по убыванию
console.log(operations)

