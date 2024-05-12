// Sum of Squares
// Your task is to create two functions.
// The first function, calculateSquare, 
// should take a number as a parameter and return its square.
function calculateSquare(n) {
    return n * n
}
// The second function, sumOfSquares, 
// should take two numbers, invoke calculateSquare for each number, and then return the sum of their squares.
function sumOfSquares(a, b) {
    // a = calculateSquare(a)
    // b = calculateSquare(b)
    const sum = calculateSquare(a) + calculateSquare(b)
    return sum
}
// Automatic tests are not available for this kata, please use the tests below in NodeJs.
// sumOfSquares(5, 5) // 50
// sumOfSquares(4, 10) // 116

console.log(sumOfSquares(5, 5))
console.log(sumOfSquares(4, 10))


// Shapes Area
// Your task is to create three functions in JavaScript to calculate the area of rectangles and triangles.
// The first two functions calcAreaRectangle and calcAreaTriangle will calculate the areas of a rectangle and a triangle, respectively.
// The formula for a rectangle is a * b, while for a triangle it's a * b / 2.
function calcAreaRectangle(a,b) {
    return a * b
}

function calcAreaTriangle(a,b) {
    return a * b / 2
}
// The third function calcArea, takes 2 numbers and a string 'rectangle' or 'triangle' 
// and decides which calculation to perform based on the given string.
// If a different string, or no string, is passed, return null.
function calcArea(a, b, shape) {
    let result
    if (shape === 'rectangle') {
        result = calcAreaRectangle(a, b)
    } else if (shape === 'triangle') {
        result = calcAreaTriangle(a, b)
    } else {
        result = null
    }
    return result
}
// Automatic tests are not available for this kata. Please use the tests below in NodeJS.
// calcArea(100, 5, 'rectangle') // 500
// calcArea(100, 50, "triangle") // 2500
// calcArea(10, 10, "rectangle") // 100
// calcArea(10, 10, "triangle") // 50
// calcArea(30, 20) // null
// calcArea(30, 20, "cube") // null

console.log(calcArea(100, 5, 'rectangle'))
console.log(calcArea(100, 50, "triangle"))
console.log(calcArea(10, 10, "rectangle"))
console.log(calcArea(10, 10, "triangle"))
console.log(calcArea(30, 20))
console.log(calcArea(30, 20, "cube"))

// Sum of Even Numbers
// Your task is to create a JavaScript function sumEvenNumbers that processes an array of numbers.
// For each number in the array, the function should call an external function isEven to check if the number is even.
// Then, it should sum all the even numbers and return the total sum.

// Automatic tests are not available for this kata, please use the tests below in NodeJs.
// sumEvenNumbers([1, 20, 5, 4]) // 24
// sumEvenNumbers([0, 100, -20, 5.5, -10]) // 70
// sumEvenNumbers([1, 2, 3, 4, 5, 6]) // 12

function isEven(n) {
    if (n % 2 === 0) {
        return true
    } else {
        return false
    }
}
console.log(isEven(2))
console.log(isEven(3))

function sumEvenNumbers(numbers) {
    let sum = 0
    for (i = 0; i < numbers.length; i++){
        if (isEven(numbers[i])){
            sum += numbers[i]
        }
    }
    return sum
}

console.log(sumEvenNumbers([1, 20, 5, 4]))
console.log(sumEvenNumbers([0, 100, -20, 5.5, -10]))
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]))