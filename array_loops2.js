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
function checkAndTransform(numbers, value) {
    const hasValue = numbers.some(n => n > value)
    const output = numbers.map(n => hasValue ? n * 2 : n)
    return output
}
console.log(checkAndTransform([1,4,6,8],5));
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
//     if (filterLocation) {
//         const priceAndPlace = houses.every(p => p.price < givenPrice)
//         return priceAndPlace
//     } else {
//         return false
//     }
// }
function searchHouses(houses, givenPrice, givenPlace) {
    const filterLocation = houses.every(house => house.location.includes(givenPlace))
    const filterPrice = filterLocation ? houses.every(p => p.price < givenPrice) : false
    return filterPrice
}
console.log(searchHouses([{'price':100,'location':'Koh Phangan'},{'price':50,'location':'Koh Samui'}],150,'Koh'))//true
console.log(searchHouses([{'price':100,'location':'Koh Phangan'},{'price':50,'location':'Koh Samui'}],150,'Bali'))//false
console.log(searchHouses([{'price':100,'location':'Koh Phangan'},{'price':50,'location':'Koh Samui'}],90,'Koh'))//false
console.log(searchHouses([{'price':100,'location':'Bali'},{'price':80,'location':'Koh Samui'}],90,'Bali'))//false


