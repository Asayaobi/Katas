// Function Add Discount
// Your goal is to write a JavaScript function named addDiscount that takes two parameters: price and discount.
// The function should check if both parameters are numbers. If they are, it should apply the discount to the price and return the new discounted price.
// For example, $100 discounted 25% (0.25) is $75.
// If either parameter is not a number, the function should return the error message: "Error: Invalid input"

function addDiscount(price, discount) {
    if (typeof price === 'number' && typeof discount === 'number') {
        price = price - (price * discount)
        return price
    } else {
        return "Error: Invalid input"
    }
}

console.log(addDiscount(100, 0.5))
console.log(addDiscount(40, 0.25))
console.log(addDiscount('hello', 0.5))
console.log(addDiscount(0.5, 'hello'))
console.log(addDiscount('hello', 'hello'))