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

