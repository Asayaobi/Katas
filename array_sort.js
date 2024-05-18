// Sort
// The sort() method in JavaScript is a built-in function used to sort the elements of an array in place. 

// By default, sort() converts elements to strings and compares their UTF-16 character sequences. 
// This works well for strings but can lead to unexpected results when sorting numbers.
const numbers = [10, 5, 40, 25]
numbers.sort()
console.log(numbers) // [10, 25, 40, 5]

// Sorting Numbers with sort()
// To sort numbers correctly, you need to provide a comparison function.
numbers.sort((a, b) => a - b)
console.log(numbers) // [5, 10, 25, 40]

// Sorting Objects by a Property:
// You can also sort arrays of objects by a specific property using a comparison function.
const products = [
   { name: 'Laptop', price: 1000 },
   { name: 'Phone', price: 500 },
   { name: 'Tablet', price: 750 }
]
products.sort((a, b) => a.price - b.price)
console.log(products)
// [
//   { name: 'Phone', price: 500 },
//   { name: 'Tablet', price: 750 },
//   { name: 'Laptop', price: 1000 }
// ]

// Refactor Sort
// You are given a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.
// The current implementation sorts the array using a for loop.
// Your task is to refactor this function to use the sort() method instead, for a more efficient and idiomatic approach.
// function sortNumbers(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             if (numbers[i] > numbers[j]) {
//                 let temp = numbers[i];
//                 numbers[i] = numbers[j];
//                 numbers[j] = temp;
//             }
//         }
//     }
//     return numbers;
// }
const sortNumbers = numbers => numbers.sort((a, b) => a - b)
console.log(sortNumbers([6,5,4,1,2,3]))//[1,2,3,4,5,6]
console.log(sortNumbers([20,100,-20,0]))//[-20,0,20,100]

// Sort Names
// Create a sortNames function that takes an array of strings (names) and returns the array sorted alphabetically.
const sortNames = names => names.sort()
console.log(sortNames(['Bob','Alice','David']))//['Alice','Bob','David']
console.log(sortNames(['Xenia','Xander','Xavia']))//['Xander','Xavia','Xenia']