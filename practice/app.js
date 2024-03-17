// Итерирование по Обьектам Итерирование по Обьектам Итерирование по Обьектам Итерирование по Обьектам Итерирование по Обьектам Итерирование по Обьектам


// const cities = {
//     msk: {
//         lt: 200,
//         temp: 25
//     },
//     spb: {
//         temp: 20,
//         lt: 100
//     }
// }


// for (const a in b)  Позволяе проходиться по ключам Обьекта


// let sumTemp = 0;
// console.log(Object.keys(cities)) // Создает массив из ключей Обьекта
// let citiesCount = Object.keys(cities).length;
// for (const key in cities) { // 1-ый вариант ИТЕРАЦИИ
//     sumTemp += cities[key].temp
// }
// console.log(sumTemp / citiesCount)


// for (const key of Object.keys(cities)) { // 2-ой вариант ИТЕРАЦИИ
//     console.log(key)
//     sumTemp += cities[key].temp
// }

// console.log(sumTemp / citiesCount)


// Деструктуризация и REST в ОБЪЕКТАХ Деструктуризация и REST в ОБЪЕКТАХ Деструктуризация и REST в ОБЪЕКТАХ Деструктуризация и REST в ОБЪЕКТАХ

// const arr = [1, 3, 4];
// const [z, y, x] = arr
// console.log(z, y, x)


// const user = {
//     name: 'Vasya',
//     age: 40,
//     city: 'Moscow'
// }

// const { age, ...userWithoutAge } = user // Присваивает значение указанного ключа переменной, а ...(REST)? содержит остальные ключи обьекта
// console.log(userWithoutAge)
// console.log(age)

// const additionalData = {
//     skills: ['Разработка', 'Дизайн'],
//     creditCard: '2224-5454-1112-5552'
// }

// user.test = 'sddas'

// user.skills = additionalData.skills // Добавляет в User ключ skills из additionalData
// user.creditCard = additionalData.creditCard // Добавляет в User ключ creditCard из additionalData


// SPREAD оператор

// Добавляет в обьект все ключи как user, так и additionalData
// user = {
//     ...user,
//     ...additionalData
// }

// console.log(user)



// OPTIONAL CHAINING OPTIONAL CHAINING OPTIONAL CHAINING OPTIONAL CHAINING OPTIONAL CHAINING OPTIONAL CHAINING OPTIONAL CHAINING OPTIONAL CHAINING

// const cities = {
//     msk: {
//         temp: {
//             celcius: 25

//         }
//     },
//     spb: {

//     }
// }

// const city = 'spb'
// if (cities[city] && cities[city].temp) {
//     console.log(cities[city].temp.celcius)
// }

// console.log(cities[city]?.temp?.celcius) // (OPTIONAL CHAINING) Проверяет есть ли в обьекте Ключ с определенным названием и возвращает либо ЗНАЧЕНИЕ либо UNDEFINED

/*
    Сделать обьект склад с методами добавления на склад, поиска по id товара и расчет веса
 */

const warehouse = {
    goods: [],
    findGoodById: function (id) {
        return this.goods.find(g => g.id === id)
    },
    addGood: function (good) {
        let existedGood = this.findGoodById(good.id)
        if (existedGood) {
            console.log('Этот товар уже есть на складе')
            return;
        }
        this.goods.push(good)
        return this.goods
    },
    getWeightKG: function () {
        return this.goods.reduce((acc, el) => acc += el?.weight?.kg ? el.weight.kg : 0, 0)
    }
}
/* Товары */
const car = {
    id: 1,
    weight: {
        kg: 1000
    },
    brand: 'Ford'
}
const chair = {
    id: 2,
    weight: {
        kg: 2
    },
}
const paper = {
    id: 3,
    color: 'red'
}
warehouse.addGood(car)
warehouse.addGood(chair)
warehouse.addGood(paper)
console.log(warehouse.goods)

let findedItem = warehouse.findGoodById(3)
console.log(findedItem)
const w = warehouse.getWeightKG()
console.log(w)

