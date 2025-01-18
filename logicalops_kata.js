//OR// finds the first truthy condition
console.log(0||'Joe')//'Joe'
console.log(3||'Joe')//3
console.log(undefined||null)//null
console.log(undefined||0||null||'Hello'||3)//'Hello'


//AND// runs until it meets falsy condition and stop
console.log(0 && 'Joe')//'Joe'
console.log(3 &&'Joe')//'Joe'
console.log('Hello' && 3 && undefined && 0)//undefined

const restaurant = {
    name: 'Papa John',
    orderPizza: function(...ingredients){
        console.log(ingredients)
        return `receive order: pizza with ${ingredients} `
    }
}
//Practical example
if (restaurant.orderPizza){
    const result = restaurant.orderPizza('ham', 'pineapple')
    console.log(result)//'receive order: pizza with cheese,pineapple '
}

restaurant.orderPizza && restaurant.orderPizza('cheese', 'onion')


/* Kata

Some of the book objects have the programmingLanguage property, 
which specifies what programming language is used in the book, for example
{
  title: 'Algorithms',
  author: ['Robert Sedgewick', 'Kevin Wayne'],
  ...
  programmingLanguage: 'Java',     // <-- HERE
}

Write a function called hasExamplesInJava that takes a book object from the books array as an argument. 
This function should return true if the book uses Java, 
or a string 'no data available' if it uses other language or no programming language at all.

Use short-circuiting.

Example 1 Code: hasExamplesInJava(books[0]); //True
Example 2 Code: hasExamplesInJava(books[1]); //"no data available"
*/ 
const books = [
    {
      title: 'Algorithms',
      author: ['Robert Sedgewick', 'Kevin Wayne'],
      publisher: 'Addison-Wesley Professional',
      publicationDate: '2011-03-24',
      edition: 4,
      keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
      pages: 976,
      format: 'hardcover',
      ISBN: '9780321573513',
      language: 'English',
      programmingLanguage: 'Java',
      onlineContent: true,
      thirdParty: {
        goodreads: {
          rating: 4.41,
          ratingsCount: 1733,
          reviewsCount: 63,
          fiveStarRatingCount: 976,
          oneStarRatingCount: 13
        }
      },
      highlighted: true
    },
    {
      title: 'Structure and Interpretation of Computer Programs',
      author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
      publisher: 'The MIT Press',
      publicationDate: '2022-04-12',
      edition: 2,
      keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
      pages: 640,
      format: 'paperback',
      ISBN: '9780262543231',
      language: 'English',
      programmingLanguage: 'JavaScript',
      onlineContent: false,
      thirdParty: {
        goodreads: {
          rating: 4.36,
          ratingsCount: 14,
          reviewsCount: 3,
          fiveStarRatingCount: 8,
          oneStarRatingCount: 0
        }
      },
      highlighted: true
    },
]

function hasExamplesInJava(bookObj){
    return bookObj.programmingLanguage === 'Java' || "no data available"
}

console.log(hasExamplesInJava(books[0]))//True
console.log(hasExamplesInJava(books[1]))//"no data available"

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

// Deny Access to Park
// Create a function checkVehicle that takes a parameter vehicle (a string).
// The function should prevent 'car', 'truck' and 'motorbike' from accessing the park, returning 'not allowed',
//  and should allow anyone else in, such as 'pedestrian', 'bicycle', and others, returning 'allowed'.
// Use the NOT EQUAL operator.

function checkVehicle(vehicle) {
    if (vehicle === 'car' || vehicle === 'truck' || vehicle === 'motorbike') {
        return 'not allowed'
    } else {
        return 'allowed'
    }
}

console.log(checkVehicle('car'))
console.log(checkVehicle('truck'))
console.log(checkVehicle('motorbike'))
console.log(checkVehicle('pedestrian'))
console.log(checkVehicle('bicycle'))
console.log(checkVehicle('bird'))

// Active users with role
// Create a function canAccess that takes 2 parameters: role (a string) and isActive (a boolean).
// The function should return 'true' if the user's role is either 'admin' or 'editor' and their account is active.
// For all other scenarios, the function should return 'false'.

function canAccess(role, isActive) {
    //if role = admin or editor and isActive true -> true
    //else false
    if (isActive === true && (role === 'admin' || role === 'editor')) {
        return 'True'
    } else {
        return 'False'
    }
}

console.log(canAccess('admin',true))
console.log(canAccess('admin',false))
console.log(canAccess('editor',true))
console.log(canAccess('editor',false))
console.log(canAccess('user',true))
console.log(canAccess('user',false))

// Vowels are "a", "e", "i", "o" and "u".
// Create a function countVowels that takes an array of letters, and returns the number of vowels in the array.

function countVowels(letters) {
    let sum = 0
    for (let l of letters) {
        if (l === 'a' || l === 'e' || l === 'i' || l === 'o' || l === 'u') {
            sum += 1
        }
    }
    return sum
}

console.log(countVowels(['h','a','i','k','u']))
console.log(countVowels(['a','c','a','d','e','m','y']))
console.log(countVowels(['c','o','d','e']))