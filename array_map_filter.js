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


// To Fahrenheit
// Create a JavaScript function named convertToFahrenheit.
// This function will take an array of temperatures in Celsius and return a new array with these temperatures converted to Fahrenheit.
// The conversion formula to use is Fahrenheit = Celsius * 9 / 5 + 32.
// Use the map method.
const convertToFahrenheit = temp => temp.map(t => t * 9 / 5 +32)
console.log(convertToFahrenheit([15,40,12,5]))
console.log(convertToFahrenheit([42,0,-10]))

// Square Numbers Bug
// You are provided with a function that is intended to take an array of numbers and return a new array with each number squared.
// However, there's an error in how the map() method is currently being used.
// Your task is to identify the error and correct the code.
// function squareNumbers(numbers) {
//     numbers.map(number => {
//         return number * number
//     })
// }
const squareNumbers = numbers => numbers.map(n => n ** 2)
console.log(squareNumbers([1,2,3,4]))
console.log(squareNumbers([9,0]))

/////////////////////////////////////

// 2. filter()
// Traditionally, filtering an array involved using a for loop and a conditional statement.
// Example Without filter():
const numbers = [1, 2, 3, 4, 5, 6];
// const evenNumbers = numbers => {
//     let output = []
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             output.push(numbers[i])
//         }
//     }
//     return output
// }

//Example With filter():
const evenNumbers = numbers.filter(n => n % 2 === 0)
console.log(evenNumbers)
// Filter does not modifiy the original array, instead, it returns a new array.
console.log(numbers)

console.log([1,2,3,4].filter(i => i > 2))
//Remember that filter() yields an array, so, within a function you must "return the output" of filter(); 
//the return within the filter() method only returns each element of the array
const scores = [80,40,70,65,79,20]
function findLowScores(scores) {
   return scores.filter(score => {
        return score < 50
    })
}
// const findLowScores = scores.filter(score => score < 50)
console.log(findLowScores(scores))

// Filtering Objects in an Array:
// Select objects based on a specific property value.
const products = [
   { name: 'Apple', category: 'fruit' },
   { name: 'Carrot', category: 'vegetable' },
   { name: 'Banana', category: 'fruit' }
]
// function findFruits(product) {
//     let fruits = []
//     for (let i = 0; i < products.length; i++) {
//         if (products[i].category === 'fruit') {
//             fruits.push(products[i].name)
//         }
//     }
//     return fruits
// }
//with filter
const fruits = products.filter(p => p.category === 'fruit')
console.log(fruits)