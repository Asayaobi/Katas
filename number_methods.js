// 1. toString()
// The toString() method converts a number to a string. This is particularly useful when you need to display numeric data 
// as part of a text string or when working with functions that expect string inputs.
// Syntax:
// number.toString()
// Example:

const num = 15
num.toString() 
console.log(num.toString())// '15'

// Notice that, unlike the String() function that we saw in the "Type Conversion" lesson, .toString() only works for numbers.
const a = null
const b = 1
// String(a) // 'null'
// a.toString() // Error, `a` is not a number
console.log(String(b))
console.log(b.toString())

// 2. toFixed()
// The toFixed() method formats a number using fixed-point notation. It's useful for rounding numbers to a fixed number of decimal places.
// Syntax:
// number.toFixed(digits)
// digits (optional): The number of digits to appear after the decimal point; defaults to 0.

// Example:
const pi = 3.14159
pi.toFixed() // '3'
pi.toFixed(2) // '3.14'
// Notice that .toFixed() returns a string.
console.log(pi.toFixed())
console.log(Number(pi.toFixed(2)))

// 3. isInteger()
// The isInteger() method determines whether the passed value is an integer. 
// This can be crucial for validation checks or mathematical calculations where the type and precision of a number matter.
// Syntax:
// Number.isInteger(value)
// Example:
Number.isInteger(4) // true
Number.isInteger(4.5) // false

//4. Number() and +
// when Js sees +, it will do the type conversion to Number
const strNumber = '23'
console.log(Number(strNumber))//23
console.log(+(strNumber)) //23
console.log(+('30px'))//Nan

//5. Parsing 
//if the string starts with a number, it works
console.log(Number.parseInt('30px'))//30
console.log(Number.parseInt('px30'))//Nan

//Number base
//Base 10 -> 0 to 9
//Binary base 2 -> 0 1
console.log(Number.parseInt('30px',10)) //30
console.log(Number.parseInt('30px',2)) //Nan

console.log(Number.parseInt('2.5rem'))//2
console.log(Number.parseFloat('2.5rem'))//2.5

//6. isNan()
//check if value is Not a Number
console.log(Number.isNaN(+'30px'))//true
console.log(Number.isNaN('20'))//false

//7. isFinite()
//check if value is  a number
console.log(Number.isFinite(30))//true
console.log(Number.isFinite('30'))//false
console.log(Number.isFinite(30/0))//false because 30 / 0 = infitity

//8. isInteger()
//check if value is an integer
console.log(Number.isInteger(9))//true
console.log(Number.isInteger(-9))//true
console.log(Number.isInteger('9'))//false


// Basic Exercises
// Rounding Numbers:

// Write a function that takes a floating-point number and rounds it to the nearest integer using Math.round().
const roundNumber = number => Math.round(number)
console.log(roundNumber(4.5))
// Modify the function to round down using Math.floor().
const floorNumber = number => Math.floor(number)
console.log(floorNumber(4.5))
// Modify the function to round up using Math.ceil().
const ceilNumber = number => Math.ceil(number)
console.log(ceilNumber(4.5))

// Random Number Generation:
// Write a function that returns a random number between 0 and 1 using Math.random().
// Extend this function to generate a random number between a given minimum and maximum value.
const randomNumber = (min, max) => Math.ceil(Math.random() * ((max - min) + 1))
console.log(randomNumber(1, 6))

// Converting Strings to Numbers:
// Write a function that converts a given string to a number using Number().
// Extend the function to handle cases where the string cannot be converted to a number, 
// returning a default value or an error message.
const convertStringToNumber = string => typeof string != 'string' ? 'error value' : Number(string)
console.log(convertStringToNumber('1'))
console.log(convertStringToNumber('0'))
console.log(convertStringToNumber(true))

// Fixed-Point Notation:
// Write a function that takes a number and returns it in fixed-point notation with 2 decimal places using toFixed(2).
const fixPoint = number => number.toFixed(2)
console.log(fixPoint(3.4586))

// Prime Number Checker:
// Write a function that checks whether a given number is prime.
function isPrime(num) {
    if (num <= 1) return false // Numbers less than or equal to 1 are not prime
    if (num <= 3) return true  // 2 and 3 are prime numbers
    if (num % 2 === 0 || num % 3 === 0) return false // Eliminate multiples of 2 and 3

    // Check divisors from 5 to square root of num
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false
        }
    }
    return true
}
console.log(isPrime(2))
console.log(isPrime(4))
console.log(isPrime(7))
console.log(isPrime(10))