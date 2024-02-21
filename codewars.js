
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
