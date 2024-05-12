// Mark as Paid
// Your task is to create a function called markAsPaid.
// This function should take an object as its only parameter (a bill), update the status property of the bill to paid, and then return the updated object.

let a = {"total": "105", "status": "pending"}
// markAsPaid(a) // {"total": "105", "status": "paid"}
let b = {"total": "33.2", "status": "pending"}
// markAsPaid(b) // {"total": "33.2", "status": "paid"}
function markAsPaid(bill) {
    bill.status = 'paid'
    return bill
}
console.log(markAsPaid(a))
console.log(markAsPaid(b))

// Mark as Value
// Your task is to create a function called markAsValue.
// This function should take 2 parameters: an object (a bill), and a string (a value).
// The function should update the status property of the bill to value parameter, and then return the updated object.

let c = {"total": "99", "status": "pending"}
// markAsValue(c, "accepted") // {"total": "99", "status": "accepted"}
let d = {"total": "71.5", "status": "pending"}
// markAsValue(d, "denied") // {"total": "71.5", "status": "denied"}

function markAsValue(bill, value) {
    bill.status = value
    return bill
}

console.log(markAsValue(c, "accepted"))
console.log(markAsValue(d, 'pending'))

// Updating a Nested Array in an Object
// Create a JavaScript function named updateNestedArray.
// This function should take three parameters:

// an object
// a number
// and a string.

// The object contains a nested array of strings. 
// The function should update the element in the array at the index specified by the number parameter 
// to the value provided by the string parameter.

// After updating, the function should return the modified object.
let e = {"fruits": ["apple", "banana"]}
// updateNestedArray(e, 1, "cherry") // {"fruits": ["apple", "cherry"]}
let f = {"fruits": ["pineapple", "strawberry"]}
// updateNestedArray(f, 0, "kiwi") // {"fruits": ["kiwi", "strawberry"]}
function updateNestedArray(obj, number, value) {
    obj.fruits[number] = value
    return obj
}
console.log(updateNestedArray(e, 1, "cherry"))
console.log(updateNestedArray(f, 0, "kiwi"))


// Reducing Product Prices by 10%
// Write a function named reducePrices.
// The function takes an array of objects as a parameter. Each object represents a product with a price property.
// The task is to reduce the price property of each product by 10%.
// Return the array with the updated product objects.
function reducePrices(products) {
    for (let i = 0; i < products.length; i++) {
        products[i].price = products[i].price * 0.90
    }
    return products
}
console.log(reducePrices([{'name':'Laptop','price':1000},{'name':'Phone','price':500}]))
console.log(reducePrices([{'name':'Camera','price':800},{'name':'Headphones','price':200}]))