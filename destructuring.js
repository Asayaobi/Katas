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

const users = {
    email: 'a@a.com'
}
const {firstname = 'guest', email} = users
console.log(`Hello ${firstname}`)

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

const restaurant = {
    name: 'Pizza Hut',
    city: 'Jackson Ville',
    categories: ['Italian', 'Pizzaria', 'Vegetarian', 'Vegan'],
    crust : ['Italian Pan', 'Crispy Pan', 'Cheesy Pan'],
    menu: ['Double Pepperoni', 'Four Cheese', 'BBQ', 'Sausage Lover'],
    order: function(crustIdx, menuIdx){
        return [this.crust[crustIdx], this.menu[menuIdx]]
    }
}

let [, , c] = restaurant.categories
console.log(c)//'Vegetarian'

let [, b]= restaurant.categories
console.log(b)//'Pizzaria'

c = 'Children'
console.log(c)//'Children'
console.log(restaurant.categories)//['Italian', 'Pizzaria', 'Vegetarian', 'Vegan']

console.log(restaurant.order(0,2))//['Italian Pan', 'BBQ']
const [breadCrust, pizzaTopping] = restaurant.order(0,2)
console.log(breadCrust, pizzaTopping)//['Italian Pan', 'BBQ']


const nestedArr = ['log1', 2, [3, 'log4']]
const [l1, ,[, l4]] = nestedArr
console.log(l1, l4) //['log1','log4']

//default value prevents undefined
const [x = 1, y = 1, z = 1] = [9, 1]
console.log(x,y,z) //[9,1,1]
/////////////////////////////////////////////

// Spread Operator
// The spread operator is represented by three dots (...). It can be used in different contexts:

// In function calls: myFunction(...iterableObj)
// In array literals: [...iterableObj, 'newItem1', 'newItem2']
// In object literals: {...obj, newProp: 'value'}
// Using Spread Operator with Arrays
// The spread operator can be used to combine or clone arrays in a more concise way.

// Combining Arrays:
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const combinedArr = [...arr1, ...arr2]
const doubleArr = [...arr2,...arr2]
console.log(combinedArr) // Output: [1, 2, 3, 4, 5, 6]
console.log(doubleArr)// Output: [4, 5, 6, 4, 5, 6]

// Cloning Arrays:
const originalArr = ['a', 'b', 'c']
const clonedArr = [...originalArr]
console.log(clonedArr) // Output: ['a', 'b', 'c']

// Spread Operator in Function Arguments
// The spread operator can also be used to pass the elements of an array as arguments to a function.
function sum(x, y, z) {
    return x + y + z
}
const numbers = [1, 2, 3]
console.log(sum(...numbers)) // Output: 6

// Cloning Objects:
const originalObj = { a: 1, b: 2 }
const clonedObj = { ...originalObj }
console.log(clonedObj) // Output: { a: 1, b: 2 }

// Merging Objects:
const obj1 = { a: 1, b: 2 }
const obj2 = { b: 3, c: 4 }

const mergedObj = { ...obj1, ...obj2 }
console.log(mergedObj) // Output: { a: 1, b: 3, c: 4 }
//Note that properties in obj2 will overwrite properties in obj1 with the same key.

// Using Spread with Array Destructuring in sorting
const [firstColor1, ...otherColors] = colors
// Here, firstColor1 is 'red', and otherColors is an array containing the rest of the colors (['green', 'blue']).
console.log(colors) // ['red', 'green', 'blue']
console.log(otherColors) // ['green', 'blue']

//if you want grren first
const getGreenFirst = ['green', ...colors.filter(c => c != 'green')]
console.log(getGreenFirst)
//get any color first
const getFirstColor = value => [value, ...colors.filter(c => c != value)]
console.log(getFirstColor('blue'))