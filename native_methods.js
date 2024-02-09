// Create a function returnLength that takes an array as its only parameter, then returns the length of the array as a number, or 'the array is empty' if there are no elements in the array.

// function returnLength(array) {
//     return array.length
// }

const returnLength = arr => arr.length

console.log(returnLength([1,2,3,4]));
console.log(returnLength(['a']));

function greet(name) {
    if (name === 'Johnny') 
        return 'Hello my love'
     else 
        return 'Hello ' + name + '!'
}

console.log(greet('Johnny'));
console.log(greet('Tom'));

// function invert(numbers) {
//     let neg = 0
//     let outputArr = []
//     for (let number of numbers) {
//         neg = number * (-1)
//         outputArr.push(neg)
//     }
//     return  outputArr
// }

function invert(array) {
    let convertNumber = 0
    let output = []
    for (let i = 0; i < array.length; i++) {
       convertNumber = array[i] * -1
        output.push(convertNumber)
    }
    return output
}

console.log(invert([1,2,3,4,5]));
console.log(invert([1,-2,3,-4,5]));
console.log(invert([]));