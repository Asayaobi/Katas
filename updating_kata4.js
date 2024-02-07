// Write a function named reducePrices.
// The function takes an array of objects as a parameter. Each object represents a product with a price property.
// The task is to reduce the price property of each product by 10%.
// Return the array with the updated product objects.

function reducePrices(arr) {
    for (let product of arr) {
        product.price = product.price - (product.price * 0.1)
    }
    return arr
}

console.log(reducePrices([{'name':'Laptop','price':1000},{'name':'Phone','price':500}]))
console.log(reducePrices([{'name':'Camera','price':800},{'name':'Headphones','price':200}]));