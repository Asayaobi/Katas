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