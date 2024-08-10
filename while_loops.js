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
        return array
}

console.log(fizzBuzz())

//Create a loop for 99 bottles of beer lyric
function beer() {
    let lyrics = ""
    let beer = 10
    while (beer > 1){
        lyrics += `${beer} bottles of beer on the wall, ${beer} bottles of beer.
        Take one down and pass it around, ${beer-1}  bottles of beer on the wall.
        
        `
        beer--
    }
        lyrics += `1 bottle of beer on the wall, 1 bottle of beer.
        Take one down and pass it around, no more bottles of beer on the wall.

        No more bottles of beer on the wall, no more bottles of beer.
        Go to the store and buy some more, 99 bottles of beer on the wall.`
        return lyrics
}

console.log(beer())

//The Fibonacci Exercise
//Create a function where you can call it by writing the code:fibonacciGenerator (n)

// Where n is the number of items in the sequence. So I should be able to call: 
// fibonacciGenerator(3) and get[0,1,1]as the output.


function fibonacciGenerator(n) {
  let output = [0,1]
  if (n === 0) {
    return []
  } else if (n === 1) {
    return [0]
  } else {
    for(let i = 1; i < n - 1; i++){
    let value = output[output.length - 2] + output[output.length - 1]
    output.push(value)
  }
  }
  return output
}
console.log(fibonacciGenerator(2))

