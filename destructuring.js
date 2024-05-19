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

