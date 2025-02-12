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

//reduce can be used as a counter
//ex. count how many movement is over than 1000
const allMovements = [20, 300, 1500, 30, 4000, 2000]
const bigMovements = allMovements.reduce((acc, mov) => mov > 1000 ? acc + 1 : acc, 0)
console.log(bigMovements)//3

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


// Refactoring Reduce
// Replace a function that takes an array of numbers and calculates the sum of all the numbers.
// Currently, the function uses a for loop to accomplish this.
// Your task is to refactor this function to use the reduce() method instead, to make the code more concise and functional.
const sumNumbers = numbers => numbers.reduce((acc,n) => acc +n)
console.log(sumNumbers([1,2,3,4,5])	) //15
console.log(sumNumbers([10,10])) //2
console.log(sumNumbers([-5,-3,8])) //0

// Sum of Even Numbers
// Create a JavaScript function named sumOfEvenNumbers.
// This function will take an array of numbers as its input.
// It should first use the filter() method to keep only the even numbers from the array.
// Then, use the reduce() method to calculate and return the sum of these even numbers.
const sumOfEvenNumbers = nums => {
    const evenNumbers = nums.filter(n => n % 2 === 0)
    const sumTotal = evenNumbers.reduce((acc,n)=> acc + n)
    return sumTotal
}
console.log(sumOfEvenNumbers([1,2,3,4,5,6])) //12
console.log(sumOfEvenNumbers([20,1,20,1])) //40


///////////////////////////////////////////////////////////////
//sum all of the account movement (starting with value 0)
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
// const balance = movements.reduce(function(acc,currentValue,i,arr){
//     return acc + currentValue
// },0)
const balance = movements.reduce((acc,currentValue)=> acc + currentValue,0)
console.log(balance)//3840

//find maximum value of the movements
const maxMovement = movements.reduce((acc,cur)=> {
    if (acc > cur)return acc
    else return cur
},movements[0])
console.log(maxMovement)//3000

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
const calcAverageHumanAge = function(dogs){
    const humanyears = dogs.map(dog=> {
        if (dog <= 2){
            return dog * 2
        } else {
            return 16 + dog * 4
        }
    })
    // console.log(humanyears)
    const adultdogs = humanyears.filter(dog => dog >= 18)
    // console.log(adultdogs)

    // const sumAge = adultdogs.reduce((acc,cur)=> acc+cur, 0)
    // const averageAge = sumAge/adultdogs.length
    const averageAge = adultdogs.reduce((acc,cur,i,arr)=> acc+cur/arr.length, 0)
    return averageAge
}

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]))//44
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]))//47.3
