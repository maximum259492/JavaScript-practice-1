// Condition statements 

// const money = 100;;
// if (money > 50) {
//     console.log('Может купить наш продукт');
// } else if (money > 55) {
//     console.log('Куплен мини-продукт ')

// }
// else {
//     console.log('Не хватает баланса')
// }

/* Вася положил 12000$ на вклад 7$ годовых с капитализацией 1 раз в месяц.
Вывести в консоль, сможет ли он купить дом за 13500$ через 2 года после снятия вклада. И остаток после покупки. 

Итог = сумма * ( 1 + ставка в месяц не в %) ^ срок в месяцах */

const depositUSD = 11900;
const monthlyUSD = 0.07;
const priceUSD = 13500;
const depositTerm = 24

const summ = depositUSD * (1 + monthlyUSD / 12) ** depositTerm;
const remains = summ - priceUSD


if (summ > priceUSD) {
    console.log(`Мы накопили ${summ}$.
Нам достаточно чтобы купить дом за ${priceUSD}$. 
Остаток составляет - ${remains}$`)
} else {

    console.log(`Мы накопили ${summ}$.
Нам недостаточно чтобы купить дом за ${priceUSD}$.`)
}


