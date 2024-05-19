// Destructuring Objects
// When you have an object with several properties, and you want to create variables for these properties
const person = {
    name: 'Alice',
    age: 25,
    occupation: 'Developer'
}
// Traditional Way Without Destructuring:
// const name = person.name
// const age = person.age
// const occupation = person.occupation

//with Destructuring
const {name, age, occupation} = person
console.log(name) //'Alice'
console.log(age)//25
console.log(occupation) //'Developer'

// You can also set default values that will be used if the property does not exist in the object.
const personA = {
    nameA: 'Alice',
    ageA: 25,
    occupation: 'Developer'
}
const { nameA, ageA, country = 'Unknown' } = personA
console.log(nameA) //'Alice'
console.log(ageA)//25
console.log(country) //'Unknown'

// Without Destructuring
// function addScores(scores) {
//     let score1 = scores.score1
//     let score2 = scores.score2
//     if (!score1) {
//         score1 = 1
//     }
//     if (!score2) {
//         score2 = 1
//     }
//     return score1 + score2
// }
// addScores({ score1: 10, score2: 20 }) 

// Without Destructuring
const addScores = scores => {
    let {score1 = 1, score2 = 1} = scores
    return score1 + score2
    }
console.log(addScores({ score1: 10, score2: 20 }) ) //30
console.log(addScores({ score1: 10}) ) //11

// Destructuring Arrays
// Array destructuring works similarly, allowing you to unpack values from arrays.

// Traditional Way Without Destructuring:
const colors = ['red', 'green', 'blue']
const firstColor = colors[0]
const secondColor = colors[1]
// With Destructuring: you can also skip over element
const [firstColour, ,thirdColour] = colors
console.log(firstColour) //'red'
console.log(thirdColour) //'blue'

/////////////////////////////////////////////

// Spread Operator
// The spread operator is represented by three dots (...). It can be used in different contexts:

// In function calls: myFunction(...iterableObj)
// In array literals: [...iterableObj, 'newItem1', 'newItem2']
// In object literals: {...obj, newProp: 'value'}
// Using Spread Operator with Arrays
// The spread operator can be used to combine or clone arrays in a more concise way.

// Combining Arrays:
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArr = [...arr1, ...arr2];
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]
