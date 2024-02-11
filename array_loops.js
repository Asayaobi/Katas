// map

// You are provided with a function that takes an array of numbers and returns a new array with each number doubled.
// However, this function currently uses a for loop.
// Your task is to refactor this function to use the map() method instead.
// function doubleNumbers(arr) {
//     const doubled = [];
//     for (let i = 0; i < arr.length; i++) {
//         doubled.push(arr[i] * 2);
//     }
//     return doubled;
// }
// console.log(doubleNumbers([1,2,3,4]));

let numbers = [1,2,3,4]
const doubleNumbers = numbers.map(number => number * 2)
console.log(doubleNumbers);

// Create a JavaScript function named convertToFahrenheit.
// This function will take an array of temperatures in Celsius and return a new array with these temperatures converted to Fahrenheit.
// The conversion formula to use is Fahrenheit = Celsius * 9 / 5 + 32.
let temperaturesC = [15,40,12,5]
const temperaturesF = temperaturesC.map(temp => temp * 9 / 5 + 32)
console.log(temperaturesF);

// You are provided with a function that is intended to take an array of numbers and return a new array with each number squared.
// However, there's an error in how the map() method is currently being used.
// Your task is to identify the error and correct the code.
function squareNumbers(numbers) {
    return numbers.map(number => {
        return number * number
    })
}
console.log(squareNumbers([1,2,3,4]));

// filter
const numbersA = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbersA.filter(number => number % 2 === 0)
console.log(evenNumbers);


const products = [
    { name: 'Apple', category: 'fruit' },
    { name: 'Carrot', category: 'vegetable' },
    { name: 'Banana', category: 'fruit' }
 ]
//  const fruits = []
//  for (i = 0; i < products.length ; i++) {
//     if (products[i].category === 'fruit') {
//         fruits.push(products[i].name)
//     }
//  }
//  console.log(fruits);
const fruits = products.filter(product => product.category === 'fruit')
console.log(fruits);

const values = [null, 'hello', undefined, 'world', false];
const truthyValues = values.filter(word => Boolean(word))
// const truthyValues = []
// for (let word of values) {
//     if (word){
//         truthyValues.push(word)
//     }
// }
console.log(truthyValues);

// Create a JavaScript function named filterAndSquareEvens. This function should take an array of numbers as its input. It should first filter out all odd numbers, and then square each of the remaining even numbers. The function should return a new array with these squared even numbers.
let allnumbers = [1,2,3,4,5,6]

const filterEven = allnumbers.filter(n => n % 2 === 0)
const filterAndSquareEvens = filterEven.map(even => even * even)
console.log(filterAndSquareEvens);