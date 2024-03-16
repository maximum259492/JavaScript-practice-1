// const str = 'Vasya Pupkin'
// console.log(str.includes('a'))
// console.log(str.startsWith('V')) // Проверяет начинается ли строка с V
// console.log(str.endsWith('n')) // Проверяет заканчивается ли строка буквой n

// console.log(str.toLowerCase())
// console.log(str.toUpperCase())
// console.log(str.replace('P', 'j')) // Меняет букву P на j (Заменяет только ПЕРВОЕ ВХОЖДЕНИЕ)
// console.log(str.replaceAll('a', 'j')) // Меняет все буквы а на j 
// console.log(str.replace(/a/g, 'j'))

// const str2 = '   Vasya Pupkin    \n'

// console.log(str2.trim()) // выводит всю строку без лишних символов
// console.log(str2.trimEnd()) // Чистит конец но оставляет проблем в начале 
// console.log(str2.trimStart()) // Чистит начало но оставляет проблем в конце 



/* 
    проверить является ли это номером телефона Украины
*/
/* Верные */
const check = 'flkflfksl1'
const num1 = '380997657121'
const num2 = '+380997657121'
const num3 = '+38(099)7657121'
const num4 = '+38(099) 765-71-21'
const num5 = '  +38(099) 765-71-21'


/* не верные */

const num1Error = '380997657'
const num2Error = '+38d099d7657121'
const num3Error = '8+30997657'
const num4Error = '38099g657121'

function isNumber(num) {
    num = num.trim()
    num = num.replaceAll('+', '')
    num = num.replaceAll('(', '')
    num = num.replaceAll(')', '')
    num = num.replaceAll(' ', '')
    num = num.replaceAll('-', '')
    if (!num.startsWith('380')) {
        return false
    }
    if (num.length != 12) {
        return false
    }
    isPhoneNumber = true;
    for (const number of num) {
        if (isNaN(Number(number))) {
            isPhoneNumber = false
            break;
        }
    }

    return isPhoneNumber

}
console.log(isNumber(num1))
console.log(isNumber(num2))
console.log(isNumber(num3))
console.log(isNumber(num4))
console.log(isNumber(num5))
console.log('-----------------------------')
console.log(isNumber(num1Error))
console.log(isNumber(num2Error))
console.log(isNumber(num3Error))
console.log(isNumber(num4Error))