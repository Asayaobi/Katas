// Create a function named calculateTotalPrice.
// This function should take an array of objects as its parameter.
// Each object in the array represents an item, and each item has a price property.
// The function should calculate the total price of all items in the array by summing up their individual prices and return the total sum.
let arrays = [{'name':'Bag','price':90},{'name':'Shoes','price':100}]

function calculateTotalPriceNoLoop(arrays) {
let total = 0
    return total = total + arrays[0].price + arrays[1].price
        }
console.log(calculateTotalPriceNoLoop([{'name':'Bag','price':90},{'name':'Shoes','price':100}]))


//use the loop to iterate through the array

// function calculateTotalPrice(arrays) {
// let total = 0
//     for (let array of arrays) {
//         total = total + array.price
//     }
//     return total
// }

// console.log(calculateTotalPrice([{'name':'Bag','price':90},{'name':'Shoes','price':100}]))
// console.log(calculateTotalPrice(calculateTotalPrice([{'name':'Car','price':1000},{'name':'Apple','price':5},{'name':'Laptop','price':500}])))
