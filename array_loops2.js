// Create a JavaScript function named checkAndTransform.
// This function will take two parameters: an array of numbers and a threshold value.
// First, it should check if any number in the array is greater than the threshold.
// If such a number exists, then use the map() method to double each number in the array.
// The function should return the transformed array if there's a number greater than the threshold, or the original array otherwise.
// checkAndTransform([1,4,6,8],5)	[2,8,12,16]
// let nums = [1,4,6,8]
// let value = 5
// const checkValue = nums.filter( num => num > value ? num * 2 : num)
// console.log(checkValue);
// const checkAndTransform = checkValue.map(num => num * 2)
// console.log(checkAndTransform);


// Create a JavaScript function named sumOfEvenNumbers.
// This function will take an array of numbers as its input.
// It should first use the filter() method to keep only the even numbers from the array.
// Then, use the reduce() method to calculate and return the sum of these even numbers.
let numbersH = [1,2,3,4,5,6]
let keepNumber = numbersH.filter(n => n % 2 === 0)
let sumOfEvenNumbers = keepNumber.reduce((acc, even) => acc + even)

console.log(keepNumber);
console.log(sumOfEvenNumbers);

// Create a function called containsHighValue.
// This function will take an array of numbers and check if the array contains any number greater than a specified value.
// The function should use the some() method to perform this check and return true if such a number exists, or false otherwise.
function containsHighValue(numbers, value){
    const checkNumbers = numbers.some(number => number > value)
    return checkNumbers
}

console.log(containsHighValue([1,2,3,4,5],4)) // true;
console.log(containsHighValue([10,100,1000],55)); // true
console.log(containsHighValue([10,100,1000],2000)); // false


// Create a JavaScript function named checkAndTransform.
// This function will take two parameters: an array of numbers and a threshold value.
// First, it should check if any number in the array is greater than the threshold.
// If such a number exists, then use the map() method to double each number in the array.
// The function should return the transformed array if there's a number greater than the threshold, or the original array otherwise.
// function checkAndTransform(numbers, value) {
//     const hasValue = numbers.some(n => n > value)
//     console.log(hasValue);
//     const output = numbers.map(n => hasValue ? n * 2 : n)
//     return output
// }
// function checkAndTransform(numbers, value) {
//     let transformNumbers = []
//     const checkValue = numbers.some(n => n > value)
//     console.log(checkValue);
//     // if (checkValue) {
//     //     const doubleNumber = numbers.map(n => n *= 2)
//     //     transformNumbers.push(doubleNumber)
//     //     return transformNumbers
//     // } else {
//     //     return numbers
//     // }
// }

function checkAndTransform(numbers, value) {
    const checkNumber = numbers.some(number => number > value)
        if (checkNumber) {
            const transformNumbers = numbers.map(number => number * 2)
            return transformNumbers
        } else {
            return numbers
        }}

console.log(checkAndTransform([1,4,6,8],5))//[2,8,12,16]
console.log(checkAndTransform([2,3,4],10));

// Create a JavaScript function named allPass.
// This function will take two parameters: an array of students scores and a numerical threshold.
// It should check whether all numbers in the array are greater than the given threshold (all students have passed the exam).
// The function should return true if all numbers meet this criterion, or false otherwise.
function allPass(scores, passingScore) {
    const failStudent = scores.some(score => score < passingScore)
    return !failStudent
}
console.log(allPass([7,8,8,6,10],5));
console.log(allPass([7,8,8,2],5));
console.log(allPass([10,7,8,10,10,9],5));

// Create a JavaScript function called searchHouses.
// This function should take 3 parameters: an array of houses, a number (price) and a string (location).
// It should return true of all the houses contain the location string in the name of their location 
// and if they all below the price; otherwise return false.

// 1. find location 
// 2. if there's location found, search for the price
// 3. if all of the prices below the given price, return true, else return false

// function searchHouses(houses, givenPrice, givenPlace) {
//     const filterLocation = houses.every(house => house.location.includes(givenPlace))
//     const filterPrice = filterLocation ? houses.every(p => p.price < givenPrice) : false
//     return filterPrice
// }

function searchHouses(array, price, location) {
    const result = array.every(house => house.location.includes(location) && house.price < price)
    return result
}

console.log(searchHouses([{'price':100,'location':'Koh Phangan'},{'price':50,'location':'Koh Samui'}],150,'Koh'))//true
console.log(searchHouses([{'price':100,'location':'Koh Phangan'},{'price':50,'location':'Koh Samui'}],150,'Bali'))//false
console.log(searchHouses([{'price':100,'location':'Koh Phangan'},{'price':50,'location':'Koh Samui'}],90,'Koh'))//false
console.log(searchHouses([{'price':100,'location':'Bali'},{'price':80,'location':'Koh Samui'}],90,'Bali'))//false


// You are provided with a function that takes an array of numbers and calculates the sum of all the numbers.
// Currently, the function uses a for loop to accomplish this.
// Your task is to refactor this function to use the reduce() method instead, to make the code more concise and functional.
// function sumNumbers(numbers) {
//     let sum = 0
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i]
//     }
//     return sum
// }
function sumNumbers(numbers) {
    const sum = numbers.reduce((acc, number) => acc + number)
    return sum
}

console.log(sumNumbers([1,2,3,4,5]));

// Create a JavaScript function named sumOfEvenNumbers.
// This function will take an array of numbers as its input.
// It should first use the filter() method to keep only the even numbers from the array.
// Then, use the reduce() method to calculate and return the sum of these even numbers.

function sumOfEvenNumbersA(numbers) {
    const evenNumbers = numbers.filter(n => n % 2 === 0)
    const sum = evenNumbers.reduce((acc, evenNumber) => acc + evenNumber)
    return sum
}
console.log(sumOfEvenNumbersA([1,2,3,4,5,6]));


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

function sortNumbers(numbers) {
    const ascOrder = numbers.sort((a,b) => a - b)
    return ascOrder
}
console.log(sortNumbers([6,5,4,1,2,3])); //[1,2,3,4,5,6]

// Create a sortNames function that takes an array of strings (names) 
// and returns the array sorted alphabetically.

function sortNames(names) {
    const order = names.sort()
    return order
}
console.log(sortNames(['Bob','Alice','David'])); //	['Alice','Bob','David']
console.log(sortNames(['Xenia','Xander','Xavia'])) //['Xander','Xavia','Xenia'];

// Create a function named filterAndSortBooks.
// This function will take two parameters: an array of book objects and a minimum rating value.
// Each book object contains a title, an author, and a rating. 
// 1. The function should first use the filter() method to keep only the books with a rating greater than or equal to the minimum rating value.
// 2. Then, it should use the sort() method to sort these filtered books in descending order of their ratings.
// The function should return the sorted array of books.
function filterAndSortBooks(books, rating) {
    const filterBooks = books.filter(book => book.rating >= rating)
    console.log(filterBooks);
    const order = filterBooks.sort((a, b) => b.rating - a.rating)
    return order
}
console.log(filterAndSortBooks([{'title':'T','author':'F.','rating':8.5},{'title':'1984','author':'G','rating':9},{'title':'To','author':'He','rating':8.3}],8.4));