// write function that uses a "for" loop to extract the first n elements from an array of numbers and return them in descending order.
// The function, named extractAndSort, will take two parameters: an array of numbers and a numerical value n indicating how many elements to extract.
// Before returning the output array, convert it into a string.

// let arrayString = String([0,9,9])
// console.log(String([3,2,1]))
// console.log(arrayString)

// this one also works
// function extractAndSort(numbers, n) {
// let result = []
//     for (i = n - 1; i >= 0; i = i - 1) {
//         result.push(numbers[i])
//     }
//     return String(result)
// }


function extractAndSort (numbers, n) {
    let result = []
    let c = n - 1
    for (let i = 0; i <= n - 1; i = i + 1) {
        result[i] = numbers[c]
        c = c - 1
    }
    return String(result)
}
console.log(extractAndSort([1, 2, 3, 4, 5, 6], 3))
console.log(extractAndSort([10, 20, 30, 40, 50, 60], 4))
console.log(extractAndSort([5, 15, 20], 2))