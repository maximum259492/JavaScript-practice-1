// ПАРАМЕТРЫ ПО УМОЛЧАНИЮ ПАРАМЕТРЫ ПО УМОЛЧАНИЮ ПАРАМЕТРЫ ПО УМОЛЧАНИЮ


// function toPower(num = 4, power = 2) {
//     const res = num ** power;
//     return res;
// }

// console.log(toPower(2, 3))
// console.log(toPower(2))
// console.log(toPower())

// Условия в функциях Условия в функциях Условия в функциях Условия в функциях Условия в функциях

// function canAccessWebsite(age) {
//     if (age < 18) {
//         return `Неа`;    // если мы попадаем на RETURN - выполнение функции завершается
//     }
//     return `Да, заходи, пожалуйста`;
// }

// console.log(canAccessWebsite(17))

// const canAccessWebsite2 = age => age < 18 ? `Неа` : `Ага`
// console.log(canAccessWebsite2(17))

// Функции в Функциях Функции в Функциях Функции в Функциях Функции в Функциях Функции в Функциях

// const KG_IN_USD = 7;
// const KM_IN_USD = 5;

// const calculateW = present => present * KG_IN_USD
// const calculateD = distance => distance * KM_IN_USD

// function getExchangePrice(present1, present2, distance) {
//     const price1 = calculateW(present1)
//     const price2 = calculateW(present2)
//     const distancePrice = calculateD(distance)
//     return price1 + price2 + distancePrice
// }
// console.log(getExchangePrice(1, 2, 10))

/* Пользователь: 
    - Возраст 
    - Наличие работы
    - Деньги
    Нужно проверить может ли он купить новый MacBook за 2000$? 
    Он может брать не только свои деньги, но и взять кредит.
    Ему дадут 500$, только если ему больше 24-х лет и он имеет работу, 100$ если ему просто больше 24-х лет и 0 в ином случае.
    Напишите функцию, которая принимает данные пользователя и товара и возвращает true или false; */


const isAbleToTakeCredit = (age, isEmployed = false) => {
    if (age >= 24 && isEmployed === true) {
        return 500;
    } 
    else if (age >= 24) {
        return 100;
    }
        return 0
}

function isAbleToBuy(age, cash, productPrice, isEmployed = false) {
    const credit = isAbleToTakeCredit(age, isEmployed)
    return (cash + credit) >= productPrice ? `Да он в крипте работает` : `Чел, ты... ну не нужен тебе MAC`

}

console.log(isAbleToBuy(25, 1900, 2000, false))

