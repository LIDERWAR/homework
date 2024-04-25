// const users = {
//     alex: {
//         age: 23,
//         isAdmin: false,
//     },
//     john: {
//         age: 30,
//         isAdmin: true,
//         sayHello(name) {
//             console.log(`Hello ${name}`)
//         }
//     }
// }

// console.log(users.alex.age)

// console.log(users.john)
// console.log(users.john.sayHello('Tom'))
// =============================================

const user = {
    name: 'Sergey',
    age: 38,
    profesion: 'Ingener',
    sayHello(name) {
        return `Hello ${name}`;
    }
}

console.log(user)
console.log(user.sayHello('Olga'))

const users = [
    {
        name: 'John',
        age: 34,
        profesion: 'Killer',
        isAdmin: false
    },
    {
        name: 'Sergey',
        age: 38,
        profesion: 'Ingener',
        isAdmin: true
    },
    {
        name: 'Olga',
        age: 42,
        profesion: 'Driver',
        isAdmin: true
    },
    {
        name: 'Manay',
        age: 42,
        profesion: 'Prostitute',
        isAdmin: false
    },
]

let check = 0;

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin == false) {
        check++;
    }
}
console.log(check);

