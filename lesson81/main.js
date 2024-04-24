// const numbers = [1, 2, 3, 4, 5]

// // console.log(numbers)
// // console.log(numbers[0])

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i] + 1)
// }

// =====================================================

const numbers = [1, 2, 3, 4, 5, 5, 8, 10]
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        console.log(numbers[i])
    }
}

const color = ['красный','оранжевый', 'желтый', 'зеленый', 'голубой', 'синий', 'фиолетовый']
for (let a = color.length; a >= 0; a--) {
    console.log(color[a])
}
