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

// Formatting Name
// Create a JavaScript function named formatDisplayName that takes two parameters: a user's first name and last name.
// If the last name is not provided, the function should return the error message: "Last name missing".
// The function should check if both parameters are strings and then return a formatted full name with a space in between.
// If either parameter is not a string, the function should return the error message: "Error, not a string"

function formatDisplayName(firstname, lastname) {
    //if no lastname 'last name missing'
    if (!lastname) {
        return 'last name missing'
        //if firstname, lastname type = string, return firstname + space + lastname
    // if not 'not a string'
    } else if (typeof firstname === 'string' && typeof lastname === 'string') {
        return firstname + ' ' + lastname
    } else {
        return 'Error, not a string'
    }
}

console.log(formatDisplayName('John','Doe'))
console.log(formatDisplayName('John'))
console.log(formatDisplayName('John',100))

// Sum Numbers in Array
// Create a function sumNumbers that takes an array as a parameter.
// The array can contain a combination of numbers, strings and booleans.
// The function should find all numbers in the array, add them and return the sum.
// If there are no numbers, the function should return 0.

function sumNumbers(arr) {
    //find all numbers in the array, add them
    // if no numbers returns 0
    let sum = 0
    for (let element of arr){
        if (typeof element === 'number'){
            sum += element
        }
    }
    return sum
}

console.log(sumNumbers([10,5]))
console.log(sumNumbers(['10',5,'20',5]))
console.log(sumNumbers(['hello',-20,3]))
console.log(sumNumbers(['yes','no']))
console.log(sumNumbers([true,'no',0.9,0.1,false,'yes']))
console.log(sumNumbers([]))