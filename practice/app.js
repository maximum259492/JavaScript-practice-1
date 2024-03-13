// Метод Flat/FlatMap Метод Flat/FlatMap Метод Flat/FlatMap Метод Flat/FlatMap Метод Flat/FlatMap Метод Flat/FlatMap Метод Flat/FlatMap Метод Flat/FlatMap 

const prices = [[2, 4], [3, 4], [10, 20]]



// Метод flat() возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth.

const res = prices.flat();

// Метод flatMap() позволяет сформировать массив, применяя функцию к каждому элементу, затем уменьшает вложенность, делая этот массив плоским, и возвращает его. 
const res2 = prices.flatMap((el, index) => el[1]);
console.log(res)
console.log(res2)

// Метод Sort Метод Sort Метод Sort Метод Sort Метод Sort Метод Sort Метод Sort Метод Sort Метод Sort Метод Sort Метод Sort Метод Sort Метод Sort Метод Sort 

const users = ['Vasya', 'Masha', 'Katya', 'Anya']
console.log(users)

// Метод sort() на месте сортирует элементы массива и возвращает отсортированный массив.
users.sort();
console.log(users)

const operations = [100, -300, 0, -100, 50, 480]
console.log(operations)

// return < 0 - a, b - сохраняем порядок
// return  > 0 - b, a - меняем порядок      
operations.sort((a, b) => {
    if (a > b) {
        return -1
    }
    if (a < b) {
        return 1
    }
});
console.log(operations)

operations.sort((a, b) => a - b);
console.log(operations)
