// Create a JavaScript function called findSmallestNumber.
// This function should take between 2 and 4 numbers as its parameters and return the smallest number.
// Use the correct Math method.

// this one works for 4 numbers
// function findSmallestNumber(a, b, c, d) {
//     let smallest = Math.min(a, b, c, d)
//     return smallest
// }

// This one hasn't add the case when a, b, c, d = 0
// function findSmallestNumber(a, b, c, d) {
// let smallest
//     if (c === undefined && d === undefined) {
//         smallest = Math.min(a, b)
//         return smallest
//     } else if (d === undefined) {
//         smallest = Math.min(a, b, c)
//         return smallest
//     } else if (a && b && c && d) {
//         smallest = Math.min(a, b, c, d)
//         return smallest
//     } else {
//         return 'please pass 2 to 4 numbers'
//     }
// }

function findSmallestNumber(a, b, c, d) {
let smallest
    if (c === undefined && d === undefined) {
        smallest = Math.min(a, b)
        return smallest
    } else if (d === undefined) {
        smallest = Math.min(a, b, c)
        return smallest
    } else {
        smallest = Math.min(a, b, c, d)
        return smallest
    }
}

console.log(findSmallestNumber(2,71,5,3.9));
console.log(findSmallestNumber(20,80,-5.5));
console.log(findSmallestNumber(8,1));
console.log(findSmallestNumber(2,0,5,3.9));
