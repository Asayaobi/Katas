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


//at method
const arr = [1,2,3,4,5]

console.log(arr[0])//1
console.log(arr.at(0))//1

//log the last element of an array
console.log(arr[arr.length-1])//5
console.log(arr.slice(-1))//[ 5 ]
console.log(arr.slice(-1)[0])// 5 
console.log(arr.at(-1))//5

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
//sum all of the money movement from all account
const addmovements = accounts
    .map(account => account.movements)
//[ [ 200, 450, -400, 3000, -650, -130, 70, 1300 ],[ 5000, 3400, -150, -790, -3210, -1000, 8500, -30 ],[ 200, -200, 340, -300, -20, 50, 400, -460 ],[ 430, 1000, 700, 50, 90 ]]
    .flat()
//[200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000,8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]
    .reduce((acc,mov) => acc+mov,0)
console.log(addmovements)//17840

//with flat map
const addWithFlatMap = accounts
    .flatMap(account => account.movements)
//[200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000,8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]
    .reduce((acc,mov) => acc+mov,0)
    console.log(addWithFlatMap)//17840











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


//Steven wants you to improve his tip calculator, using the same rules as before 
// tip 15% of the bill if the bill value is between 50 and 300, 
// and if the value is different, the tip is 20%.


//Write a function calcTip that takes any bill value as an input and returns the corresponding tip, 
// calculated based on the rules above 
// Test the function using a bill value of 100.

//And now let's use arrays! So, create an array called bills containing the test data below.

//Create an array called tips containing the tip value for each bill, 
// calculated from the function you created before.

//BONUS: Create an array totals containing the total values, so the bill + tip.

//TEST DATA: 125, 555, and 44.

const calcTip = bill => {
    if(bill >= 50 && bill <= 300){
            return bill*0.15
    } else {
            return bill*0.2
    }
}

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const total = [(bills[0]+calcTip(bills[0])),(bills[1]+calcTip(bills[1])),(bills[2]+calcTip(bills[2]))]
console.log(tips) //[18.75, 111, 8.8]
console.log(total) //[143.75, 666, 52.8]