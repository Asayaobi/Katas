// Convert the following function into an arrow function.

// function add(a, b) {
//     return a + b
// }

const add = (a, b) => a + b

console.log(add(5,2));
console.log(add(1,2));

// The following arrow function is broken. Can you fix it?
// const subtract (a, b) => a - b

const subtract = (a, b) => a - b

console.log(subtract(5,2));
console.log(subtract(10,1));

// The following arrow function is broken. Can you fix it?
// const multiply = a, b => a * b

const multiply = (a, b) => a * b

console.log(multiply(10,2));
console.log(multiply(9,3));

// The following arrow function is broken. Can you fix it? (Don't delete the curly braces).
// const divide = (a, b) => { a / b }

const divide = (a, b) => a / b

console.log(divide(10,2));
console.log(divide(18,3));

// Simplify the following arrow function to its shortest form (1 single line), and use a ternary operator.
// const checkPositive = (n) => {
//     if (n > 0) {
//         return true
//     } else {
//         return false
//     }
// }

const checkPositive = (n) => {
   return n > 0 ? true : false
}

console.log(checkPositive(20));
console.log(checkPositive(-5));

// Convert the following String Concatenation into a Template Literal.
// function greet(age, city) {
//     return 'Hello, I\'m ' + age + ' years old and I\'m from ' + city + '!'
// }

function greet(age, city) {
    return `Hello, I'm ${age} years old and I'm from ${city}!`
}
console.log(greet(20,'Tokyo'));