// Every
// The every() method in JavaScript is a powerful array function that checks whether all elements in an array pass a test defined 
// by a provided function. It’s incredibly useful for validating all elements of an array against a single condition.
// Before every()
// Before the advent of every(), checking every element in an array typically involved a loop with a conditional statement.
const numbers = [2, 4, 6, 8, 10]
// const allEven = numbers => {
//     let even = true
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 !== 0) {
//             even = false
//             break
//         }}
//     return even
// }

const allEven = numbers => numbers.every(n => n % 2 === 0)
console.log(allEven(numbers)) //true

//Check if everyone is an adult
const ages = [22, 19, 24, 29, 30]
// const allAdults = ages => {
//     let adult = true
//     for (let i =0; i < ages.length; i++){
//         if (ages[i] < 18) {
//             adult = false
//             break
//         }
//     }
//     return adult
//}
let allAdults = ages => ages.every(age => age >= 18)
console.log(allAdults(ages))

// Create a JavaScript function named allPass.
// This function will take two parameters: an array of students scores and a numerical threshold.
// It should check whether all numbers in the array are greater than the given threshold (all students have passed the exam).
// The function should return true if all numbers meet this criterion, or false otherwise.
const allPass = (scores,value) => scores.every(score => score > value)
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