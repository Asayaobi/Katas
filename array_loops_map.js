// 1. map()
//  transform each element of an array, you might use a for loop.
// Example Without map():
// const numbers = [1, 2, 3, 4, 5]
const doubledNumbers = numbers => {
    let result = []
    for (let i = 0; i < numbers.length; i++) {
        result.push(numbers[i] * 2) 
    }
    return result
}
console.log(doubledNumbers([1, 2, 3, 4, 5]))

// Using map()
// Examples of map()
const doubledNumbersMap = numbers => numbers.map( n => n * 2)
console.log(doubledNumbersMap([1, 2, 3, 4, 5]))


const names = ['Alice', 'Bob', 'Charlie']
// const uppercasedNames = names => {
//     let output = []
//     for (let n of names) {
//         output.push(n.toUpperCase())
//     }
//     return output
// }
const uppercasedNames = names => names.map(n => n.toUpperCase())
console.log(uppercasedNames(names))

// Extract a specific property from an array of objects. eg. array of only user's names.
const users = [{name: 'Alice', age: 30}, {name: 'Bob', age: 25}]
// const getName = users => {
//     let names = []
//     for (let i = 0; i < users.length; i++) {
//         names[i] = users[i].name
//     }
//     return names
// }
const getName = users => users.map(user => user.name)
console.log(getName(users))


// Applying a mathematical function to each element in a number array.
const numbersA = [1, 2, 3, 4]
// const squares = numbersA => {
//     let output = []
//     for (let i = 0; i < numbersA.length; i++) {
//         output.push(numbersA[i] ** 2 )
//     }
//     return output
// }
const squares = numbersA => numbersA.map(n => n ** 2)
console.log(squares(numbersA));

// Refactoring Map
// You are provided with a function that takes an array of numbers and returns a new array with each number doubled.
// However, this function currently uses a for loop.
// Your task is to refactor this function to use the map() method instead.
const doubledNumbers1 = numbers => numbers.map(n => n * 2)
console.log(doubledNumbers1([1, 2, 3, 4]))
console.log(doubledNumbers1([10, 10, 10]))
console.log(doubledNumbers1([0, 100]))
console.log(doubledNumbers1([]))


