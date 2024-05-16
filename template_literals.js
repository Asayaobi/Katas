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

