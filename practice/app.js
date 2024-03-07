// // Операторы равенства

// const secretNum = '7'
// if (Number(secretNum) === 7) {
//     console.log('Угадал строго')
// }

// // Вывод - использовать строгое равно

// if (secretNum == 7) {
//     console.log('Угадал не строго')
// }


// // const q = Number(prompt(`Введите число`));
// if (q === 7) {
//     console.log('Угадал строго')
// }

// SWITCH оператор

const role = 'manager'
switch (role) {
    case 'manager': // role === 'manager'
        console.log('Менеджер')
        break;
    case 'admin': // role === 'admin'
        console.log('Админ')
        break;
    case 'CEO': // role === 'CEO'
        console.log('CEO')
        break;
    default:
        console.log(`Мы тебя не знаем`)
}

switch (role) {
    case 'manager': // role === 'manager'
    case 'admin':
        console.log('Не руководитель')
        break;
    case 'CEO':
        console.log('Руководитель')
        break;
    default:
        console.log(`Мы тебя не знаем`)
}

let num = 1

switch (true) {
    case num > 0: // true === num > 0
        console.log('Положительный');
        break;
    case num < 0:
        console.log('Отрицательный')
        break
    default:
        console.log(`Ноль`)

}
