// const score = [5, 10, 0, 15];

// for (const [i, el] of score.entries()) { //   Возвращает как Индекс элемента, так и сам Элемент
//     console.log(`Раунд ${i + 1} : ${el}`)
// }

// Метод ForEach Метод ForEach Метод ForEach Метод ForEach Метод ForEach Метод ForEach Метод ForEach Метод ForEach Метод ForEach Метод ForEach Метод ForEach


// Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве. Принимает element, index , array соответственно 

// score.forEach((scoreElement, i, arr) => { 
// console.log(`Раунд ${i + 1} счет: ${scoreElement} 
// Все счета: ${arr.join('-')}`)
// })
// (5, 0) = {...}
// (10, 1) = {...}


// Метод MAP Метод MAP Метод MAP Метод MAP Метод MAP Метод MAP Метод MAP Метод MAP Метод MAP Метод MAP Метод MAP Метод MAP Метод MAP Метод MAP Метод MAP 

// const transactionUSD = [10, 7, 50, -10, 100];
// const transactionRUB = []
// for (const transaction of transactionUSD) {
//     transactionRUB.push(transaction * 60)

// }
// console.log(transactionUSD)
// console.log(transactionRUB)



// Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.

// const transactionRUB2 = transactionUSD.map((transaction, i) => {
//     console.log(i)
//     return transaction * 60; // В данном случае мы получили новый массив который присвоили к переменной transactionRUB2
// })

// console.log(transactionRUB2)


// Метод filter Метод filter Метод filter Метод filter Метод filter Метод filter Метод filter Метод filter Метод filter Метод filter Метод filter 

// const operations = [100, -20, 7, -50, 50];
// const positiveOperations = []
// const negativeOperations = []

// for (const operation of operations) {
//     if (operation > 0) {
//         positiveOperations.push(operation)
//     }
//     else{negativeOperations.push(operation)}
// }

// console.log(positiveOperations)
// console.log(negativeOperations)

// Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.

// const positiveOperations = operations.filter(operation => {
//     return operation > 0; // Оставляет элементы которые удовлетворяют данному условию, возвращает true

// })

// console.log(positiveOperations)

// const positiveRUBOperations = operations
//     .filter(operation => {
//         return operation > 0
//     })
//     .map(operation => operation * 60)

// console.log(positiveRUBOperations)


/*

Имеется массив изменения цен prices, где внутри
1й элемент массива является ценой в момент Х,
2й - ценой в момент Y 
Нужно преобразовать данные в массив, где будут отображены только положительные изменения цен:[100,150]
 
*/

const prices = [[100, 200], [120, 100], [200, 350]]

const positivePricesTransition = prices
    .map((productPrice) => {
        return productPrice[1] - productPrice[0]
    })
    .filter(productPrice => {
        return productPrice > 0
    })


console.log(positivePricesTransition)

