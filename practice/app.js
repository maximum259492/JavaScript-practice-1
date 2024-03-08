// const isAdmin = true;
// const canWrite = true;

// console.log(`Системный файл ${isAdmin && canWrite}`)
// console.log(`Обычный файл ${isAdmin || canWrite}`)
// console.log(`Инвертируем права админа ${!isAdmin}`)


// const isEdited = true;
// const isSuperAdmin = true;

//     console.log(`Файл с редактированием ${isAdmin && canWrite && !isEdited} `)

// console.log(`Файл с редактированием ${isAdmin && canWrite && (!isEdited || isSuperAdmin)} `)

// let a = 7 
// if(a === -8 || a === 22){

// }



// console.log('Vasya' || 'Oleg') // Vasya
// console.log(false || 'Oleg') // Oleg
// console.log('Vasya' || false) //Vasya

// console.log('Vasya' && 'Oleg') //Oleg


// let a = 'Марина'
// const userName = a || `Петя`
// console.log(userName)


// const isAdmin = true;
// const fileName = isAdmin && `file.mp4`
// console.log(fileName)

// Оператор нулевого слияния 

// let userName = "";
// console.log(userName || `Default userName`)
// console.log(userName ?? `Default userName`)


/* Пользователь хочет приобрести игру в магазине
Он может это сделать только если:
 - Его баланс больше 1000(balance) или число бонусов больше 100(bonusBalance)
 - Он не забанен(isBanned) 
 - Игра не куплена(isExist) 
 - Игра в продаже(isSelling)
Напишите условие для покупки и выведите в консоль результат */

let balance = prompt('Ваш баланс:');
let bonusBalance = prompt('Ваш бонус-баланс:');
let isBanned = false;
let isBought = false;
let isSelling = true;


let canBuy = (balance >= 1000 || bonusBalance >= 100) && !isBanned && !isBought && isSelling
console.log(`Могу ли я купить игру: ${canBuy === true ? `да` : `нет`}`)