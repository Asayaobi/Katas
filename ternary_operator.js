// Ternary operator example

let score = 85
// let grade
//     if (score >= 90) {
//         grade = 'A'
//     } else if (score > 75) {
//         grade = 'B'
//     } else {
//         grade = 'C'
//     }
let grade = score >= 90 ? 'A' : score > 75 ? 'B' : 'c'

console.log(grade)

//example with function

function isEven(number) {
    return number % 2 === 0 ? true : false
}

console.log(isEven(20))