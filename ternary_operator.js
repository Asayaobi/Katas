// Ternary operator example

//input age
const age = 19
const drink = age >= 18 ? 'wine' : 'water'
console.log(drink)


let score = 85
// let grade
//     if (score >= 90) {
//         grade = 'A'
//     } else if (score > 75) {
//         grade = 'B'
//     } else {
//         grade = 'C'
//     }
let grade = score >= 90 ? 'A' : score > 75 ? 'B' : 'c'
console.log(grade)

//example with function

function isEven(number) {
    return number % 2 === 0 ? true : false
}
console.log(isEven(20))


// If to Ternary
// In the following function, convert the if condition into a ternary operator.
// function numerToBoolean(n) {
//     if (n > 0) {
//         return true
//     } else {
//         return false
//     }
// }

function numberToBoolean(n) {
    return n > 0 ? true : false
}
console.log(numberToBoolean(-9))

// Half or Double
// Create a function halfOrDouble that takes an array of numbers.
// The function should then check the value of each number and, if it's greater than 10, it should halve it, otherwise it should double it.
// The function should then return the updated array.
// Use a ternary operator.
function halfOrDouble(numbers) {
    let output =[]
    for (let i = 0; i < numbers.length ; i++) {
        numbers[i] > 10 ?output[i] = numbers[i]/2 : output[i] = numbers[i] * 2
    }
    return output
}
console.log(halfOrDouble([10,5,2,14]))
console.log(halfOrDouble([-20,1,70,2,9,0,16]))
console.log(halfOrDouble([]))

//Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. 
//In his country, it's usual to tip 15% if the bill value is between 50 and 300. 
//If the value is different, the tip is 20%.
//It's not allowed to use an if...else statement 
//Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

//Example: The bill was 275, the tip was 41.25, and the total value 316.25.


const bill = 275;
const tip = bill >= 50 || bill <=300 ? bill * 0.15 : bill * 0.2

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`)