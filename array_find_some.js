// find() method
//  search through an array and retrieve the first element that meets a certain condition set by a provided function. 
//  It's an invaluable tool for quickly locating specific elements within an array.
// Before find()
// finding an element in an array typically involved a loop and a conditional statement.

const products = [
    { id: 1, name: 'Phone', category: 'Electronics' },
    { id: 2, name: 'Blender', category: 'Home Appliances' },
    { id: 3, name: 'Tablet', category: 'Electronics' }
]

// function findProduct(products) {
//    for (let i=0; i < products.length; i++) {
//         if (products[i].id === 2) {
//             return products[i]
//         }
//    }
// }
const findProduct = products => products.find(p => p.id === 2)
console.log(findProduct(products))

// Find does not modifiy the original array, instead, it returns a new element.
//Find always returns a single element, even if there are multiple elements that match the condition or none.
const scores1 = [10, 20, 30]
const foundScore = scores => scores.find(s => s > 10)
console.log(scores1)
console.log(foundScore(scores1))

// Remember that find() yields a value, so, within a function you must return the output of find();
// the return within the find() method only returns the matching element of the array
function findLowScore(scores) {
    return scores.find(s => {
        return s < 20
    })
}
console.log(findLowScore(scores1))

//find Bob
const users = ['Alice', 'Bob', 'Charlie']
const findBob = users.find(u => u === 'Bob')
console.log(findBob)

//find item in stock
const inventory = [
    { id: 1, name: 'Pencil', inStock: true },
    { id: 2, name: 'Eraser', inStock: false }
 ]
 const findInventory = inventory.find(i => i.inStock === true)
 console.log(findInventory)
 
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

// You are given a function that is intended to return an array of strings that are longer than 4 characters.
// However, there's a mistake in the implementation of the filter() method.
// Your task is to identify and correct the error in the function.
function getLongStrings(strings) {
    const longStrings = strings.filter(string => string.length > 4)
    return longStrings
}
console.log(getLongStrings(['Hello','Hola','Ciao']));
console.log(getLongStrings(['Grazie','Merci','Tak']));
console.log(getLongStrings(['Grazie','Merci','Tak','Kop Khun']));

// Create a JavaScript function named filterAndSquareEvens. 
// This function should take an array of numbers as its input. 
// It should first filter out all odd numbers, and then square each of the remaining even numbers. 
// The function should return a new array with these squared even numbers.
function filterAndSquareEvens(numbers) {
    const evenNumbers = numbers.filter((num) => {return num % 2 === 0})
    const squareNumbers = evenNumbers.map(evenNumber => evenNumber * evenNumber)
    return squareNumbers
}


console.log(filterAndSquareEvens([1,2,3,4,5,6]));
console.log(filterAndSquareEvens([10,-10,20,-20]));
console.log(filterAndSquareEvens([0,11,22,0]));

//find()
// You are provided with a function that takes an array of objects (representing people) and a name (string).
// The function returns the first person object whose name matches the provided name.
// However, this function currently uses a for loop.
// Your task is to refactor this function to use the find() method instead.
// function findPerson(people, name) {
//     for (let i = 0; i < people.length; i++) {
//         if (people[i].name === name) {
//             return people[i]
//         }
//     }
// }

function findPerson(people, name) {
    const personFound = people.find(people => people.name === name)
    return personFound
}

console.log(findPerson([{'name':'Alice','age':25},{'name':'Alice','age':30}],'Alice'));
console.log(findPerson([{'name':'Alice','age':25},{'name':'Bob','age':37}],'Alice'));
console.log(findPerson([{'name':'Bob','age':37},{'name':'Alice','age':25}],'Alice'));

// Write a JavaScript function named findProductById.
// This function will take an array of product objects and a specific product ID.
// It should use the find() method to search through the array and return the product object that has the matching ID.
// If no product with the given ID is found, the function should return null.

// 1.find product
// const findProduct = products.find((products) => {return products.id === productID})
// 2. if findProduct is truty return findProduct, if it's falsy null
// if (findProduct) {
//     return findProduct
// } else {
//     return null
// }

function findProductById(products, productID) {
    const findProduct = products.find(products => products.id === productID)
    const result = findProduct ? findProduct : null
    return result
}
console.log(findProductById([{'id':1,'name':'Smartphone'},{'id':2,'name':'Laptop'},{'id':3,'name':'Tablet'}],2));
console.log(findProductById([{'id':109,'name':'Keyboard'},{'id':107,'name':'Duck'}],109));
console.log(findProductById([{'id':109,'name':'Keyboard'},{'id':107,'name':'Duck'}],20));

// You are given a function that attempts to find and return a user object from an array of users by a given username.
// However, the find() method is being used incorrectly in this function.
// Your task is to identify the mistake and correct the function so that it properly uses find().
// function findUserByUsername (users, username) {
//     const findUser = users.find(user => user.username === username)
//     return findUser
// }
//or
function findUserByUsername(users, username) {
    return users.find(user => {
        return user.username === username
    })
}
console.log(findUserByUsername([{'username':'spiderman','password':'web'},{'username':'batman','password':'dark'}],'batman'));

// Write a JavaScript function named replaceProductPrice.
// This function should take two parameters: an array of product objects and a product ID.
// Each product object contains an id, a name, and a price.
// The function should find the product with the given ID and increase its price by 10%.
// The function should return a new array with the updated product objects.
// 1.  if find the id
// 2. change with new price
// 3. else return the same price


function replaceProductPrice(products, productID) {
    const replacePrice = products.map((p) => {
        if (p.id === productID) {
            p.price = Math.floor(p.price * 1.1)
            return p
            // return {
            //     ...p,
            //     price: Math.floor(p.price * 1.1)
            // }
        } else {
            return p
        }
    })
    return replacePrice
}

const arr =  [{'id':1,'price':100},{'id':2,'price':200}]
console.log(arr)
console.log(replaceProductPrice(arr,1)); 
console.log(arr[0].price)
console.log(arr)
// [{'id':1,'price':110},{'id':2,'price':200}]
// console.log(replaceProductPrice([{'id':1,'price':100},{'id':2,'price':200}],2));















// const products = [
//     { name: 'Apple', category: 'fruit' },
//     { name: 'Carrot', category: 'vegetable' },
//     { name: 'Banana', category: 'fruit' }
//  ]
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



// const people = [{'name':'Alice','age':25},{'name':'Alice','age':30}]
// const name = 'Alice'

// const findPerson = people.find(person => person.name === name)
// console.log(findPerson);

