// Your task is to write a JavaScript function that uses a "for" loop to extract the first n elements from an array of numbers and return them in descending order.
// The function, named extractAndSort, will take two parameters: an array of numbers and a numerical value n indicating how many elements to extract.
// Before returning the output array, convert it into a string.


// function extractAndSort(numbers,n) {
// let result = []
//     for (let i = n - 1; i >= 0; i = i - 1){
//         result.push(String(numbers[i]))
//     }
//     return result
// }

function extractAndSort(numbers, n) {
let result = ''
    for (i = n -1; i <= 0; i - 1) {
        result = result + String(numbers[i])
    }
    return result
}

console.log(extractAndSort([1, 2, 3, 4, 5, 6], 3))
console.log(extractAndSort([10, 20, 30, 40, 50, 60], 4))
console.log(extractAndSort([5, 15, 20], 2))