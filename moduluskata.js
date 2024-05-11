
// Even or Odd
// Create a function evenOrOdd that takes a number parameter 
// and returns 'even' if the number is even, or 'odd' if the number is odd.

function evenOrOdd(n) {
    if (n % 2 === 0){
        return 'even'
    } else {
        return 'odd'
    }
}

console.log(evenOrOdd(20))
console.log(evenOrOdd(1))
console.log(evenOrOdd(0))