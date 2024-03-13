const arr = [1, 2, 3, 4, 5];

console.log(new Array(1, 2, 3, 4, 5))
const arr2 = new Array(5) // Создаем пустой массив с размером 5 
console.log(arr2)
console.log(arr2.map(el => 1))

arr2.fill(1, 0, 3) // Заполняем массив единицей с позиции 0 до 3
arr2.fill(2, 3, 5) // Заполняем массив двойкой с позиции 3 до 5
console.log(arr2)


const arr3 = Array.from({ length: 5 }, (cur, i) => i + 1) // создает массив с элементами от 1 до 5
console.log(arr3)