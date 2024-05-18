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
const allAdults = ages => ages.every(age => age >= 18)
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
const searchHouses = (houses,price, location) => houses.every(house => house.price < price && house.location.includes(location))
console.log(searchHouses([{'price':100,'location':'Koh Phangan'},{'price':50,'location':'Koh Samui'}],150,'Koh'))//true
console.log(searchHouses([{'price':100,'location':'Koh Phangan'},{'price':50,'location':'Koh Samui'}],150,'Bali'))//false
console.log(searchHouses([{'price':100,'location':'Koh Phangan'},{'price':50,'location':'Koh Samui'}],90,'Koh'))//false
console.log(searchHouses([{'price':100,'location':'Bali'},{'price':80,'location':'Koh Samui'}],90,'Bali'))//false

////////////////////////////////////////

// Reduce
// The reduce() method in JavaScript is a versatile tool for processing and combining all the elements in an array. 
// This method reduces an array to a single value by executing a reducer function provided by the user for each element in the array. 
// It's particularly powerful for aggregating data or computing a cumulative result.
// Before reduce()
const nums = [1, 2, 3, 4, 5]
// const sumNumber = nums => {
//     let sum = 0
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i]
//     }
//     return sum
// }
//with reduce
const sumNumber = nums => nums.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(sumNumber(nums)) //15
console.log([1,2,3].reduce((acc,cur) => acc + cur)) //6
//Reduce does not modifiy the original array, instead, it returns a value.
const originalScores = [10,20,30]
const scoreWithReduce = originalScores.reduce((acc,e)=> acc - e)
console.log(originalScores) //[10,20,30]
console.log(scoreWithReduce) //-40

//get total price
const prices = [29.99, 19.99, 4.99]
const totalPrice = prices => prices.reduce((acc, e) => acc + e)
console.log(totalPrice(prices))// 54.97

//Creating an Object Count
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana']
const fruitsCount = fruits => {
    //creat output[fruit] to set the count with the key fruit in the output
    let output = {}
    for (let fruit of fruits) {
        //Check if the fruit is already in output,  If output[fruit] is truthy 
        //(i.e., the fruit exists and has a value greater than zero), the condition is true.
        if (output[fruit]) {
            //when the fruit exists, the count of the fruit is incremented by 1.
            output[fruit]++
        } else {
            //If the fruit key does not exist (undefined) initializes count to 1.
            output[fruit] = 1
        }
    }
    return output
}

// const fruitsCount = (fruits) => {
//     return fruits.reduce((output, fruit) => {
//         if (output[fruit]) {
//             output[fruit]++
//         } else {
//             output[fruit] = 1
//         }
//         return output
//     }, {})
// }
console.log(fruitsCount(fruits)) // { apple: 2, banana: 2, orange: 1 }

// Count Word Frequencies
// Write a function wordCount that takes a string 
// and returns an object where the keys are the words and the values are the number of times each word appears.
// const text = "hello world hello everyone in the world"
// const wordCount = text => {
//     let output = {}
//     let textArray = text.split(' ')
//     for (let t of textArray) {
//         if (output[t]) {
//             output[t]++
//         } else {
//             output[t] = 1
//         }    } 
//         return output
// }
// console.log(wordCount(text)) 

const texts = ['hello', 'world',' hello', 'everyone', 'in', 'the', 'world']
const wordCount1 = texts => texts.reduce((count, text) => {
    if (count[text]) {
        count[text]++
    } else {
        count[text] = 1
    }
    return count
},{})
console.log(wordCount1(texts)) 

// Count Character Frequencies
// Write a function charCount that takes a string and returns an object where the keys are the characters 
// and the values are the number of times each character appears.
const str = "apple"
const charCount = str => {
    const strArray = str.split('')
    const countObj = {}
    for (let s of strArray){
        if (countObj[s]) {
            countObj[s]++
        } else {
            countObj[s] = 1
        }
    }
    return countObj
}
console.log(charCount(str))
// Expected output: { a: 1, p: 2, l: 1, e: 1 }

const letters = ['a', 'p', 'p', 'l', 'e']
const countLetters = letters => letters.reduce((count, letter) => {
    count[letter]? count[letter]++ : count[letter] = 1
    return count
}, {})

console.log(countLetters(letters))

