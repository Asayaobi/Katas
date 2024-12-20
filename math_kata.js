// Create a JavaScript function called findSmallestNumber.
// This function should take between 2 and 4 numbers as its parameters and return the smallest number.
// Use the correct Math method.

function findSmallestNumber(a,b,c,d) {
    let smallest
    if ((c === undefined) && (d === undefined)) {
        smallest = Math.min(a,b)
    } else if (d === undefined) {
        smallest = Math.min(a,b,c)
    } else {
        smallest = Math.min(a,b,c,d)
    }
    return smallest
}

console.log(findSmallestNumber(2,71))
console.log(findSmallestNumber(2,71,4))
console.log(findSmallestNumber(20,80,-5.5))
console.log(findSmallestNumber(8,1))
console.log(findSmallestNumber(2,0,5,3.9))

// Correct Square Roots
// Create a function checkSquareRoot that takes an array of objects.
// Each object contains a value and a squareRoot property, where the squareRoot indicates the square root of the value.
// If the square root is correct, add a property correct with a value of true to the object, otherwise false.
// The function should then return the array of objects with their new correct field.
// checkSquareRoot([{'value':100,'squareRoot':10},{'value':25,'squareRoot':6}])

function checkSquareRoot(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].squareRoot === Math.sqrt(arr[i].value)) {
            arr[i].correct = true
        } else {
            arr[i].correct = false
        }
    }
    return arr
}

console.log(checkSquareRoot([{'value':100,'squareRoot':10},{'value':25,'squareRoot':6}]))
console.log(checkSquareRoot([{'value':81,'squareRoot':9}])	)

// Win the lottery
// Create a function winTheLottery that takes an array of 4 strings, as per the tests below.
// The function should generate a random number between 0 and 4 which will be used to extract one of the strings from the array.
// The functions should then return the extracted string.
// hint: if you use Math.ceil then it won't ever give you the i = 0.
// console.log(winTheLottery(['lose', 'lose', 'win', 'lose'])) // sometimes 'win', sometimes 'lose'

function winTheLottery(results) {
    let i =Math.floor(Math.random()*4)
    return results[i]
}

console.log(winTheLottery(['lose', 'lose', 'win', 'lose']))
