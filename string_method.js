// 1. length
// The length property provides the length of the string, 
// i.e., the number of characters it contains. Just like in an array.
// Example:
const greeting = 'Hello, world!'
greeting.length // 13
console.log(greeting.length)

// 2.charAt()
// Returns the character at a specified index. Index starts at 0.
// Example:
'hello'.charAt(1) // 'e'
console.log('first'.charAt(0))

// 3.includes()
// Checks if a string contains a specified substring.
// Example:
const sentence = 'The quick brown fox jumps over the lazy dog.'
sentence.includes('fox') // true
console.log(sentence.includes('quick'))

// 4. replace()
// Replaces a specified value with another value in a string.
// Example:
let sentence1 = 'Hello, world'
sentence1.replace('world', 'JavaScript') // Output: 'Hello, JavaScript'
console.log(sentence.replace('fox', 'puppy'))

// 5. slice()
// Extracts a part of a string and returns a new string.
// Example
let str = 'The quick brown fox'
str.slice(4, 9)
console.log(str.slice(4, 9))

// 6. split()
// Splits a string into an array of substrings.
// Example
let fruits = 'apple,orange,banana,mango'
fruits.split(',') // ['apple', 'orange', 'banana', 'mango']

let cities = 'Bangkok-Tokyo-London'
cities.split('-') // ['Bangkok', 'Tokyo', 'London'
console.log(cities.split('-'))

// 7. toLowerCase() / toUpperCase()
// Converts a string to lowercase or uppercase.
// Example
'Hello World'.toLowerCase() // 'hello world'
'Hello World'.toUpperCase() // 'HELLO WORLD'

// 8. trim()
// Removes whitespace from both ends of a string.
// Example
'  Hello World  '.trim() // 'Hello World'
console.log('  Hello World  '.trim() )

// Return String Length
// Create a returnLength function that takes a parameter and returns its length 
// if it's a string. In any other case it returns the type of the parameter.
const returnLength = random => {
    return typeof random === 'string' ? random.length : typeof random
}
console.log(returnLength('hello'))
console.log(returnLength(''))
console.log(returnLength(10))
console.log(returnLength([1,2,3]))
console.log(returnLength(true))

// Is Longer Than
// Create a JavaScript function called isLongerThan.
// This function should take two parameters: a string and a number.
// It should return true if the length of the string is greater than the given number, and false otherwise.
const isLongerThan = (string, number) => string.length > number ? true : false
console.log(isLongerThan('hello',3))
console.log(isLongerThan('hello',5))
console.log(isLongerThan('',-1))
console.log(isLongerThan('',0))

// String into Array
// Create a JavaScript function named splitStringIntoArray.
// This function should take two parameters: a string and a delimiter. 
// It should divide the string into an array of substrings, separated by the specified delimiter, and return the resulting array.
const splitStringIntoArray = (string, delimiter) => string.split(delimiter)
console.log(splitStringIntoArray('apple,banana,cherry',','))
console.log(splitStringIntoArray('Hello World',' '))
console.log(splitStringIntoArray('one-two-three','-'))