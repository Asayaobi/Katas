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