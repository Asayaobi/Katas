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
console.log(findProduct(products)) //{ id: 2, name: 'Blender', category: 'Home Appliances' }

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
console.log(findLowScore(scores1))//10

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
 console.log(findInventory)//{ id: 1, name: 'Pencil', inStock: true }

// Find Refactoring
// You are provided with a function that takes an array of objects (representing people) and a name (string).
// The function returns the first person object whose name matches the provided name.
// However, this function currently uses a for loop.
// Your task is to refactor this function to use the find() method instead.
const findPersonName = (persons, name) => persons.find(p => p.name === name)
console.log(findPersonName([{'name':'Alice','age':25},{'name':'Alice','age':30}],'Alice')) //{'name':'Alice','age':25}
console.log(findPersonName([{'name':'Alice','age':25},{'name':'Bob','age':37}],'Alice')) //{'name':'Alice','age':25}
console.log(findPersonName([{'name':'Bob','age':37},{'name':'Alice','age':25}],'Bob')) //{'name':'Bob','age':37}

// Find Product By Id
// Write a JavaScript function named findProductById.
// This function will take an array of product objects and a specific product ID.
// It should use the find() method to search through the array and return the product object that has the matching ID.
// If no product with the given ID is found, the function should return null.
const findProductById = (products, id) => products.find(p => p.id === id)
console.log(findProductById([{'id':1,'name':'Smartphone'},{'id':2,'name':'Laptop'},{'id':3,'name':'Tablet'}],2))//{'id':2,'name':'Laptop'}

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

// Write a function that takes an array of objects and return an array of the objects 'name' property if the name property exist.
function getNames(arr){
    let output = []
    arr.find(obj => {
        if (obj.name){
            output.push(obj.name)
        }
    })
    return output
}
console.log(getNames([{a: 1},{name: 'Jane'}, {b: 2}, {name: 'Mark'}, {name: 'Jack'}])) // ['Jane','Mark','Jack']

//using hasOwnProperty
function getNames1(arr){
    let result = []
    for (let i = 0; i < arr.length; i++){
        if (arr[i].hasOwnProperty('name')){
            result.push(arr[i].name)
        }
    }
    return result
}

console.log(getNames1([{a: 1},{name: 'Jane'}, {b: 2}, {name: 'Mark'}, {name: 'Jack'}])) // ['Jane','Mark','Jack']

///////////////////////////////////////////

//findLast
//find() return the first element that matches the condition
//findLast() return the last element that matches the condition
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements.find(mov => mov < 0)) //-400
console.log(movements.findLast(mov => mov < 0)) //-130

//findLastIndex
//assume that big movement is the amount that is more than 1000
//find your latest big movement and show that it was x movements ago
const latestBigMovementIndex = movements.findLastIndex(mov => Math.abs(mov) > 1000)
console.log(latestBigMovementIndex) //7
console.log(`your latest big movement was ${movements.length - latestBigMovementIndex} movements ago`)////'your latest big movement was 1 movements ago'

const firstBigMovementIndex = movements.findIndex(mov => Math.abs(mov) > 1000)
console.log(firstBigMovementIndex) //3


//includes() 
//returns true or false
console.log(movements.includes(-400))//true

// Some
//returns true or false for a condition
console.log(movements.some(mov => mov > 0)) //true

//Every()
//returns true or false when all of the element meets that condition
const deposits =  [430, 1000, 700, 50, 90]
console.log(deposits.every(d => d > 0))//true

// some() method is a convenient way to check if at least one element in an array passes a test 
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
 console.log(outOfStock(productsA)) //true

// Contains High Value
// Create a function called containsHighValue.
// This function will take an array of numbers and check if the array contains any number greater than a specified value.
// The function should use the some() method to perform this check and return true if such a number exists, or false otherwise.
const containsHighValue = (numbers, value) => numbers.some(n => n > value)
console.log(containsHighValue([1,2,3,4,5],4))
console.log(containsHighValue([10,100,1000],55))
console.log(containsHighValue([10,100,1000],2000))
console.log(containsHighValue([1,2,3],10))

// Check And Transform
// Create a JavaScript function named checkAndTransform.
// This function will take two parameters: an array of numbers and a threshold value.
// First, it should check if any number in the array is greater than the threshold.
// If such a number exists, then use the map() method to double each number in the array.
// The function should return the transformed array if there's a number greater than the threshold, or the original array otherwise.
const checkAndTransform = (numbers, value) => {
    const checkValue = numbers.some(n => n > value)
    if (checkValue){
        return numbers.map(n => n *= 2)
    } else {
        return numbers
    }
} 
console.log(checkAndTransform([1,4,6,8],5))
console.log(checkAndTransform([2,3,4],10))

// Every
// The every() method in JavaScript is a powerful array function that checks whether all elements in an array pass a test defined 
// by a provided function. It’s incredibly useful for validating all elements of an array against a single condition.
// Before every()
// Before the advent of every(), checking every element in an array typically involved a loop with a conditional statement.
const numbersZ = [2, 4, 6, 8, 10]
// const allEven = numbers => {
//     let even = true
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 !== 0) {
//             even = false
//             break
//         }}
//     return even
// }

const allEven = numbersZ => numbersZ.every(n => n % 2 === 0)
console.log(allEven(numbersZ)) //true

//Check if everyone is an adult
const ages = [22, 19, 24, 29, 30]
// const allAdults = ages => {
//     let adult = true
//     for (let i =0; i < ages.length; i++){
//         if (ages[i] < 18) {
//             adult = false
//             break
//         }
//     }
//     return adult
//}
const allAdults = ages => ages.every(age => age >= 18)
console.log(allAdults(ages))

// Create a JavaScript function named allPass.
// This function will take two parameters: an array of students scores and a numerical threshold.
// It should check whether all numbers in the array are greater than the given threshold (all students have passed the exam).
// The function should return true if all numbers meet this criterion, or false otherwise.
const allPass = (scores,value) => scores.every(score => score > value)
console.log(allPass([7,8,8,6,10],5)) //true
console.log(allPass([7,8,8,2],5)) //false
console.log(allPass([10,7,8,10,10,9],5)) //true

// Create a JavaScript function called searchHouses.
// This function should take 3 parameters: an array of houses, a number (price) and a string (location).
// It should return true of all the houses contain the location string in the name of their location 
// and if they all below the price; otherwise return false.
const searchHouses = (houses,price, location) => houses.every(house => house.price < price && house.location.includes(location))
console.log(searchHouses([{'price':100,'location':'Koh Phangan'},{'price':50,'location':'Koh Samui'}],150,'Koh'))//true
console.log(searchHouses([{'price':100,'location':'Koh Phangan'},{'price':50,'location':'Koh Samui'}],150,'Bali'))//false
console.log(searchHouses([{'price':100,'location':'Koh Phangan'},{'price':50,'location':'Koh Samui'}],90,'Koh'))//false
console.log(searchHouses([{'price':100,'location':'Bali'},{'price':80,'location':'Koh Samui'}],90,'Bali'))//false
