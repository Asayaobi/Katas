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

function doubleNumbers(arr) {
    const double = arr.map(num => num * 2)
    return double
}
console.log(doubleNumbers([1,2,3,4]));
console.log(doubleNumbers([10,10,10]));
console.log(doubleNumbers([0,100]));
console.log(doubleNumbers([]));


// Create a JavaScript function named convertToFahrenheit.
// This function will take an array of temperatures in Celsius and return a new array with these temperatures converted to Fahrenheit.
// The conversion formula to use is Fahrenheit = Celsius * 9 / 5 + 32.

function convertToFahrenheit(temperaturesC) {
    const temperaturesF = temperaturesC.map(t => t * 9 / 5 + 32)
    return temperaturesF
}

console.log(convertToFahrenheit([15,40,12,5]));
console.log(convertToFahrenheit([42,0,-10]));

// You are provided with a function that is intended to take an array of numbers and return a new array with each number squared.
// However, there's an error in how the map() method is currently being used.
// Your task is to identify the error and correct the code.
// function squareNumbers(numbers) {
//     numbers.map(number => {
//         return number * number
//     })
// }

function squareNumbers(numbers) {
    return numbers.map(number => {
        return number * number
    })
}

console.log(squareNumbers([1,2,3,4]));
console.log(squareNumbers([9,0]));

// filter
// You are given a function that takes an array of numbers and returns a new array containing only even numbers.
// However, this function currently uses a for loop.
// Your task is to refactor this function to use the filter() method instead.
// function getEvenNumbers(numbers) {
//     const evenNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             evenNumbers.push(numbers[i]);
//         }
//     }
//     return evenNumbers;
// }

function getEvenNumbers(numbers) {
    const evenNumbers = numbers.filter(number => number % 2 === 0)
    return evenNumbers
}

console.log(getEvenNumbers([1,2,3,4,5,6]));
console.log(getEvenNumbers([0,-10,11,-12,13]));
console.log(getEvenNumbers([]));

// Write a JavaScript function named filterOutNegativeNumbers.
// This function should take an array of numbers and return a new array with all negative numbers filtered out, leaving only positive numbers and zeros.
function filterOutNegativeNumbers(numbers) {
    const positiveNumbers = numbers.filter(num => num >= 0)
    return positiveNumbers
}
console.log(filterOutNegativeNumbers([1,2,3]));
console.log(filterOutNegativeNumbers([1,-2,-3,4]));
console.log(filterOutNegativeNumbers([-10,-20,-30,-40]));




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

const people = [{'name':'Alice','age':25},{'name':'Alice','age':30}]
const name = 'Alice'

const findPerson = people.find(person => person.name === name)
console.log(findPerson);

// Write a JavaScript function named replaceProductPrice.
// This function should take two parameters: an array of product objects and a product ID.
// Each product object contains an id, a name, and a price.
// The function should find the product with the given ID and increase its price by 10%.
// The function should return a new array with the updated product objects.
const productsA = [{'id':1,'price':100},{'id':2,'price':200}]
let productID = 1

// const findProductPriceA = productsA.find(pA => pA.id === productID)
// const findProductPriceB = productsA.find( pB => pB.id !== productID)
// findProductPriceA.price = findProductPriceA.price * 1.1
// replaceProductPrice.push(findProductPriceA, findProductPriceB)

// console.log(findProductPriceA);
// console.log(findProductPriceB);
// console.log(replaceProductPrice);
//loop through productA
//check the condition if product.id === productID
// modify the price product.price = product.price * 1.1
//return new array called replaceProductPrice with updated products

function replaceProductPrice(products, productID) {
    for (let product of products){
        if (product.id === productID) {
            product.price *= 1.1
        }
    }
    return products
}
console.log(replaceProductPrice([{'id':1,'price':100},{'id':2,'price':200}],2));
