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

// Find Refactoring
// You are provided with a function that takes an array of objects (representing people) and a name (string).
// The function returns the first person object whose name matches the provided name.
// However, this function currently uses a for loop.
// Your task is to refactor this function to use the find() method instead.
const findPersonName = (persons, name) => persons.find(p => p.name === name)
console.log(findPersonName([{'name':'Alice','age':25},{'name':'Alice','age':30}],'Alice'))
console.log(findPersonName([{'name':'Alice','age':25},{'name':'Bob','age':37}],'Alice'))
console.log(findPersonName([{'name':'Bob','age':37},{'name':'Alice','age':25}],'Bob'))

// Find Product By Id
// Write a JavaScript function named findProductById.
// This function will take an array of product objects and a specific product ID.
// It should use the find() method to search through the array and return the product object that has the matching ID.
// If no product with the given ID is found, the function should return null.
const findProductById = (products, id) => products.find(p => p.id === id)
console.log(findProductById([{'id':1,'name':'Smartphone'},{'id':2,'name':'Laptop'},{'id':3,'name':'Tablet'}],2))

// Find User Bug
// You are given a function that attempts to find and return a user object from an array of users by a given username.
// However, the find() method is being used incorrectly in this function.
// Your task is to identify the mistake and correct the function so that it properly uses find().
const findUserByUsername = (users, username) => users.find(u => u.username === username)
console.log(findUserByUsername([{'username':'spiderman','password':'web'},{'username':'batman','password':'dark'}],'batman'))
console.log(findUserByUsername([{'username':'wonderwoman','password':'amazon'},{'username':'superman','password':'krypto'}],'wonderwoman'))

// Replace Product Price
// Write a JavaScript function named replaceProductPrice.
// This function should take two parameters: an array of product objects and a product ID.
// Each product object contains an id, a name, and a price.
// The function should find the product with the given ID and increase its price by 10%.
// The function should return a new array with the updated product objects.
// const replaceProductPrice = (products, id) => {
//     products.map(p => p.id === id ? p.price *= 1.1 : p.price = p.price)
//     return products
// }
const replaceProductPrice = (products, id) => {
    products.find(product => {
        if (product.id === id) {
            product.price *= 1.1
            product.price = product.price.toFixed(2)
        }
    })
    return products
}
console.log(replaceProductPrice([{'id':1,'price':100},{'id':2,'price':200}],1))
console.log(replaceProductPrice([{'id':1,'price':100},{'id':2,'price':200}],2))

///////////////////////////////////////////


// Some
// JavaScript's some() method is a convenient way to check if at least one element in an array passes a test 
// specified by a function. It's particularly useful for situations where you need to verify 
// whether any elements in an array meet certain criteria.
// Example Without some():
const numbers = [1, 3, 5, 7, 9]
// const hasEven = numbers => {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             return true
//         }
//     }
// }
//Some does not modifiy the original array, instead, it returns a boolean.
// Example Without some():
const hasEven = numbers => numbers.some(num => num % 2 === 0)
console.log(hasEven(numbers))
console.log(hasEven([1, 3, 5, 7, 10]))

let scores = [10, 20, 10]
const findScore = scores => scores.some(score => score > 10)
console.log(findScore(scores))

// Checking for Any Out-of-Stock Products:
const productsA = [
    { id: 1, name: 'Pencil', inStock: true },
    { id: 2, name: 'Eraser', inStock: false }
 ]
 let outOfStock = productsA => productsA.some(p => !p.inStock)
 console.log(outOfStock(productsA))