// Your task is to create a JavaScript function named addAge.
// This function should take two parameters: an object and a number.
// The function should add the provided number to the object as age and return the updated object.

function addAge(obj, number) {
    obj.age = number
    return obj
}

console.log(addAge({'name':'Alice'},25))
console.log(addAge({'name':'Bob','job':'coder'},51));

// Your task is to create a JavaScript function named addAges.
// This function should take two parameters: an array of objects and an array of numbers of equal length.
// The function should add the numbers in the second array to the objects as age, following the corresponding index, and return the updated array of objects

function addAges(objects, numbers) {
let i = 0
    for (let object of objects) {
        object.age = numbers[i]
        i = i + 1
    }
    return objects
}

console.log(addAges([{'name':'Alice'},{'name':'Bob'}],[21,51]))
console.log(addAges([{'name':'Tom'},{'name':'Tim'},{'name':'Tam'}],[30,31,32]));