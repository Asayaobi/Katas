// 1. toString()
// The toString() method converts a number to a string. This is particularly useful when you need to display numeric data 
// as part of a text string or when working with functions that expect string inputs.
// Syntax:
// number.toString()
// Example:

const num = 15
num.toString() // '15'
console.log(num.toString())

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