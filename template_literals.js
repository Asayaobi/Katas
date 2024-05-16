// Traditional Approach:
// const multiLineString = "This is a string\n" +
//                         "that spans across\n" +
//                         "multiple lines."

const multiLineString = `This is a string
                        that spans across
                        multiple lines.`


const name = 'Alice'
const age = 25
// const greeting = 'Hello, my name is ' + name + ' and I am ' + age + ' years old'
const greeting = `Hello, my name is ${name} and I am ${age} years old`
console.log(greeting) // Output: 'Hello, my name is Alice and I am 25 years old'

// Embedded Expressions
// Expressions embedded in template literals can be more than just simple variables. They can be complex operations or function calls.
// Example:
const result = `The sum of 2 and 3 is ${2 + 3}.`
console.log(result) // 'The sum of 2 and 3 is 5.'

const add = (a, b) => a + b
const output = `The sum of 2 and 3 is ${add(2, 3)}.`
console.log(output) 

// Time Greet
// Create an arrow function greetTime that takes a parameter time (a number).
// Inside the function, create a second arrow function checkTime that takes a parameter t (a number).
// Within the checkTime function, use a ternary operator to check if t is less than 12, if it is, return 'morning', 
// otherwise return 'evening'.
// Within the greetTime function, return a template literal that includes the invokation of the function checkTime, 
// passing time as a parameter, to then return either of the following strings:
// 'Good morning'
// 'Good evening'
const greetTime = t => {
    const checktime = t => t < 12 ? 'morning' : 'evening'
    return `Good ${checktime(t)}`
}
console.log(greetTime(10))
console.log(greetTime(11))
console.log(greetTime(12))
console.log(greetTime(14))