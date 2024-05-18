// Sort
// The sort() method in JavaScript is a built-in function used to sort the elements of an array in place. 

// By default, sort() converts elements to strings and compares their UTF-16 character sequences. 
// This works well for strings but can lead to unexpected results when sorting numbers.
const numbers = [10, 5, 40, 25]
numbers.sort()
console.log(numbers) // [10, 25, 40, 5]