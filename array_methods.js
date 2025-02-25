// Push
// Mutate original
// The .push() method adds an element to the end of an array.
// Examples

const fruits = ['apple', 'banana']
fruits.push('orange')
console.log(fruits) 

// Pop
// Mutate original
// The .pop() methods removes the 'last' element from an array and returns that element.
// Examples

const numbers = [1, 2, 3]
const lastNumber = numbers.pop()
console.log(lastNumber) // 3
console.log(numbers) // [1, 2]

// Shift
// Mutate original
// The .shift() method removes the 'first' element from an array and returns that element.
// Examples

const colors = ['red', 'green', 'blue']
const firstColor = colors.shift()
console.log(firstColor) // 'red'
console.log(colors) // ['green', 'blue']

// Unshift()
// Mutate original
// The unshift() method adds an element to the beginning of an array.
// Examples

const ages = [25, 30]
ages.unshift(20)
console.log(ages) //[20,25,30]

//includes()
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
arr3.fill(7,3,5)
console.log(arr3)//Array(7) [ 0, 0, 0, 7, 7, 0, 0 ]
arr3.fill(9,2)
console.log(arr3)//Array(7) [ 0, 0, 9, 9, 9, 9, 9 ]

//Array.from() 
//create an array vy passing length object and a callback function
const arr4 = Array.from({length: 7}, () => 1)
console.log(arr4)//Array(7) [ 1, 1, 1, 1, 1, 1, 1 ]

//const arr5 = Array.from({length:5}, (currentElement, index) => index + 1)
const arr5 = Array.from({length:5}, (_, index) => index + 1)
console.log(arr5)//[ 1, 2, 3, 4, 5 ]

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


///////////////////////////////////////
// Coding Challenge

/*

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/


const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
]

//1. Store the average weight of a "Husky" in a variable "huskyWeight"
let huskyWeight = breeds.find(dog => dog.breed === 'Husky').averageWeight
console.log(huskyWeight)//26

//2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
let dogBothActivities  = breeds.find(dog => 
  (dog.activities.includes('running') && dog.activities.includes('fetch')))
  .breed
console.log(dogBothActivities)//'Dalmatian'

//3. Create an array "allActivities" of all the activities of all the dog breeds
const allActivities = breeds.flatMap(dog => dog.activities)
console.log(allActivities)
//['fetch', 'swimming', 'running', 'fetch', 'agility', 'swimming', 'fetch', 'digging','fetch', 'running', 'agility', 'swimming', 'sleeping', 'agility', 'fetch']

//4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
const uniqueActivities = [...new Set(allActivities)]
console.log(uniqueActivities)// [ 'fetch', 'swimming', 'running', 'agility', 'digging', 'sleeping' ]

//5. Many dog breeds like to swim. What other activities do these dogs like? 
// Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
const swimmingAdjacent = [...new Set(
  breeds
    .filter(dog => dog.activities.includes('swimming'))
    .flatMap(dog => dog.activities)
    .filter(activity => activity !== 'swimming')
)]
console.log(swimmingAdjacent)//[ 'fetch', 'running', 'agility' ]

//6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
console.log(breeds.every(dog => dog.averageWeight >= 10)) //true

//7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".
console.log(breeds.some(dog => dog.activities.length >= 3)) //true

//What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.
const getFetchWeight = breeds
  .filter(dog => dog.activities.includes('fetch'))
  .map(dog => dog.averageWeight)
console.log(getFetchWeight)//[ 32, 24, 28, 12, 18 ]
const maxWeight = (Math.max(...getFetchWeight)) //32

const heaviestBreed = breeds.find(dog => dog.averageWeight === maxWeight).breed
console.log(heaviestBreed)//'German Shepherd'


///////////////////////////////////////
// Coding Challenge #5

/* 
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array.
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
]

//1. Loop over the array, calculate the recommended food portion (recFood) and add it to the object as a new property.
dogs.forEach(dog => {
  dog.recommendedFood = Math.floor(dog.weight ** 0.75 * 28)
})
console.log(dogs)
// [{ weight: 22,curFood: 250,owners: [ 'Alice', 'Bob' ],recommendedFood: 284},{weight: 8,curFood: 200,owners: [ 'Matilda' ],recommendedFood: 133},..]
  
//2. Find Sarah's dog and log to the console whether it's eating too much or too little. 
// HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'))
//{weight: 13,curFood: 275,owners: [ 'Sarah', 'John', 'Leo' ],recommendedFood: 191.69710117664528}
console.log(sarahsDog.curFood > sarahsDog.recommendedFood ? 'too much' : 'too little')//'too much'

//3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
const ownersTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners)
console.log(ownersTooMuch)//[ 'Matilda', 'Sarah', 'John', 'Leo' ]

const ownersTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners)
console.log(ownersTooLittle)//[ 'Alice', 'Bob', 'Joe', 'Michael' ]

//4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersTooMuch.join(' and ')}'s dogs eat too much!`)//'Matilda and Sarah and John and Leo\'s dogs eat too much!'
console.log(`${ownersTooLittle.join(' and ')}'s dogs eat too little!`)//'Alice and Bob and Joe and Michael\'s dogs eat too little!'

const ownersToStrings = owners => {
  let str = owners.slice()
  str[str.length-2] = `${str[str.length-2]} and ${str[str.length-1]}`
  str.splice(-1)
  return str.join(', ')
}
console.log(`${ownersToStrings(ownersTooMuch)}'s dogs eat too much!`)//'Matilda, Sarah, John and Leo\'s dogs eat too much!'
console.log(`${ownersToStrings(ownersTooLittle)}'s dogs eat too little!`)//'Alice, Bob and Michael\'s dogs eat too little!'

//5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
console.log(dogs.some(dog => dog.recommendedFood === dog.curFood)) //true

//6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
console.log(dogs.every(dog => dog.curFood > (dog.recommendedFood * 0.90) && dog.curFood < (dog.recommendedFood * 1.10))) //false

const eatingOkay = dog => dog.curFood > (dog.recommendedFood * 0.90) && dog.curFood < (dog.recommendedFood * 1.10)
console.log(dogs.every(eatingOkay))//false

//7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
const dogsOkay = dogs.filter(dog => dog.curFood > (dog.recommendedFood * 0.90) && dog.curFood < (dog.recommendedFood * 1.10))
console.log(dogsOkay)

console.log(dogs.filter(eatingOkay))
//[{weight: 18,curFood: 244,owners: [ 'Joe' ],recommendedFood: 244},{weight: 32,curFood: 340,owners: [ 'Michael' ],recommendedFood: 376}]

/*8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
const dogsGroups = Object.groupBy(dogs, dog => {
  if(dog.curFood > dog.recommendedFood){
    return 'too-much'
  } else if (dog.curFood < dog.recommendedFood){
      return 'too-little'
    } else {
      return 'exact'
    }
  }
)
// console.log(dogsGroups)
 {
    "too little": [
        {"weight": 22,"curFood": 250,"owners": ["Alice", "Bob"],"recommendedFood": 284},
        {"weight": 18,"curFood": 244,"owners": ["Joe"],"recommendedFood": 244},
        {"weight": 32,"curFood": 340,"owners": ["Michael"], "recommendedFood": 376}
    ],
    "too-much": [
        {"weight": 8,"curFood": 200,"owners": ["Matilda"],"recommendedFood": 133},
        {"weight": 13,"curFood": 275,"owners": ["Sarah","John","Leo"], "recommendedFood": 191}
    ]
}*/

/*9. Group the dogs by the number of owners they have
const ownersGroup = Object.groupBy(dogsA,
  dog => `${dog.owners.length} owners` 
)
console.log(ownersGroup)
{
  "2 owners": [
      {"weight": 22,"curFood": 250,"owners": ["Alice","Bob"],"recommendedFood": 284}],
  "1 owner": [
      {"weight": 8,"curFood": 200,"owners": ["Matilda"],"recommendedFood": 133},
      {"weight": 18,"curFood": 244,"owners": ["Joe"],"recommendedFood": 244.68785294049098},
      {"weight": 32,"curFood": 340,"owners": ["Michael"],"recommendedFood": 376.72159403366413}
  ],
  "3owners": [
      {"weight": 13, "curFood": 275, "owners": [ "Sarah", "John","Leo"],"recommendedFood": 191.69710117664528}
  ]
}*/

//10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!
const sortedDogsByFood = dogs.toSorted((a,b)=> a.recommendedFood - b.recommendedFood)
console.log(sortedDogsByFood)
//[{weight: 8,curFood: 200,owners: [ 'Matilda' ],recommendedFood: 133},{weight: 13,curFood: 275,owners: [ 'Sarah', 'John', 'Leo' ],recommendedFood: 191,{weight: 18,curFood: 244,owners: [ 'Joe' ],recommendedFood: 244},..