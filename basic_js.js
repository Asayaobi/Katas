// Find Maximum Number
// Write a function maxNumber that takes two numbers a and b as arguments and returns the larger of the two.
function maxNumber(a, b) {
    if (a > b) {
        return b
    }
    return a
}

console.log(maxNumber(1, 2))
console.log(maxNumber(5, 20)) 

// Create a function assignGrade that takes a number score and returns a grade ('A', 'B', 'C') based on that score.
// 'A' is for a score equal to or greater than 90.
// 'B' is between 80 and 90.
// 'C' is below 80.

function assignGrade(score) {
    //return grade a, b, c
    if (score >= 90) {
        return 'A'
    }
    if (score >= 80) {
        return 'B'
    }
    return 'C'
}

console.log(assignGrade(90))
console.log(assignGrade(80))
console.log(assignGrade(70))


// Check Temperature
// The function checkTemperature should return 'Cold' if the temperature is below 15, 
// 'Warm' if it's between 15 and 25, and 'Hot' otherwise.

function checkTemperature(t) {
    if (t < 15) {
        return 'cold'
    }
    if (t <= 25) {
        return 'warm'
    }
    return 'hot'
}


console.log(checkTemperature(10))
console.log(checkTemperature(15))
console.log(checkTemperature(27))

// Animal Classification
// Create a function classifyAnimal that takes an animal name and returns 'Domestic' if it's either 'cat' or 'dog', 
// and 'Wild' for any other animal.

function classifyAnimal(animal) {
    if (animal === 'cat') {
        return 'Domestic'
    }
    if (animal === 'dog') {
        return 'Domestic'
    }
    return 'Wild'
}

console.log(classifyAnimal('dog'))
console.log(classifyAnimal('cat'))
console.log(classifyAnimal('rat'))

// Blackjack
// Create a function scoreBlackjack that takes an array of 2 numbers, 
// the first represents the total in the hand of the player, the second is the card that the dealer just extracted.
// If the sum of the player's cards and the dealer's card is 21, return 'win', 
// if it's over 21, return 'lose', otherwise return 'keep playing'.

function scoreBlackjack(numbers) {
    if (numbers[0] + numbers[1] === 21) {
        return 'win'
    }
    if (numbers[0] + numbers[1] > 21) {
        return 'lose'
    }
    return 'keep playing'
}

console.log(scoreBlackjack([10,11]))
console.log(scoreBlackjack([10,10]))
console.log(scoreBlackjack([10,12]))

// Total of Receipt
// Create a function calcTotalReceipt that takes an array prices as a parameter, 
// with 4 prices in it, then returns the sum of all prices in the array.

function calcTotalReceipt(prices) {
    const sum = prices[0] + prices[1] + prices[2] + prices[3]
    return sum
}

console.log(calcTotalReceipt([1,2,3,4]))

// Combine Total of Receipts
// You received 2 receipts, one from the restaurant and one from the coffee shop, 
// now you'd like to pay for them at the same time.
// Create a function calcTotalReceipts that takes 2 arrays as parameters, each array contains 2 prices, 
// then returns the sum of all prices in both arrays combined.

function calcTotalReceipt2(restaurant, coffee) {
    // sum restaurant
    const sumRestaurant = restaurant[0] + restaurant[1]
    // sum coffee
    const sumCoffee = coffee[0] + coffee[1]
    // sum both
    const total = sumRestaurant + sumCoffee
    return total
}

console.log(calcTotalReceipt2([11,3],[2.5,1.5]))

// Create a function findYoungest that receives an array of 4 ages (numbers).
// The function should find the youngest person (the lowest number in the array) and return it.

function findYoungest(num) {
    let youngest = num[0]
    if (num[1] < youngest) {
        youngest = num[1]
    }
    if (num[2] < youngest) {
        youngest = num[2]
    }
    if (num[3] < youngest) {
        youngest = num[3]
    }
    if (num[4] < youngest) {
        youngest = num[4]
    }
    return youngest
}

console.log(findYoungest([50,12,45,32]))
console.log(findYoungest([8,19,52,45]))

// Create a sumPositives function that takes an array of 4 numbers as a parameter.
// The array contains positive and negative numbers.
// The function should return the sum of all positive numbers only.
function sumPositives(n) {
    let sum = 0
    if (n[0] > 0) {
        sum = sum + n[0]
    }
    if (n[1] > 0) {
        sum = sum + n[1]
    }
    if (n[2] > 0) {
        sum = sum + n[2]
    }
    if (n[3] > 0) {
        sum = sum + n[3]
    }
    return sum
}

console.log(sumPositives([10,-5,20,-17]))
console.log(sumPositives([1,-1,1,-1]))

// The following loop is incorrect, can you fix it?
// function sumNumbers(numbers) {
//     let sum = 0
//     for (const number in numbers) {
//         sum = sum + number
//     }
//     return sum
// }
function sumNumbers(numbers) {
    let sum = 0
    for (const number of numbers) {
        sum = sum + number
    }
    return sum
}
console.log(sumNumbers([1,2,3]))
console.log(sumNumbers([10,9,8]))




// Total of Receipt with Loop
// Create a function calcTotalReceipt that takes an array prices as a parameter, with any number of prices in it, 
// then returns the sum of all prices in the array.
// calcTotalReceipt([10,20,15,45])	90
// calcTotalReceipt([35,15])	50

function calcTotalReceipt(prices) {
    let sum = 0
    for (const p of prices) {
        sum = sum + p
    }
    return sum
}

console.log(calcTotalReceipt([10,20,15,45]))
console.log(calcTotalReceipt([35,15]))


// Blackjack with Loop
// Create a function scoreBlackjack that takes 2 parameters:
// a) an array of numbers, representing the cards in the hand of the player, and
// b) the card that the dealer just extracted
// If the sum of the player's cards and the dealer's card is 21, return 'win', if it's over 21, return 'lose', otherwise return 'keep playing'.
// scoreBlackjack([10,5],6)	'win'
// scoreBlackjack([8,3,4],10)	'lose'
// scoreBlackjack([1],7)	'keep playing'

function scoreBlackjack(playerscards,dealerscard) {
    let player = 0
    for (const card of playerscards) {
        player = player + card
    }
    if (player + dealerscard === 21) {
        return 'win'
    }
    if (player + dealerscard > 21) {
        return 'lose'
    }
    return 'keep playing'
}

console.log(scoreBlackjack([10,5],6))
console.log(scoreBlackjack([8,3,4],10))
console.log(scoreBlackjack([1],7))

// Sum of Positives
// During a competition, some scores were incorrectly saved as negative numbers.
// Create a function sumPositives that takes an array of numbers as a parameter, 
// if any of the numbers in the array is a negative number it should be converted into a positive number and added to the total.
// The function should then return the sum of all numbers.
// sumPositives([5,-10,15])	30
// sumPositives([-10,-10,-10])	30

function sumPositives(nums) {
    let sum = 0
    for (let n of nums) {
        if (n < 0) {
            n = n * -1
        }
        sum = sum + n
    }
    return sum
}

console.log(sumPositives([5,-10,15]))
console.log(sumPositives([-10,-10,-10]))