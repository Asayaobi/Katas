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
console.log(ages) //[20,25,30]

// IndexOf()
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// Examples

const fruits1 = ['apple', 'banana', 'orange']

const orangeIndex = fruits1.indexOf('orange')
console.log(orangeIndex)//2 

const kiwiIndex = fruits1.indexOf('kiwi')
console.log(kiwiIndex)//-1

//includes
//Check if there's that element in the array and return true or false
const friends = ['Ross', 'Monica', 'Chandler']
console.log(friends.includes('Toby')) //false
console.log(friends.includes('Ross')) //true

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
console.log(names1.join(''))

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

// Return Length
// Create a function returnLength that takes an array as its only parameter, 
// then returns the length of the array as a number, or 'the array is empty' if there are no elements in the array.
// returnLength([1,2,3,4])

const returnLength = array => array.length === 0 ? 'the array is empty': array.length
console.log(returnLength([1,2,3,4]))
console.log(returnLength(['a']))
console.log(returnLength([]))

// Sports Lenghts
// Create a function addSportsLengths that takes an array of objects.
// Each object contains an array of sports.
// The function should add a property sportsLength to each object, with the length of its sports array.
// addSportsLengths([{'name':'John','sports':['football']},{'name':'Alice','sports':['tennis','golf']}])
const addSportsLengths = sports => {
    for (let i = 0; i < sports.length ; i++) {
        sports[i].sportsLength = sports[i].sports.length
    }
    return sports
}
console.log(addSportsLengths([{'name':'John','sports':['football']},{'name':'Alice','sports':['tennis','golf']}]))
console.log(addSportsLengths([{'name':'Bob','sports':[]}]))

// Reverse Array
// Create a function reverseArray that takes an array and returns the array reversed.
const reverseArray = array => array.reverse()
console.log(reverseArray([1,2,3,4]))
console.log(reverseArray(['a','b','c']))

// Remove Empty Spots
// Create a function removeEmptySpots that takes an array as a parameter.
// The array may have a falsy value at the beginning or at the end (or both).
// The function should remove these falsy values and return the clean array.
// hint: (else if) removes only the first empty spot if it exists, 
//while two separate if statements removes both the first and last empty spots if they exist independently.
const removeEmptySpots = array => {
    if (!array[0]) {
        array.shift()
    } 
    if (!array[array.length - 1]) {
        array.pop()
    }
    return array
}
console.log(removeEmptySpots([0,2,3,4,0]))
console.log(removeEmptySpots([null,'a','b','c']))
console.log(removeEmptySpots([10,11,0,50,false]))
console.log(removeEmptySpots([0,100,'a','b',50,null]))

// String Repeat
// Create a function stringRepeat that takes a number and a string, then returns the string repeated as many times as the number.
// stringRepeat(5, 'hi') // 'hihihihihi'
// stringRepeat(2, 'hola')
const stringRepeat = (number,string) => {
    let output = [] 
        for (let i = 0; i < number; i++) {
            output.push(string)
        }
        return output.join('')
}
console.log(stringRepeat(5, 'hi'))
console.log(stringRepeat(2, 'hola'))


