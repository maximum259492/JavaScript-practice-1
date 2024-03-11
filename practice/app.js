// ЗНАКОМСТВО С МАССИВАМИ ЗНАКОМСТВО С МАССИВАМИ

// const role1 = 'admin';
// const role2 = 'user';
// const role3 = 'superUser';

// const roles = ['admin', 'user', 'superUser'];
// const userInfo = ['anya', 25];
// console.log(roles); // выводит все элементы массива
// console.log(roles[2]); // Выводит 3-ий элемент массива
// console.log(roles.length); // Выводит длину массива(3)
// console.log(roles[roles.length - 1]); // Выводит последний элемент массива
// console.log(roles.at(-1)); // Выводит последний элемент(гораздо проще и занимает меньше места)

// const usersAge = [2040 - 2022, 10 > 15 ? 5 : 0]
// console.log(usersAge)

// const userNames = new Array('vasya', 'petya', 'katya')
// console.log(userNames)

// function square(el) {
//     return el * el
// }

// console.log(square(usersAge[0]));


// УПРАВЛЕНИЕ ЭЛЕМЕНТАМИ МАССИВА УПРАВЛЕНИЕ ЭЛЕМЕНТАМИ МАССИВА УПРАВЛЕНИЕ ЭЛЕМЕНТАМИ МАССИВА

// const users = ['anya', 'vika', 'katya'];
// console.log(users)
// users[2] = 'kristina'
// console.log(users)

// const arrLength = users.push('Alex') // push добавляет в конец массива новый элемент и Возвращает Длина массива
// console.log(arrLength)

// users.unshift('kolya') // unshift добавляет в начало массива новый элемент
// console.log(users)

// const el = users.pop() // pop удаляет последний элемент массива и возвращает значение удаленного элемента
// console.log(el)
// console.log(users)

// const el2 = users.shift() // shift удаляет первый элемент и возвращает значение удаленного элемента
// console.log(el2)
// console.log(users)


// ПОИСК ЭЛЕМЕНТА В МАССИВЕ ПОИСК ЭЛЕМЕНТА В МАССИВЕ  ПОИСК ЭЛЕМЕНТА В МАССИВЕ

// const roles = ['user', 'admin', 'manager']


// const elIndex = roles.indexOf('admin') // indexOf проверяет какой индекс у указанного элемента
// console.log(elIndex);
// const elIndex2 = roles.indexOf('superUser')
// console.log(elIndex2);


// if (roles.indexOf('admin') >= 0) {
//     console.log('Access')
// } else {
//     console.log('Error')
// }


// console.log(roles.includes('admin')) // includes возвращает true/false в зависимости от наличия указанного элемента.
// console.log(roles.includes('superUser'))

// if (roles.includes('admin')) {
//     console.log('Access')
// }

// МЕТОДЫ SLICE, SPLICE, CONCAT, REVERSE МЕТОДЫ SLICE, SPLICE, CONCAT, REVERSE

// SLICE SLICE SLICE SLICE SLICE SLICE SLICE SLICE SLICE 
// const roles = ['user', 'admin', 'maganer', 'superUser']
// console.log(roles)
// const res = roles.slice(2); // slice берет элемент с index(2) и до конца ОТРЕЗАЕТ КУСОК и присвоил как результат выполнения(НЕ МОДИФИЦИРУЕТ ИСХОДНЫЙ МАССИВ)

// console.log(res)

// const res2 = roles.slice(0, 2) // slice берет элемент с index до index(предел не включается) и ОТРЕЗАЕТ КУСОК и присваивается вырезанный массив как результат выполнения(НЕ МОДИФИЦИРУЕТ ИСХОДНЫЙ МАССИВ)
// console.log(res2)

// const res3 = roles.slice(-1) // slice берет последний элемент массива
// // возвращает само значение последнего элемента
// console.log(res3)

// const res4 = roles.slice(1, -1)
// console.log(res4)

// SPLICE SPLICE SPLICE SPLICE SPLICE SPLICE SPLICE SPLICE  SPLICE SPLICE SPLICE SPLICE SPLICE SPLICE SPLICE SPLICE

// console.log(roles)

// const res5 = roles.splice(2) // splice возвращает измененные элементы и МОДИФИЦИРУЕТ исходный массив
// console.log(res5)
// console.log(roles)

// const res6 = roles.splice(2, 1) // Берем с index и кол-во элементов которые нужно взять
// console.log(res6)
// console.log(roles)

// const res7 = roles.splice(-1) // Удаляем последний элемент из нашего массива
// console.log(res7)
// console.log(roles)


// REVERSE REVERSE REVERSE REVERSE REVERSE REVERSE REVERSE  REVERSE REVERSE REVERSE REVERSE REVERSE REVERSE REVERSE REVERSE REVERSE REVERSE

// const res8 = roles.reverse(); // Отзеркаливает порядок элементов и МОДИФИЦИРУЕТ исходный массив
// console.log(res8)
// console.log(roles)

// CONCAT CONCAT CONCAT CONCAT CONCAT CONCAT CONCAT CONCAT CONCAT CONCAT CONCAT CONCAT CONCAT CONCAT CONCAT CONCAT CONCAT CONCAT CONCAT CONCAT

// const newRoles = ['sysadmin', 'deleloper']
// const res9 = roles.concat(newRoles) // Соединяет 2 массива(КОНКОТЕНАЦИЯ)
// console.log(res9)
// console.log(res9.length)


// ИЗ СТРОКИ В МАССИВ И ОБРАТНО  ИЗ СТРОКИ В МАССИВ И ОБРАТНО  ИЗ СТРОКИ В МАССИВ И ОБРАТНО  ИЗ СТРОКИ В МАССИВ И ОБРАТНО  ИЗ СТРОКИ В МАССИВ И ОБРАТНО 

// const roles = ['user', 'admin', 'maganer', 'superUser'];

// const url = 'auth/user/login';
// const res = url.split('/') // Преобразовывает Массив из Строки(разбивает по '/')
// console.log(res)

// console.log(roles.join('-'))

/* Дан список задач 
const tasks = ['Задача 1'];
Сделать функции:
    - Добавление задачи в конец 
    - Удаление задачи по названию
    - Перенос задачи в начало списка по названию
    Всегда меняем исходный массив. */

const tasks = ['Задача 1'];
// Функция добавления задачи в конец Массива
const addTask = (array, task) => {
    array.push(task)
    return array
}
// Функция удаления задачи по названию
const removeTask = (array, task) => {
    if (array.includes(task)) {
        let index = array.indexOf(task)
        return array.splice(index, 1)
    }
    return 0
}
const primaryTask = (array, task) => {
    if (!removeTask(array, task)) {
        return;
    }
    array.unshift(task)
    return array
}


addTask(tasks, 'Задача 2')
addTask(tasks, 'Задача 4')
console.log(tasks)

console.log(removeTask(tasks, 'Задача 2'))
console.log(tasks)

primaryTask(tasks, 'Задача 4')
console.log(tasks)


// DRY ("DO NOT REPEAT YOURSELF")




