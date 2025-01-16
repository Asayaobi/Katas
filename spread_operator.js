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

const colors = ['red', 'green', 'blue']
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

//Iterables: arrays, strings, maps, sets BUT NOT objects
const firstname = 'Jonas'
const fullName = [...firstname, '', 'J', '.']
console.log(fullName)//['J','o','n','a','s','','J','.']

//Notes: spread operator doesn't work on template literal ex. ${...firstname} because it doesn't expect multiple values

const restaurant = {
    name: 'Italian World',
    city: 'Jackson Ville',
    orderPasta: function(ingr1, ingr2, ingr3){
        return `here is your pasta with ${ingr1}, ${ingr2}, ${ingr3}`
    },
}

// const ingredients = [
//     prompt('What kind of pasta would you like?'),
//     prompt('What kind of meat would you like?'),
//     prompt('What kind of topping would you like?')
// ]
const ingredients = ['spaghetti', 'beef', 'bolognese']
console.log(restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]))//'here is your pasta with spaghetti, beef, bolognese'
console.log(restaurant.orderPasta(...ingredients))//'here is your pasta with spaghetti, beef, bolognese'