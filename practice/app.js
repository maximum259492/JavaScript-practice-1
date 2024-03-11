// ДЕСТРУКТУРИЗАЦИЯ ДЕСТРУКТУРИЗАЦИЯ ДЕСТРУКТУРИЗАЦИЯ ДЕСТРУКТУРИЗАЦИЯ ДЕСТРУКТУРИЗАЦИЯ ДЕСТРУКТУРИЗАЦИЯ ДЕСТРУКТУРИЗАЦИЯ ДЕСТРУКТУРИЗАЦИЯ ДЕСТРУКТУРИЗАЦИЯ 

// const userData = ['Anton', 18, 'Moscow']

// function getData() {
//     return ['Anton', 18, 'Moscow']
// }


// const userName = getData()[0];
// const age = userData[1];
// const city = userData[2];


// const [userName, _, city] = userData // => Деструктуризация, присваивает каждой переменной, каждый элемент масства выведенный функцией getData соответсвенно  

// console.log(userName, city)

// REST OPERATOR REST OPERATOR REST OPERATOR REST OPERATOR REST OPERATOR REST OPERATOR REST OPERATOR REST OPERATOR REST OPERATOR REST OPERATOR REST OPERATOR 

// const data = [1, 2, 3, 4, 5, 6,];
// const [one, two, ...others,] = data // ...others => REST OPERATOR, кладет в others остальные элементы массива(ИСПОЛЬЗУЕТСЯ В КОНЦЕ)
// console.log(one, two, others) // one = 1, two = 2, others =[3,4,5,6]


/*
    Дан произвольный url - 
    'https://purpleschool.ru/course/javascript'
    Нужно сделать функцию, которая выводит в консоль:
    - Протокол (https)
    - Доменное имя(purpleschool.ru)
    - Путь внутри сайта (/course/javascript)
 */

const url = 'https://purpleschool.ru/course/javascript'
const url2 = 'ldoceonline.com/dictionary/vise'
function outPut(url) {
    console.log(url.split('/'))
    const [protocol, _, domen, ...pathInside] = url.split('/')
    if (protocol === 'https:' || protocol === 'http:') {
        if (domen.includes('.')) {
            console.log(`Протокол: ${protocol.split(':')[0]}`)
            console.log(`Доменное имя: ${domen}`)
            console.log(`Путь внутри сайта: /${pathInside.join('/')}`)
        }
    }

}

outPut(url)