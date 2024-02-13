// Examples of map()

const numbers = [1, 2, 3, 4, 5]
// const doubledNumbers = []
const doubledNumbers = numbers.map( number => number * 2)
// for (let i = 0; i < numbers.length; i++) {
//     doubledNumbers.push(numbers[i] * 2)
// }

console.log(doubledNumbers)

const names = ['Alice', 'Bob', 'Charlie']
// const uppercasedNames = []
// for (let i = 0; i < names.length ; i++){
//     uppercasedNames.push(names[i].toUpperCase())
// }
const uppercasedNames = names.map( name => name.toUpperCase())
console.log(uppercasedNames)

// Extract a specific property from an array of objects.
const users = [{name: 'Alice', age: 30}, {name: 'Bob', age: 25}]
// const userNames = []

// for (let i = 0 ; i < users.length ; i++) {
//     userNames.push(users[i])
// }
// for (let user of users) {
//     userNames.push(user.name)
// }
const userNames = users.map(user => user.name)
console.log(userNames);

// Applying a mathematical function to each element in a number array.
const numbersA = [1, 2, 3, 4]
// const squares = []
// for (let i = 0 ; i < numbersA.length ; i++) {
//     squares.push(numbersA[i] ** 2)
// }
// console.log(squares);

const squares = numbersA.map(number => number ** 2)
console.log(squares);