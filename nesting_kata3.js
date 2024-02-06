// Your task is to create a function named sumPositiveNumbers.
// This function should take an object as its parameter.
// Within this object, there are two properties array1 and array2, each containing an array of numbers.
// The function should calculate the sum of all positive numbers from both arrays combined and return the total sum.

let a = {
    array1: [1, -3, 5, 7],
    array2: [10, -2, 4, -5]
}
// sumPositiveNumbers(a) // 27

let b = {
    array1: [10, 20, -9],
    array2: [200, 1]
}
// sumPositiveNumbers(b) // 241

function sumPositiveNumbers(obj) {
let sum = 0
    for (let property of obj) {
        for (let num of property.array1) {
            if (num >= 0) {
                sum = sum + num
            }
        }
        return sum
    }
        }
console.log(sumPositiveNumbers(a))