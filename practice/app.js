// Цикл FOR Цикл FOR Цикл FOR Цикл FOR Цикл FOR Цикл FOR Цикл FOR Цикл FOR Цикл FOR Цикл FOR Цикл FOR Цикл FOR Цикл FOR Цикл FOR Цикл FOR Цикл FOR Цикл FOR 



// for (let i = 1; i < 10; i++) {

//     console.log(`Наш баланс ${i}$`)
// }


// BREAK и CONTINUE BREAK и CONTINUE BREAK и CONTINUE BREAK и CONTINUE BREAK и CONTINUE BREAK и CONTINUE BREAK и CONTINUE BREAK и CONTINUE BREAK и CONTINUE 

// const tasks = ['Задача 1', 'Задача 2', 'Задача 3']

// for (let i = 0; i < tasks.length; i++) {
//     if (tasks[i] === 'Задача 1') {
//         continue; // Continue прерывает выполнение текущей итерации текущего или отмеченного цикла, и продолжает его выполнение на следующей итерации. => 'Задача 2' skipped
//     }
//     console.log(tasks[i])
// }

// console.log('----')

// for (let i = 0; i < tasks.length; i++) {
//     if (tasks[i] === 'Задача 2') {
//         break; // Break прерывает выполнение всего цикла 
//     }
//     console.log(tasks[i])
// }

/*
    Задача вывести в консоль строку "Я люблю JS !" из массива,
    проходя циклом в обратном порядке, не используя метод reverse.
    const arr = ['!', 'JS', '  люблю', 'Я' ]
 */
const arr = ['!', 'JS', 'люблю', 'Я'];
const sentence = []
for (let i = arr.length - 1; i >= 0; i--) {


    let word = arr[i]
    sentence.push(word)
    

}
console.log(sentence.join(' '))
