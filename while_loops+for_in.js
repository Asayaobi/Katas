//FizzBuzz
//Write a program that print Fizz when the number count is divisible by 3, print Buzz when the number is divisible by 5, 
//print FizzBuzz when it can multiple by 3 and 5.

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
console.log(fibonacciGenerator(2))//0,1

//for in loop
const person = {fname:"John", lname:"Doe", age:25}

let text = ""
for(let key in person){
  text += person[key]
}

console.log(text) //JohnDoe25

 // Use a for...in loop to increase each grade by 5 points, then print the updated object.
 let grades = {math: 85, english: 92, science: 88}
 
for (let key in grades){
  grades[key] += 5
}
console.log(grades)//{math: 90, english: 97, science: 93}

// The goal is to loop through the outer object’s properties and,
// if one of the properties is an object, loop through its properties as well.
const user = {
  name: "Sponge Bob",
  age: 25,
  address: {
    street: "123 Main St",
    city: "Bikini Bottom",
    country: "Pacific Ocean"
  },
  preferences: {
    theme: "dark",
    notifications: true
  }
}

let userText = ''
for (let key in user){
  if (typeof user[key] == 'object'){
    let userObj = user[key]
    for (let k in userObj){
      userText += `${k}: ${userObj[k]}\n`
    }
  } else {
    userText += `${key}: ${user[key]}\n`
  }
}

console.log(userText)
