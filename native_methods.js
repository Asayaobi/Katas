// Create a function returnLength that takes an array as its only parameter, then returns the length of the array as a number, or 'the array is empty' if there are no elements in the array.
// const returnLength = arr => arr.length 

function returnLength(array) {
    if (array.length === 0) {
        return 'the array is empty'
    } else {
        return array.length
    }
}
console.log(returnLength([1,2,3,4]));
console.log(returnLength(['a']));
console.log(returnLength([]));

// Create a function addSportsLengths that takes an array of objects.
// Each object contains an array of sports.
// The function should add a property sportsLength to each object, with the length of its sports array.

function addSportsLengths(users) {
    for (let user of users) {
        user.sportsLength = user.sports.length
    }
    return users
}

console.log(addSportsLengths([{'name':'John','sports':['football']},{'name':'Alice','sports':['tennis','golf']}]));
console.log(addSportsLengths([{'name':'Bob','sports':[]}]));

// Create a function reverseArray that takes an array and returns the array reversed.
const reverseArray = array => array.reverse(array)
// function reverseArray(array) {
//     return array.reverse()
// }
console.log(reverseArray([1,2,3,4]));
console.log(reverseArray(['a','b','c']));



// Create a function removeEmptySpots that takes an array as a parameter.
// The array may have a falsy value at the beginning or at the end (or both).
// The function should remove these falsy values and return the clean array.


function removeEmptySpots(sports) {
    if (!sports[sports.length - 1]) {
        sports.pop()
    } if (!sports[0]) {
        sports.shift()
    }
    return sports
}

console.log(removeEmptySpots([0,2,3,4,0]));
console.log(removeEmptySpots([null,'a','b','c']));
console.log(removeEmptySpots([10,11,0,50,false]));
console.log(removeEmptySpots([0,100,'a','b',50,null])	);




// Create a function stringRepeat that takes a number and a string, then returns the string repeated as many times as the number.
//put word in an array
//loop it n time
//turn the array 
function stringRepeat(n, word) {
    let output = []
    let result = ''
    for (let i = 0 ; i < n ; i++) {
        output.push(word)
        console.log(output)
    }
    result = output.join('')
    return result
}
console.log(stringRepeat(5, 'hi'))// 'hihihihihi';
console.log(stringRepeat(2, 'hola'))// 'holahola';





function greet(name) {
    if (name === 'Johnny') 
        return 'Hello my love'
     else 
        return 'Hello ' + name + '!'
}

console.log(greet('Johnny'));
console.log(greet('Tom'));

// function invert(numbers) {
//     let neg = 0
//     let outputArr = []
//     for (let number of numbers) {
//         neg = number * (-1)
//         outputArr.push(neg)
//     }
//     return  outputArr
// }

function invert(array) {
    for (let i = 0; i < array.length; i++) {
       array[i] = array[i] * -1
    }
    return array
}

console.log(invert([1,2,3,4,5]));
console.log(invert([1,-2,3,-4,5]));
console.log(invert([]));


// Create a returnLength function that takes a parameter and returns its length if it's a string. In any other case it returns the type of the parameter.
function returnLength(item) {
    let result
    if (typeof item === 'string') {
       result = item.length
    } else {
        result = typeof item
    }
    return result
}


console.log(returnLength('hello'));
console.log(returnLength(''));
console.log(returnLength(10));
console.log(returnLength([1,2,3]));
console.log(returnLength(true));


// Create a JavaScript function called isLongerThan.
// This function should take two parameters: a string and a number.
// It should return true if the length of the string is greater than the given number, and false otherwise.

function isLongerThan(string, number) {
    if (string.length > number) {
        return true
    } else {
        return false
    }
}

console.log(isLongerThan('hello',3));
console.log(isLongerThan('hello',5));
console.log(isLongerThan('',1));
console.log(isLongerThan('',0));

// Create a JavaScript function named splitStringIntoArray.
// This function should take two parameters: a string and a delimiter. It should divide the string into an array of substrings, separated by the specified delimiter, and return the resulting array.

function splitStringIntoArray(string, delimiter) {
    let result
    result = string.split('delimiter')
    return result
}

console.log(splitStringIntoArray('apple,banana,cherry',','))
console.log(splitStringIntoArray('Hello World',' '))
console.log(splitStringIntoArray('one-two-three','-'));

// Create a function search that takes two parameters: an array of strings, and a string keyword.
// The function should return the string from the array that contains the keyword.
// Assume that there is only 1 string containing the keyword.
const sentence = 'The quick brown fox jumps over the lazy dog.'
sentence.includes('fox') // true

function search(wordlist, keyword) {
    for (let word of wordlist) {
        if (word.includes(keyword)) {
            return word
        }
    }
}
console.log(search(['hello world','good morning'],'world'));
console.log(search(['123456','911'],'9'));

// Create a function flipString that takes a string and returns the string flipped.
//split to arr
//arr reverse
// turn back to a string

function flipString(word) {
    let wordArray = word.split('').reverse().join('')
    return wordArray
}
console.log(flipString('Hello'));
console.log(flipString(''));
console.log(flipString('Haiku Academy'));

// A list of phone numbers was entered in the database as plain numbers, without proper formatting.
// Create a function formatPhoneNumber that takes a 12 digit number and formats it according to the tests.
// Assume the phone numbers never start with a zero.
// If the number is not a number, if it's falsy or if it's not 12 digits, return the error message.
// function formatPhoneNumber(digit) {
//     let digitString =digit.toString()
//     if (digitString.length === 12) {
//         console.log(digitString);
//         let slice1 = digitString.slice(0,3)
//         console.log(slice1);
//         let slice2 = digitString.slice(3,6)
//         console.log(slice2);
//         let slice3 = digitString.slice(6,9)
//         console.log(slice3);
//         let slice4 = digitString.slice(9,12)
//         console.log(slice4);
//         return `${slice1}-${slice2}-${slice3}-${slice4}`
//     } else {
//         return'invalid number'
//     }
// }

function formatPhoneNumber(digit) {
    if (!digit) {
        return 'invalid number'
    } else {
        let digitString = digit.toString()
        if (digitString.length === 12) {
            let slice1 = digitString.slice(0,3)
            let slice2 = digitString.slice(3,6)
            let slice3 = digitString.slice(6,9)
            let slice4 = digitString.slice(9,12)
            let format = `${slice1}-${slice2}-${slice3}-${slice4}`
            return format
        } else {
            return 'invalid number'
        }
    }
}

console.log(formatPhoneNumber(123456789012));
console.log(formatPhoneNumber(123));
console.log(formatPhoneNumber(999999999999));
console.log(formatPhoneNumber(783543777241));
console.log(formatPhoneNumber(null));

// const stringToNumber = function(str){
//     return Number(str)
//   }
const stringToNumber = str => Number(str)
  console.log(stringToNumber('123'));