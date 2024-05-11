// Simplifying Nested If Statements
// You have a piece of JavaScript code that uses nested if statements. 
// Your task is to refactor this code into a single if statement using the correct logical operator 
// to streamline the code and improve readability.

function checkCredentials(username, password) {
    if (username === 'admin' && password === '12345') {
        return 'granted'
    } else {
            return 'denied'
        }
    }

console.log(checkCredentials('admin', '12345'))
console.log(checkCredentials('admin', '0000'))
console.log(checkCredentials('user', '12345'))
console.log(checkCredentials('user', '0000'))