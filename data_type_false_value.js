// create a function to add 2 numbers
// function addNumbers(a, b) {
//     return a + b
// }

//check if values has 'number' value
// function addNumbers(a, b) {
//     if (typeof a === 'number' && typeof b === 'number') {
//         return a + b
//     } 
// }
// console.log(addNumbers(10,1))

// add a condition to convert string value to number
// function addNumbers(a, b) {
//     if (typeof a === 'number' && typeof b === 'number') {
//         return a + b
//     } else if (Number(a) && Number(b)) {
//         a = Number(a)
//         b = Number (b)
//         return a + b
//     }
// }
// console.log(addNumbers('0','2'))


// function addNumbers(a, b) {
//     if (typeof a === 'number' && typeof b === 'number') {
//         return a + b
//     } else if (typeof a === 'string' && typeof b === 'string') {
//         a = Number(a)
//         b = Number(b)
//         return a + b
//     }
// }
// console.log(addNumbers('-2','2'))

// add a condition to include when value 0 is falsy for the case like console.log(addNumbers('0','2'))
function addNumbers(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    } else if (Number(a) || a === '0' && Number(b) || b === '0') {
        a = Number(a)
        b = Number (b)
        return a + b
    }
}
console.log(addNumbers('0','2'))

