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




