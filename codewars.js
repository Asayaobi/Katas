// Jenny has written a function that returns a greeting for a user. 
// However, she's in love with Johnny, and would like to greet him slightly different. 
// She added a special case to her function, but she made a mistake.
// function greet(name){
//     return "Hello, " + name + "!";
//     if(name === "Johnny")
//       return "Hello, my love!";
//   }

// answer 1
// function greet(name) {
//     if (name == 'Johnny') {
//         return 'Hello, my love!'
//     } else {
//         return 'Hello, ' + name + "!"
//     }
// }

// answer2
const greet = name => name === 'Johnny' ? 'Hello, my love!' : `Hello, ${name}!`
console.log(greet("Jim"))
console.log(greet("Simon"))
console.log(greet("Johnny"))

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.
const invert = numbers => {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = numbers[i] * -1
    }
    return numbers
}
console.log(invert([1,2,3,4,5]))
console.log(invert([1,-2,3,-4,5]))
console.log(invert([]))

// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

const findAverage = numbers => {
    if (numbers.length === 0) {
        return 0
    } else {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum / numbers.length
    }
}
console.log(findAverage([]))
console.log(findAverage([1,2,3]))
console.log(findAverage([1,2,3,4]))

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return true if you're better, else false!
// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!
const betterThanAverage = (scores, yourScore) => {
    let sum = 0
    for (let i = 0; i < scores.length ; i++) {
        sum += scores[i]
    }
    return yourScore > (sum / scores.length) ? true : false
}
console.log(betterThanAverage([2, 3], 5))
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9))

// A hero is on his way to the castle to complete his mission. 
// However, he's been told that the castle is surrounded with a couple of powerful dragons! 
// each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. 
// Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, 
// will he survive?
// Return true if yes, false otherwise :)

// Create a function checkVehicle that takes a parameter vehicle (a string).
// The function should prevent 'car', 'truck' and 'motorbike' from accessing the park, returning 'not allowed', and should allow anyone else in, such as 'pedestrian', 'bicycle', and others, returning 'allowed'.
// Use the NOT EQUAL operator.
// function checkVehicle(vehicle){
//     let output =''
//     if (vehicle !== 'car' && vehicle !== 'truck' && vehicle !== 'motorbike'){
//         output = 'allowed'
//     } else {
//         output = 'not allow'
//     }
// return output
// }

const checkVehicle = vehicle => (vehicle !== 'car' && vehicle !== 'truck' && vehicle !== 'motorbike')? 'allowed' : 'not allow'
console.log(checkVehicle('car')	);
console.log(checkVehicle('truck'))
console.log(checkVehicle('motorbike'))
console.log(checkVehicle('pedestrian'));
console.log(checkVehicle('bird'));
checkVehicle('car')	//'not allowed'
checkVehicle('truck')	//'not allowed'
checkVehicle('motorbike')	//'not allowed'
checkVehicle('pedestrian')	//'allowed'
checkVehicle('bicycle')	//'allowed'
checkVehicle('bird')	//'allowed'

// Vowels are "a", "e", "i", "o" and "u".
// Create a function countVowels that takes an array of letters, 
// and returns the number of vowels in the array.

// countVowels(['h','a','i','k','u'])	3
// countVowels(['a','c','a','d','e','m','y'])	3
// countVowels(['c','o','d','e'])	2

function countVowels(letters){
    const vowels = ['a', 'e', 'i', 'o', 'u']
    //if a similar letter from VOWELS is found from LETTER, it'll be true and it will pass that LETTER into the output array
    const output = letters.filter(letter => vowels.includes(letter))
    return output.length
    // let count = 0
    // for (let letter of letters) {
    //     if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
    //         count += 1
    //     }
    // }
    // return count

}
console.log(countVowels(['h','a','i','k','u']));
console.log(countVowels(['a','c','a','d','e','m','y']))
console.log(countVowels(['c','o','d','e']));

// KATAS FOR INCLUDES()
// Kata 1: Remove Duplicates
// Write a function removeDuplicates that takes an array of numbers as input 
// and returns a new array with only unique elements. Use the includes method.

// javascript
// Copy code
// removeDuplicates([1, 2, 3, 4, 4, 5, 6, 6]); // Output: [1, 2, 3, 4, 5, 6]

function removeDuplicates(numbers) {
    let result = []
    for (let n of numbers) {
        if (!result.includes(n)){
            result.push(n)
        }
    }
    return result
}
console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 6, 6]));

// Kata 2: Common Elements
// Write a function commonElements that takes two arrays as input 
// and returns a new array containing only the elements that are common between 
// the two arrays. Use the includes method.

// javascript
// Copy code
// commonElements([1, 2, 3, 4], [3, 4, 5, 6]); // Output: [3, 4]
