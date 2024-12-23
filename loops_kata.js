// Your task is to write a JavaScript function named sumNumbers that uses a for loop to 
// sum up all numbers from 1 to a given number n.
// This function, should take one parameter n and return the sum of all numbers from 1 up to (and including) n.

function sumNumbers(n) {
let sum = 0
    for (i = 1; i <= n; i++) {
        sum += i
    }
    return sum
}

console.log(sumNumbers(5))
console.log(sumNumbers(30))
console.log(sumNumbers(0))

// Extract and Sort
// Your task is to write a JavaScript function that uses a "for" loop 
// to extract the first n elements from an array of numbers and return them in descending order.
// The function, named extractAndSort, will take two parameters: 
// an array of numbers and a numerical value n indicating how many elements to extract.
// Before returning the output array, convert it into a string.

function extractAndSort(numbers,value) {
//extract the first n elements from an array of numbers
let output = []
//return them in descending order
let c = 0
    for (i = value - 1; i >= 0; i--) {
        output[c] = numbers[i]
        c++
    }
//convert it into a string
let result = String(output)
    return result
}

console.log(extractAndSort([1,2,3,4,5,6],3)) //'3,2,1'
console.log(extractAndSort([10,20,30,40,50,60],4)) //'40,30,20,10'
console.log(extractAndSort([5,15,20],2))


//using continue and break

//print only STRING

const jonas = [
    'Jonas',
    true,
    1991,
    'teacher',
    'Germany'
]

//if it's not string, skip the loop with continue
for (let i = 0; i < jonas.length; i++){
    if (typeof jonas[i] !== 'string') continue
    console.log(jonas[i], typeof jonas[i]) //['Jonas', 'string'], ['teacher', 'string'], ['Germany', 'string']
}

//break with number type
for (let i = 0; i < jonas.length; i++){
    if (typeof jonas[i] === 'number') break
    console.log(jonas[i], typeof jonas[i]) //['Jonas', 'string'], ['true', 'boolean']
}

//run the reverse loop
for (let i = jonas.length - 1; i >= 0; i--){
    console.log(jonas[i]) //'Germany', 'teacher', 1991, true, 'Jonas'
}

//while loop
let rep = 1
while (rep <=10){
    console.log(`lifting weight repetition ${rep}`) //lifting weight repetition 1,....10
    rep++
}

//keep rolling a dice until you get 6
let dice = Math.trunc(Math.random()* 6) + 1

while (dice !== 6){
    console.log(dice) //1,3,2,4 "Loop is about to end.."
    dice = Math.trunc(Math.random()* 6) + 1
    if (dice === 6){
        console.log('Loop is about to end..')
    }
}