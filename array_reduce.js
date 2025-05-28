// Reduce()
// reduces an array to a single value
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
const allMovements = [20, -300, 1500, -30, 4000, 2000]
const bigMovements = allMovements.reduce((acc, mov) => mov > 1000 ? acc + 1 : acc, 0)
console.log(bigMovements)//3

//with prefix ++ operator
const bigMovementsA = allMovements.reduce((count, mov) => mov > 1000 ? ++count : count, 0)
console.log(bigMovementsA)//3

let a = 10
console.log(a++)//10
console.log(a)//11

a = 10
console.log(++a)//11
console.log(a)//11

let count = 5
let result = ++count // count is incremented to 6, then result is assigned 6
console.log(count)  // 6
console.log(result) // 6

let countA = 5;
let resultA = countA++ // resultA is assigned 5, then countA is incremented to 6
console.log(countA)  // 6
console.log(resultA) // 5

//use reduce accumulator as object
//acc(sums) = {deposit: 0, withdrawal: 0}
const depositAndWithdraw = [20, -300, 1500, -30, 4000, 2000]

const organize = arr => {
    return arr.reduce((acc,num)=> {
        if (num >= 0){
            acc.deposit += num
        } else {
            acc.withdrawal += num
        }
        return acc
    }, {deposit:0, withdrawal:0})
}
console.log(organize(depositAndWithdraw))//{ deposit: 7520, withdrawal: -330 }

const sumObject = depositAndWithdraw.reduce((sums, mov) => {
    mov > 0 ? sums.deposit += mov : sums.withdrawal += mov
    return sums
}, {deposit: 0, withdrawal: 0})
console.log(sumObject)//{ deposit: 7520, withdrawal: -330 }

//destucturing objects
const {deposit, withdrawal} = depositAndWithdraw.reduce((sums, mov) => {
    // mov > 0 ? sums.deposit += mov : sums.withdrawal += mov
    sums[mov > 0 ? 'deposit' : 'withdrawal'] += mov
    return sums
}, {deposit: 0, withdrawal: 0})
console.log(deposit)//7520
console.log(withdrawal)//-330

//get total price
const prices = [29.99, 19.99, 4.99]
const totalPrice = prices => prices.reduce((acc, e) => acc + e)
console.log(totalPrice(prices))// 54.97

//Creating an Object Count
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana']
const counter = arr => arr.reduce((count,item) => {
    count[item] ? count[item]++ : count[item] = 1
    return count
}, {})
console.log(counter(fruits))//{ apple: 2, banana: 2, orange: 1 }

const counterFruits = items => items.reduce((count,item) => {
    count[item] = items.filter(i => i === item).length
    return count
}, {})
console.log(counterFruits(fruits))//{ apple: 2, banana: 2, orange: 1 }

const countFruits = fruits => {
    let fruitsObj = {}
    for (let i = 0; i < fruits.length; i++){
        fruitsObj[fruits[i]] = fruits.filter(fruit => fruit === fruits[i]).length
    }
    return fruitsObj
}
console.log(countFruits(fruits))//{ apple: 2, banana: 2, orange: 1 }
console.log(countFruits(['lemon', 'mango', 'mango', 'pineapple'])) //{ lemon: 1, mango: 2, pineapple: 1 }

const countFruit = fruits => fruits.reduce((obj,fruit) => {
    if (obj[fruit]){
        obj[fruit]++
    } else {
        obj[fruit] = 1
    }
    return obj
},{})
console.log(countFruit(fruits))//{ apple: 2, banana: 2, orange: 1 }

const countFruitsObj = fruits => fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1 //If the fruit doesn't exist yet, treat its count as 0. Then increment it by 1.
    return acc
},{})
console.log(countFruitsObj(fruits))//{ apple: 2, banana: 2, orange: 1 }

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
console.log(fruitsCount(fruits)) // { apple: 2, banana: 2, orange: 1 }

// Count Word Frequencies
// Write a function wordCount that takes a string 
// and returns an object where the keys are the words and the values are the number of times each word appears.
const text = "hello world hello everyone in the world"
console.log(text.split(' '))

const countW = text => {
    let textObj =  text.split(' ').reduce((count,t) => {
        count[t] ? count[t]++ : count[t] = 1
        return count
    }
    , {})
    return textObj
}
console.log(countW(text))//{ hello: 2, world: 2, everyone: 1, in: 1, the: 1 }

const countText = text => {
    const words = text.split(' ').reduce((acc,w) => {
        acc[w] = (acc[w] || 0 ) + 1
        return acc
    },{})
    return words
}
console.log(countText(text))//{ hello: 2, world: 2, everyone: 1, in: 1, the: 1 }

const countTexts = text => {
    const wordscount = text.split(' ').reduce((acc,w) => {
        if (acc[w]){
            acc[w]++
        } else {
            acc[w] = 1
        }
        return acc
    }, {})
    return wordscount
}
console.log(countTexts('dr. jones jones calling dr. jones'))//{ 'dr.': 2, jones: 3, calling: 1 }

// Count Character Frequencies
// Write a function charCount that takes a string and returns an object where the keys are the characters 
// and the values are the number of times each character appears.
const countStr = str => {
    return str.split('').reduce((acc,letter) => {
        if (acc[letter]){
            acc[letter]++
        } else {
            acc[letter] = 1
        }
        return acc
    },{})
}
console.log(countStr('banana'))//{ b: 1, a: 3, n: 2 }

const charCount = letters => letters.split('').reduce((acc,l)=> {
    acc[l] ? acc[l]++ : acc[l] = 1
    return acc
}, {})
console.log(charCount('banana'))//{ b: 1, a: 3, n: 2 }


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
