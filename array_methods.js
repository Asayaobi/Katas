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
console.log(names1.join(''))

const names2 = ['Alice', 'Bob']
names2.join(' ') // 'Alice Bob'
console.log(names2.join(' '))

const scores = [190, 250, 320]
scores.join('/') // '190/250/320'
console.log(scores.join('/'))

//flat
//the default for flat method is to lay out 1 level deep
const nestedArr = [[1,2],3,4,[5,6,7],8]
console.log(nestedArr.flat())//[ 1, 2, 3, 4, 5, 6, 7, 8 ]

const deepNested = [[1,2],3,4,[[5,6],7],8]
console.log(deepNested.flat(2))//[ 1, 2, 3, 4, 5, 6, 7, 8 ]


//flatmap (can go one level deep)
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
  const accounts = [account1, account2, account3, account4];

//with flat
// Create new array based on original
//sum all of the money movement from all account
const addmovements = accounts
    .map(account => account.movements)
//[ [ 200, 450, -400, 3000, -650, -130, 70, 1300 ],[ 5000, 3400, -150, -790, -3210, -1000, 8500, -30 ],[ 200, -200, 340, -300, -20, 50, 400, -460 ],[ 430, 1000, 700, 50, 90 ]]
    .flat()
//[200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000,8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]
    .reduce((acc,mov) => acc+mov,0)
console.log(addmovements)//17840

//with flat map
// Create new array based on original
const addWithFlatMap = accounts
    .flatMap(account => account.movements)
//[200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000,8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]
    .reduce((acc,mov) => acc+mov,0)
    console.log(addWithFlatMap)//17840

// Reverse Array
// Create a function reverseArray that takes an array and returns the array reversed.
const reverseArray = array => array.reverse()
console.log(reverseArray([1,2,3,4])) //[ 4, 3, 2, 1 ]
console.log(reverseArray(['a','b','c'])) //[ 'c', 'b', 'a' ]


//create an array
//1. mannually
const arr1 = [1, 2, 3, 4, 5, 6, 7]
//2. woth new Array
const arr2 = new Array(1,2,3)
console.log(arr2)//[ 1, 2, 3 ]
//Note. if you only pass one number to new Array eg.7, it will create an empty array 7 times
const arr3 = new Array(7)
console.log(arr3)
//Array(7) [undefined, undefined, undefined, undefined, undefined, undefined, undefined]

//fill()
// Mutate original
//filling in the gap with the similar position as slice method
arr3.fill(0)
console.log(arr3)//Array(7) [ 0, 0, 0, 0, 0, 0, 0 ]
arr3.fill(7,3,5) //fill 7 from arr3[3] - arr3[5]
console.log(arr3)//Array(7) [ 0, 0, 0, 7, 7, 0, 0 ]
arr3.fill(9,2)//fill 9 from arr3[2]
console.log(arr3)//Array(7) [ 0, 0, 9, 9, 9, 9, 9 ]

//Array.from() 
//create an array vy passing length object and a callback function
const arr4 = Array.from({length: 7}, () => 1)
console.log(arr4)//Array(7) [ 1, 1, 1, 1, 1, 1, 1 ]

//const arr5 = Array.from({length:5}, (currentElement, index) => index + 1)
const arr5 = Array.from({length:5}, (_, index) => index + 1)
console.log(arr5)//[ 1, 2, 3, 4, 5 ]
console.log(Array.from({length:5}, (_,index) => index))//[ 0, 1, 2, 3, 4 ]

//with()
//// Create new array based on original
//if you want to change an element without modify the original array
const originalMovements = [1, 2, 3, 4, 5]
const newMovement = originalMovements.with(3, 300) //position 3, change to 300
console.log(newMovement)//[ 1, 2, 3, 300, 5 ]
console.log(originalMovements)//[ 1, 2, 3, 4, 5 ]

// Return Length
// Create a function returnLength that takes an array as its only parameter, 
// then returns the length of the array as a number, or 'the array is empty' if there are no elements in the array.
// returnLength([1,2,3,4])
console.log([1,2,3,4 ].length ? [ 1,2,3,4].length : 'the array is empty')//4

const returnLength = array => array.length === 0 ? 'the array is empty': array.length
console.log(returnLength([1,2,3,4]))//4
console.log(returnLength(['a']))//1
console.log(returnLength([]))//'the array is empty'

// Sports Lenghts
// Create a function addSportsLengths that takes an array of objects.
// Each object contains an array of sports.
// The function should add a property sportsLength to each object, with the length of its sports array.
// addSportsLengths([{'name':'John','sports':['football']},{'name':'Alice','sports':['tennis','golf']}])
const addSportLength = data => data.map(d => {
  d.sportsLength = d.sports.length
  return d
})
console.log(addSportLength([{name:'John',sports:['football']},{name:'Alice',sports:['tennis','golf']}]))//[{ name: 'John', sports: [ 'football' ], sportsLength: 1 },{ name: 'Alice', sports: [ 'tennis', 'golf' ], sportsLength: 2 }]
console.log(addSportLength([{name:'Bob',sports:[]}]))//[ { name: 'Bob', sports: [], sportsLength: 0 } ]

// Reverse Array
// Create a function reverseArray that takes an array and returns the array reversed.
const reverseArray = array => array.reverse()
console.log(reverseArray([1,2,3,4])) //[ 4, 3, 2, 1 ]
console.log(reverseArray(['a','b','c'])) //[ 'c', 'b', 'a' ]

// Remove Empty Spots
// Create a function removeEmptySpots that takes an array as a parameter.
// The array may have a falsy value at the beginning or at the end (or both).
// The function should remove these falsy values and return the clean array.
// hint: (else if) removes only the first empty spot if it exists, 
//while two separate if statements removes both the first and last empty spots if they exist independently.
const removeFalsy = array => {
  const noFalsyArr = [...array] //avoid mutating the array
  if (!noFalsyArr[0]) noFalsyArr.shift()
  if (!noFalsyArr[noFalsyArr.length-1]) noFalsyArr.pop()
  return noFalsyArr
}
console.log(removeFalsy([0,2,3,4,0]))//[ 2, 3, 4 ]
console.log(removeFalsy([null,'a','b','c']))//[ 'a', 'b', 'c' ]
console.log(removeFalsy([10,11,0,50,false]))//[ 10, 11, 0, 50 ]
console.log(removeFalsy([0,100,'a','b',50,null]))//[ 100, 'a', 'b', 50 ]

// String Repeat
// Create a function stringRepeat that takes a number and a string, then returns the string repeated as many times as the number.
// stringRepeat(5, 'hi') // 'hihihihihi'
// stringRepeat(2, 'hola')
const repeatStr = (times, str) => Array.from({length: times}, () => str).join('')
console.log(repeatStr(5, 'hi')) //'hihihihihi'
console.log(repeatStr(2, 'hola')) //'holahola'

const repeatString = (times,str) => new Array(times).fill(str).join('')
console.log(repeatString(5, 'hi'))//'hihihihihi'
console.log(repeatString(3, 'hola'))//'holaholahola'

const stringRepeat = (number,string) => {
    let output = [] 
        for (let i = 0; i < number; i++) {
            output.push(string)
        }
        return output.join('')
}
console.log(stringRepeat(5, 'hi'))//'hihihihihi'
console.log(stringRepeat(2, 'hola'))//'holahola'
