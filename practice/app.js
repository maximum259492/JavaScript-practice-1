// const userFullName = 'Vasya Pupkin Vasilevich'
// console.log(userFullName.split(' ')) // Создает из строки Массив с определенным разделителем
// const [firstName, surName, lastName] = userFullName.split(' ')
// console.log(firstName)
// console.log(surName)
// console.log(lastName)

// const arr = ['Ты', 'знаешь', 'JS']
// console.log(arr.join(' ')) // Создает из массива Строку с определенным разделителем


// const film = 'Звёздные войны'
// console.log(film.padStart(50, '*')) // добавляет в начало к строке 50 - film.length пробелы, или указанный символ 
// console.log(film.padEnd(50, '*')) // обавляет в конец строки 50 - film.length пробелы, или указанный символ 
// console.log(film.repeat(50, ' ')) // Повторяет указанное колво раз строку, и делит ее указаным разделителем

/* Замаскировать все, кроме последник 4х символов */
const card = '2342834503458353'

console.log(card)
console.log(card.length)

console.log(card.slice(-4).padStart(16, '*'))





