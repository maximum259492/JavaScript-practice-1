'use strict';

// let firstName = 'Anton';
// let firstName2 = firstName
// firstName = 'New'
// console.log(firstName)
// console.log(firstName2)

// const user1 = {
//     name: 'Anton'
// }

// const user2 = user1
// user1.name = 'New'
// console.log(user1)
// console.log(user2)

const user = {
    name: 'Anton',
    id: 1,
    roles: ['Admin']
}
// 1-ый СПОСОБ
// const newUser = Object.assign({}, user) // Создает(НЕ ССЫЛАЕТСЯ) новый обьект со свойствами user
// user.name = 'newUser'
// console.log(user)
// console.log(newUser)

// 2-ой СПОСОБ
const newUser2 = {
    ...user
} // Копирует все свойства с обьекта user в newUser2 (НЕ ССЫЛАЕТСЯ)
newUser2.name = 'newUser'
newUser2.roles.push('User')
console.log(user)
console.log(newUser2)