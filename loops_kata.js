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

//Your tasks:
//Create an array called bills containing all 10 test bill values.
//Create empty arrays for the tips and the totals (tips and totals)
//Use the calcTip function we wrote before (included in the starter code) 
// to calculate tips and total values (bill + tip) for every bill value in the bills array. 
// Use a for loop to perform the 10 calculations!
// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   }


//TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.



//BONUS:
//Write a function calcAverage which takes an array called arr as an argument. 
// This function calculates the average of all numbers in the given array. 

//First, you will need to add up all values in the array. To do the addition, 
// start by creating a variable sum that starts at 0. Then loop over the array using a for loop. 

// In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

//To calculate the average, divide the sum you calculated before by the length of the array 
// (because that's the number of elements).

//Call the function with the totals array.

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tips = []
let totals = []

const calcTip = bills => {
    for (let i = 0; i < bills.length; i++){
        if (bills[i] >= 50 && bills[i] <= 300){
            tips[i] = bills[i] * 0.15
            totals[i] = bills[i] + (bills[i] * 0.15)
        } else {
            tips[i] = bills[i] * 0.2
            totals[i] = bills[i] + (bills[i] * 0.2)
        }
    }
}


const calcAverage = arr => {
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        sum += bills[i]
    }
    let average = sum / arr.length
    return average
}

console.log(calcAverage(bills))

//Find the amplitude of the weather data with for loop
// Amplitude = the different between the max and min tempertature

//combine 2 arrays data together

const tempertature1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9 ,5]
const tempertature2 = [3, -2, 5, 9 ,5]

const findAmplitude = (tempertature1,tempertature2)  => {
    const tempertature = tempertature1.concat(tempertature2)
    console.log(tempertature) //[3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9 ,5, 3, -2, 5, 9 ,5]

    let min = tempertature[0]
    let max = tempertature[0]
    for (let i = 0; i < tempertature.length; i++){
        if (tempertature[i] < min){
            min = tempertature[i]
        }
        if (tempertature[i] > max){
            max = tempertature[i]
        }
    }
    let amplitude = max - min
    return amplitude
}

console.log(findAmplitude(tempertature1, tempertature2)) //23

/* Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17°C in 1 day ...21°C in 2 days ... 23°C in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string as the example on the console.

TEST DATA1: [17, 21, 23] 
TEST DATA2: [12, 5, -5, 0, 4] 

*/

const printForecast = arr => {
    let string = ""
    for (let i = 0; i < arr.length; i++) {
        string += `... ${arr[i]}°C in ${i + 1} ${i+ 1 === 1 ? "day" : "days"}`
    }
    return string + " ..."
}

console.log(printForecast([12, 5, -5, 0, 4] ))


/*
Let's say you're building a time tracking application for freelancers. 
At some point in building this app, you need a function 
that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 5]
*/

function freelanceSum (data) {
    const totalHours = data.reduce((total, current) => total + current, 0)
    const averageHours = Math.round(totalHours / data.length)

    const findMax = Math.max(...data)
    const findIndex = data.indexOf(findMax)
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const maxDay = days[findIndex]

    const dayCount = data.filter((num) => num > 0).length

    const isFulltime = totalHours >= 35

    const output =  {
        totalHours,
        averageHours,
        maxDay,
        dayCount,
        isFulltime
    }
    return output
}

console.log(freelanceSum([7.5, 8, 6.5, 0, 8.5, 4, 5]))