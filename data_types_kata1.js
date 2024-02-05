// The function should check if both parameters are numbers. If they are, it should apply the discount to the price and return the new discounted price.
// If either parameter is not a number, the function should return the error message: "Error: Invalid input"

function addDiscount(price, discount) {
    if (typeof price === 'number' && typeof discount === 'number') {
        return price - (price * discount)
    } else {
        return 'Error: Invalid input'
    }
}

console.log(addDiscount(100, 0.5))
console.log(addDiscount(40, 0.25))
console.log(addDiscount('hello', 0.5))
console.log(addDiscount(100, 0.5))
console.log(addDiscount('hello', 'hello'))
