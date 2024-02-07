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

// let sum = 0
// for (let number of a.array1) {
//     if (number >= 0) {
//         sum = sum + number
//     }
// }
// for (number of a.array2) {
//     if (number >= 0) {
//         sum = sum + number
//     }
// }

// console.log(sum)
 function sumPositiveTest(obj) {
let sum = 0
    for (let num of obj.array1) {
        if (num >= 0) {
            sum = sum + num
        }
    }
    for (num of obj.array2) {
        if (num >= 0) {
            sum = sum + num
        }
    }
    return sum
 }
 console.log(sumPositiveTest(a))
 console.log(sumPositiveTest(b))
//1. the array a properties
// console.log(a)
//2. get the value of array1 and array2
// console.log(a.array1)
// console.log(a.array2)

//3. loop the object to get the value of array1 and array2?


// sum the positive in the array1

// for (let number of a.array1) {
//     let sumArray1 = 0
//     if (number >= 0) {
//         sumArray1 = sumArray1 + number
//     }
//     console.log(sumArray1)
// }
// // sum the positive in the array2
// for (let number of a.array2) {
// let sumArray2 = 0
//     if (number >= 0) {
//         sumArray2 = sumArray2 + number
//     }
//     console.log(sumArray2)
// }
// add sum of array1 and 2 together
    
    
function sumPositiveNumbers(obj) {
let totalSum = 0
    for (let number of obj.array1) {
        if (number >= 0) {
            totalSum = totalSum + number
        }
    }
    for (number of obj.array2) {
        if (number >= 0) {
            totalSum = totalSum + number
        }
    }
    return totalSum
}
console.log(sumPositiveNumbers(a))
console.log(sumPositiveNumbers(b))







