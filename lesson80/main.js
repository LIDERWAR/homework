
// let i = 0;

// while( i < 10) {
//     i = i + 1
//     console.log(i)
// }

// let a = 0;
// do {
//     a++
//     console.log(a)
// } while (a < 5)

// for (let i = 1; i < 11; i++) {
//     console.log(`Пройден ${i} круг(ов)`)
// }

// // ================================================
console.log('цикл for от 2 до 12')
for (let i = 2; i < 13; i+=2) {
    console.log(`Четные числа: ${i}`)
}

console.log('цикл for от 10 до 1')
for (let a = 10; a >= 1; a--) {
    console.log(`Числа: ${a}`)
}
console.log('цикл while от 2 до 12')
let b = 0 

while ( b<12) {
    b+=2
    console.log(`Четные числа: ${b}`)
}

console.log('цикл do while от 2 до 12')
let i = 0 

do {
    i+=2
    console.log(`Четные числа: ${i}`)
} while(i<12)


console.log('цикл while от 10 до 1')
let c = 11;

while ( c>1) {
    c--
    console.log(`Четные числа: ${c}`)
}

console.log('цикл do while от 10 до 1')
let f = 11 

do {
    f--
    console.log(`Четные числа: ${f}`)
} while(f>1)