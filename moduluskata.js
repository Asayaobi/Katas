let number = 0
function evenOrOdd(number) {
    if (number % 2 === 0){
        return 'even'
    } else {
        return 'odd'
    }
}
console.log(evenOrOdd(20))
console.log(evenOrOdd(1))
console.log(evenOrOdd(0))