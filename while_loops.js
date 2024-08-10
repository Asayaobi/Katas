//FizzBuzz
//Write a program that print Fizz when the number count is divisible by 3, print Buzz when the number is divisible by 5, print FizzBuzz when it can multiple by 3 and 5.

let i = 1
let array = []
function fizzBuzz() {
    while (i <= 100) {
        if (i % 5 ===0 && i % 3 ===0){
            array.push('FizzBuzz')
        } else if (i % 3 === 0) {
            array.push('Fizz')
        } else if (i % 5 === 0) {
            array.push('Buzz')
        } else {
            array.push(i)
        }
        i++
    }
        console.log(array)
}
fizzBuzz()