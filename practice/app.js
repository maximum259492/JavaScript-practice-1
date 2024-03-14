// Базовые методы 

// const userName = 'Vasya Pupkin'
// console.log(userName)
// Метод charAt() возвращает указанный символ из строки.
// console.log(userName.charAt(0)) // вывод V 


// console.log(userName.length)

// console.log(userName.indexOf('a')) // Выводит индекс первого вхождения элемента
// console.log(userName.lastIndexOf('a')) // Выводит индекс последнего вхождения элемента
// console.log(userName.includes('Vasya')) // Проверяет есть ли элемент в массиве
// console.log(userName.slice(5, 9)) // Вырезает фрагмент строки 

/* Вытащи имя и фамилию в отдельные переменные */

const fullUserName = 'Вася aka Terminator Пупкин'
const userName = fullUserName.slice(0, fullUserName.indexOf(' '))
console.log(userName)
console.log(fullUserName.indexOf('П'))
const userSurname = fullUserName.slice(
    fullUserName.lastIndexOf(' ') + 1,
    fullUserName.length 
)
console.log(userSurname)
