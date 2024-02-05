// Your task is to write a JavaScript function named sumNumbers that uses a for loop to sum up all numbers from 1 to a given number n.
// This function, should take one parameter n and return the sum of all numbers from 1 up to (and including) n.

function sumNumbers(n) {
let sum = 0
    for (let c = 0; c <= n; c = c + 1) {
        sum = sum + c
    }
    return sum
}

console.log(sumNumbers(5))
console.log(sumNumbers(30))
console.log(sumNumbers(0))
