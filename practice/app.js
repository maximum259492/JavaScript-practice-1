const bmwX3 = 100000;
const budget = 20000;
const fordFocus = 10000;
let message = budget > bmwX3 ? ` Беху` : budget > fordFocus ? `Ford` : `Велосипед`

console.log(`Я хочу купить ${message}`)


/* Методом prompt получите ответ пользователя на вопрос "Сколько будет 7 + или - 15". Если ответ верен выведите в консоль "Успех", если нет - "Вы робот!", а если он введет "Я не робот", то тоже "Успех" */

let answer = prompt(`Сколько будет 7 + или - 15`)

switch (true) {
    case Number(answer) === 22:
    case Number(answer) === -8:
    case answer === 'Я не робот':
        console.log('Успех!', typeof answer)
        break;
    default:
        console.log('Вы робот!')
}




