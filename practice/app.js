
// const user = {
//     name: 'Vasya',
//     surname: 'Pupkin',
//     age: 24,
//     skills: [
//         'Программирование',
//         'Готовка'],
//     eduBasic: 'Школа 10',
//     eduPro: 'МФТИ'
// }
// console.log(user.city)
// console.log(user.skills);
// const level = 'Pro'
// console.log(user['edu' + level])
// // Если мы хотим к нерасчетному свойству используем .
// // Если свойство расчетное(получаем извне),


// // const res = prompt('Введие свойство')

// user['city'] = 'Kiev'
// user.city = 'Kive'
// console.log(user.city)

// user.age = 30;
// user['age'] = 30
// console.log(user)

/* отсортировать пользователей по возрасту */
// const users = [
//     { name: 'Vasya', age: 30 },
//     { name: 'Katya', age: 18 },
//     { name: 'Anya', age: 40 },
//     { name: 'Petya', age: 25 }
// ]


// const sorted = users.sort(((a, b) => {
//     return a.age - b.age
// }))

// console.log(sorted)

/* Преобразовать пользователей до вида
   {fullName: 'Вася Пупкин', skillnum: 2}
*/

// const users = [
//     {
//         name: 'Вася',
//         surname: 'Пупкин',
//         age: 30,
//         skills: ['Разработка', 'DevOps']
//     },
//     {
//         name: 'Катя',
//         surname: 'Белова',
//         age: 18,
//         skills: ['Дизайн']

//     }

// ]

// const newUsers = users.map(user => {
//     return {
//         fullName: `${user.name} ${user.surname}`,
//         skillnum: user.skills.length
//     }
// })
// console.log(newUsers)

// Методы Обьектов Методы Обьектов Методы Обьектов Методы Обьектов Методы Обьектов Методы Обьектов Методы Обьектов Методы Обьектов Методы Обьектов 

// const user = {
//     name: 'Vasya',
//     surname: 'Pupkin',
//     age: 24,
//     getFullName: function () {
//         console.log(this)
//         return this.name + ' ' + this.surname
//     }
// }
// console.log(user.getFullName())

/*
    Реализовать методы увеличения и уменьшения баланса,
    при котором каждая операция сохраняется в массив 
    operations в виде {reason: 'Оплата налогов', sum: -100}. Возвращается true, если успешно и false, если не хватает баланса.
    Так же реализовать метод вывода числа операций по кошельку
*/

const wallet = {
    balance: 600,
    operations: [],
    increasedBalance: function (reason, summ) {
        this.balance += summ
        this.operations.push({
            reason: reason,
            summ: +summ
        })
        console.log(`УСПЕХ! Текущий баланс: ${this.balance}`)
        return true
    },
    decreasedBalance: function (reason, summ) {
        if (this.balance <= summ) {
            console.log(`Недостаточно денег на балансе: ${this.balance}`)
            return false
        } else {
            this.balance -= summ
            this.operations.push({
                reason: reason,
                summ: -summ
            })
            console.log(`УСПЕХ! Текущий баланс: ${this.balance}`)
            return true
        }

    },
    operationCounter: function () {
        return `Число операций: ${this.operations.length}`
    }

}
wallet.increasedBalance('Заработок', 500)

wallet.decreasedBalance('Налог', 1000)


console.log(wallet.operationCounter())
console.log(wallet.operations)







