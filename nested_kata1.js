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