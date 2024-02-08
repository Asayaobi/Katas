// Create a function addSportsLengths that takes an array of objects.
// Each object contains an array of sports.
// The function should add a property sportsLength to each object, with the length of its sports array.

function addSportsLengths(users) {
    for (let user of users) {
        user.sportsLenght = user.sports.length
    }
    return users
}

console.log(addSportsLengths([{'name':'John','sports':['football']},{'name':'Alice','sports':['tennis','golf']}]));


// Create a function removeEmptySpots that takes an array as a parameter.
// The array may have a falsy value at the beginning or at the end (or both).
// The function should remove these falsy values are return the clean array.

function removeEmptySpots(arr) {
    for (let spot of arr) {
        if (!spot) {
            arr.pop() // doesn't work
        }
    }
    return arr
}

console.log(removeEmptySpots([0,2,3,4,0])) //[2,3,4]
console.log(removeEmptySpots([null,'a','b','c'])) //['a','b','c']
console.log(removeEmptySpots([10,11,0,50,false]));

// Create a function stringRepeat that takes a number and a string, then returns the string repeated as many times as the number.

// Tests:

// stringRepeat(5, 'hi') // 'hihihihihi'
// stringRepeat(2, 'hola') // 'holahola'

function stringRepeat(number, string) {
    let array = []
    let result
    for (let i = 0; i < number; i++) {
        array.push(string)
    }
    result =array.join()
    return result
}

console.log(stringRepeat(5, 'hi'));
console.log(stringRepeat(2, 'hola')) // 'holahola');