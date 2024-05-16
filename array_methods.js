// Push
// The .push() method adds an element to the end of an array.
// Examples

const fruits = ['apple', 'banana']
fruits.push('orange')
console.log(fruits) 

// Pop
// The .pop() methods removes the 'last' element from an array and returns that element.
// Examples

const numbers = [1, 2, 3]
const lastNumber = numbers.pop()
console.log(lastNumber) // 3
console.log(numbers) // [1, 2]

// Shift
// The .shift() method removes the 'first' element from an array and returns that element.
// Examples

const colors = ['red', 'green', 'blue']
const firstColor = colors.shift()
console.log(firstColor) // 'red'
console.log(colors) // ['green', 'blue']

// Unshift()
// The unshift() method adds an element to the beginning of an array.
// Examples

const ages = [25, 30]
ages.unshift(20)
console.log(ages)

// IndexOf()
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// Examples

const fruits1 = ['apple', 'banana', 'orange']

const orangeIndex = fruits1.indexOf('orange')
console.log(orangeIndex) 

const kiwiIndex = fruits1.indexOf('kiwi')
console.log(kiwiIndex)

// isArray()
// The Array.isArray() method determines if the argument is an array and returns a boolean.
// Examples

const names = ['Alice', 'Bob']
Array.isArray(names) // true
console.log(Array.isArray(names))

const empty = []
Array.isArray(empty) // true
console.log(Array.isArray(empty))

const price = 100
Array.isArray(price) //false
console.log(Array.isArray(price))

// join()
// The .join() method converts the elements of an array into a string, using an optional separator character.
// Examples

const names1 = ['Alice', 'Bob']
names1.join() // 'AliceBob'
console.log(names1.join())

const names2 = ['Alice', 'Bob']
names2.join(' ') // 'Alice Bob'
console.log(names2.join(' '))

const scores = [190, 250, 320]
scores.join('/') // '190/250/320'
console.log(scores.join('/'))

// reverse()
// The .reverse() method reverses the order of the elements in an array.
// Examples

const scores1 = [100, 200, 300]
const newscore1 = scores1.reverse() // [300, 200, 100]
console.log(newscore1)

let namesA = ['Bob', 'Alice', 'John', 'Zelda']
let newnames = namesA.reverse()
console.log(newnames)
