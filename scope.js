function displayMessage(x) {
let message = 'Hello, this is a scope problem!'
    if (x) {
        return message
    } else {
        message = 'Hello'
        return message
    }
}

console.log(displayMessage(1))
console.log(displayMessage(0))