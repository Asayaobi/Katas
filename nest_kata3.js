function isEven(num) {
        return num % 2 === 0
    }


function sumEvenNumbers(numbers) {
let sum = 0
    for (let num of numbers) {
        if (isEven(num)) {
            sum = sum + num
        }
    }
    return sum
}

console.log(sumEvenNumbers([1, 20, 5, 4]))
console.log(sumEvenNumbers([0, 100, -20, 5.5, -10]))
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]))







// function isEven(a) {
//     if (a % 2 === 0) {
//         return true
//     }
// }

// function sumEvenNumbers(numbers) {
// let sum = 0
//     for (let num of numbers) {
//         if (isEven(num)) {
//             sum = sum + num
//         }
//     }
//     return sum
// }