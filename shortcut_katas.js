// Create a JavaScript function called decrementValue.
// This function should take a single parameter, a number, and use the decrement operator to decrease the value of the number by one.
// The function should then return the decremented value.

// function decrementValue(number) {
//     number--
//     return number
// }

// console.log(decrementValue(5))
// console.log(decrementValue(100));

// Replace the sum calculation in the following code with the Addition Assignment operator.
// Don't delete the variable c.
function addTen(a) {
    let c = 10
    c += a
    return c
}

console.log(addTen(5));
console.log(addTen(10));

// In the following function, convert the if condition into a ternary operator.

// function numerToBoolean(n) {
//     if (n > 0) {
//         return true
//     } else {
//         return false
//     }
// }

function numberToBoolean(n) {
   let ntoBoolean = n > 0 ? true : false
}

console.log(numberToBoolean(5));
console.log(numberToBoolean(-30))