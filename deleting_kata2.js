// A query has been made to a database and an array of users was returned, including the password property for each user object.
// Some of the passwords are encrypted (the user has an encrypted: true property), while others are not.
// Create a function removePasswords that takes a list of users in the format of an array of objects, deletes the password field only from users whose password is NOT encrypted, as well as the encrypted property, then returns the updated users array.

function removePasswords(users) {
    for (let user of users) {
        if (!user.encrypted) {
            delete user.password
            delete user.encrypted
        } else {
            delete user.encrypted
        }
    }
    return users
}

console.log(removePasswords([{'name':'Jack','age':45,'password':'123456'},{'name':'Bob','age':27,'password':'9!4%2!@','encrypted':true}]))
console.log(removePasswords([{'name':'Alice','password':'Alice'}]));