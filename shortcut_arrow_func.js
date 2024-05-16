// 1. Basic Arrow Function
// Traditional Function:
// function add(a, b) {
//    return a + b
// }

const add = (a, b) => a + b
console.log(add(5,2))
console.log(add(1,2))

// 2. Arrow Function with One Parameter
// Traditional Function:
// function square(x) {
//    return x * x
// }

const square = (x) => x * x
console.log(square(4))


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

const checkPositive = n => {
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

// Create an arrow function greetTime that takes a parameter time (a number).
// Inside the function, create a second arrow function checkTime that takes a parameter t (a number).
// Within the checkTime function, use a ternary operator to check if t is less than 12, if it is, return 'morning', otherwise return 'evening'.
// Within the greetTime function, return a template literal that includes the invokation of the function checkTime, passing time as a parameter, to then return either of the following strings:
// 'Good morning'
// 'Good evening'

// function greetTime(time) {
//     function checkTime(t) {
//         if (t < 12) {
//             return 'morning'
//         } else {
//             return 'evening'
//         }
//     }
//     if (checkTime === 'morning') {
//         return 'Good morning'
//     } else {
//         return 'Good evening'
//     }
// }

// const checkTime = time => { 
//     return time < 12 ? 'morning' : 'evening'
// }

// const greetTime = time => {
//     return (checkTime(time) === 'morning') ? `Good morning` : `Good evening`
// }




const greetTime = time => {
    const checkTime = time => {
        return time < 12 ? 'morning' : 'evening'
    }
    return checkTime(time) === 'morning' ? `Good ${checkTime(time)}` : `Good ${checkTime(time)}`
}

console.log(greetTime(10));
console.log(greetTime(11));
console.log(greetTime(12));
console.log(greetTime(14));