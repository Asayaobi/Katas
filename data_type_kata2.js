// Create a JavaScript function named formatDisplayName that takes two parameters: a user's first name and last name.
// If the last name is not provided, the function should return the error message: "Last name missing".
// The function should check if both parameters are strings and then return a formatted full name with a space in between.
// If either parameter is not a string, the function should return the error message: "Error, not a string".

function formatDisplayName(firstname, lastname) {
    if (!lastname) {
        return 'Last name missing'
    } else if (typeof firstname === 'string' && typeof lastname === 'string') {
        return firstname + ' ' + lastname
    } else {
        return 'Error, not a string'
    }
}

console.log(formatDisplayName('John', 'Doe'))
console.log(formatDisplayName('John'))
console.log(formatDisplayName('John', 100))
console.log(formatDisplayName(100, 'Doe'))
console.log(formatDisplayName(100, true));