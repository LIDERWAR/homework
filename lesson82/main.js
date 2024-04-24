// function sumNumber (firstNumber, secondNumber) {
//     return firstNumber + secondNumber;
// }

// const result = sumNumber(3, 10);

// console.log(result);

// const user = ['John', 'Ann', 'Alex', 'Max']

// const checkForCopuItem = (array, item) => {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === item) {
//             return `There is a copy of the ${item} in array`
//         }
//     }
//     return 'There is no such item in the array'
// }

// console.log(checkForCopuItem(user, 'Daddi'))

// =======================================================

const helloName = (name) => {
    return `Hello ${name}!`
}

console.log(helloName('Sergey'))
console.log(helloName('Olga'))

const number = [1, 3, 59, 35, 23, 44, 100, 1001]

const checkNumber = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 10) {
            console.log (array[i])
        }
    }
}

checkNumber(number);

const calc = (firstNumber, secondNumber, action)  => {
    switch(action) {
        case '-':
            return firstNumber - secondNumber
            break;
        case '+':
            return firstNumber + secondNumber
            break;
        case '/':
            return firstNumber / secondNumber
            break;
        case '*':
            return firstNumber * secondNumber
            break;
        default:
            return `Мы умеем только складывать, вычитать, делить и умножать`
    }
}

console.log(calc (5, 4, '-'))
console.log(calc (5, 4, '+'))
console.log(calc (5, 4, '/'))
console.log(calc (5, 4, '*'))
console.log(calc (5, 4, '1'))
