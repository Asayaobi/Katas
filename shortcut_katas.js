// Create a JavaScript function called decrementValue.
// This function should take a single parameter, a number, and use the decrement operator to decrease the value of the number by one.
// The function should then return the decremented value.

function decrementValue(number) {
    number--
    return number
}

console.log(decrementValue(5))
console.log(decrementValue(100));

// Replace the sum calculation in the following code with the Addition Assignment operator.
// Don't delete the variable c.
function addTen(a) {
    let c = 10
    c += a
    return c
}

console.log(addTen(5));
console.log(addTen(10));

// In the following function, convert the if condition into a ternary operator.

// Use a shortcut in the following function to replace the increment of i in the loop and the increment of sum.
function timer() {
    let sum = 0
    for (let i = 0; i < 10; i++) {
      sum++
    }
    return sum
  }

  console.log(timer());





function numerToBoolean(n) {
    if (n > 0) {
        return true
    } else {
        return false
    }
}

function numberToBoolean(n) {
    return n > 0 ? true : false
}



console.log(numberToBoolean(5));
console.log(numberToBoolean(-30))

// Halfordouble
// Create a function halfOrDouble that takes an array of numbers.
// The function should then check the value of each number and, if it's less than 10, it should double it, otherwise it should halve it.
// The function should then return the updated array.
// Use a ternary operator.



  function halfOrDouble1(numbers) {
        let output = []
        let newnumber = 0
        let c = 0
        for (let number of numbers) {
            newnumber = number <= 10 ? number *= 2 : number /= 2
            output[c] = newnumber
            c++
        }
        return output
    }

console.log(halfOrDouble1([10,5,2,14]))
