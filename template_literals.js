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