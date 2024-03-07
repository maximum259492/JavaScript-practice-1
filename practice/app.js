const projectName = "Сайт магазина";
const price = 2000;
const author = "Василий Пупкин";

const template = author + " заказал " + projectName + " по цене " + price + "грн";
console.log(template);


const template2 = `${author} заказал ${projectName} по цене ${price}грн `
console.log(template2);

const template3 = 'Проект \n' + 'цена:' + price + '$';
console.log(template3);

const template4 = `Проект;
цена: ${price}$`;
console.log(template4);



// Преобразование типов

const age = '18';
console.log(Number(age) + 5);
console.log(age - 3);
const userName = 'vasya';
console.log(Number(userName) * 2);
console.log(typeof NaN);
console.log(String(4) + 7);
console.log(Boolean('') + 10);
console.log(true + 2);

const a = 2 + '10'; // 210
console.log(a - 10) // 200


// Boolean

console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(Number('sx')))
console.log(Boolean(NaN))

