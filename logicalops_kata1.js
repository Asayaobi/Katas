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

// Refactoring Adjacent If Statements
// You have a JavaScript function that uses multiple adjacent "if" statements.
// Your objective is to refactor this code into a single "if" statement using the correct logical operator.
// This change aims to make the code more concise and readable.

function checkRole(role) {
    if (role === 'admin' || role === 'editor') {
        return 'granted'
    } else {
        return 'denied'
    }
}

console.log(checkRole('admin'))
console.log(checkRole('editor'))
console.log(checkRole('user'))
