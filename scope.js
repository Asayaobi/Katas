let x = 0
function displayMessage(x) {
    if (x === 1) {
        let message = 'Hello, this is a scope problem!'
        return message
    } else {
        message = 'Hello'
        return message = 'Hello'
    }
}

console.log(displayMessage(1))
console.log(displayMessage(0))