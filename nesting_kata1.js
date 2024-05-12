// Accessing Nested Object Properties
// Your task is to create a function named getNestedProperty.
// This function should take an object as its parameter.
// The object will have a nested structure, with an object inside the main object.
// You need to access the email property inside the nested object and return its value.

function getNestedProperty(obj) {
    return obj.contact.email
}

console.log(getNestedProperty({'contact':{'email':'alice@example.com'}}))
console.log(getNestedProperty({'contact':{'email':'bob@example.com'}}))

// Calculating Total Price from Array of Objects
// Create a function named calculateTotalPrice.
// This function should take an array of objects as its parameter.
// Each object in the array represents an item, and each item has a price property.
// The function should calculate the total price of all items in the array by summing up their individual prices and return the total sum.

// let a = [{"name": "Bag", "price": 90}, {"name": "Shoes", "price": 100}]
// calculateTotalPrice(a) // 190
// let b = [{"name": "Car", "price": 1000}, {"name": "Apple", "price": 5}, {"name": "Laptop", "price": 500}]
// calculateTotalPrice(b) // 1505

function calculateTotalPrice(arr) {
    let sum = 0
    for (i = 0; i < arr.length; i++) {
        sum += arr[i].price
    }
    return sum
}

console.log(calculateTotalPrice([{"name": "Bag", "price": 90}, {"name": "Shoes", "price": 100}]))
console.log(calculateTotalPrice([{"name": "Car", "price": 1000}, {"name": "Apple", "price": 5}, {"name": "Laptop", "price": 500}]))

// Summing Positive Numbers in Nested Arrays
// Your task is to create a function named sumPositiveNumbers.
// This function should take an object as its parameter.
// Within this object, there are two properties array1 and array2, each containing an array of numbers.
// The function should calculate the sum of all positive numbers from both arrays combined and return the total sum.

let a = {
    array1: [1, -3, 5, 7],
    array2: [10, -2, 4, -5]
}
// sumPositiveNumbers(a) // 27

let b = {
    array1: [10, 20, -9],
    array2: [200, 1]
}
// sumPositiveNumbers(b) // 231

function sumPositiveNumbers(object) {
    let sum = 0

    for (i = 0; i < object.array1.length; i++) {
        if (object.array1[i] > 0){
            sum += object.array1[i]
        }
    }
    for (i = 0; i < object.array2.length; i++) {
        if (object.array2[i] > 0){
            sum += object.array2[i]
        }
    }
    return sum
}

console.log(sumPositiveNumbers(a))
console.log(sumPositiveNumbers(b))