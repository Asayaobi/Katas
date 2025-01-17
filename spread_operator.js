// Spread Operator
// The spread operator is represented by three dots (...). It can be used in different contexts:

// In function calls: myFunction(...iterableObj)
// In array literals: [...iterableObj, 'newItem1', 'newItem2']
// In object literals: {...obj, newProp: 'value'}
// Using Spread Operator with Arrays
// The spread operator can be used to combine or clone arrays in a more concise way.

// Combining Arrays:
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const combinedArr = [...arr1, ...arr2]
const doubleArr = [...arr2,...arr2]
console.log(combinedArr) // Output: [1, 2, 3, 4, 5, 6]
console.log(doubleArr)// Output: [4, 5, 6, 4, 5, 6]

// Cloning Arrays:
const originalArr = ['a', 'b', 'c']
const clonedArr = [...originalArr]
console.log(clonedArr) // Output: ['a', 'b', 'c']

// Spread Operator in Function Arguments
// The spread operator can also be used to pass the elements of an array as arguments to a function.
function sum(x, y, z) {
    return x + y + z
}
const numbers = [1, 2, 3]
console.log(sum(...numbers)) // Output: 6

// Cloning Objects:
const originalObj = { a: 1, b: 2 }
const clonedObj = { ...originalObj }
console.log(clonedObj) // Output: { a: 1, b: 2 }

// Merging Objects:
const obj1 = { a: 1, b: 2 }
const obj2 = { b: 3, c: 4 }

const mergedObj = { ...obj1, ...obj2 }
console.log(mergedObj) // Output: { a: 1, b: 3, c: 4 }
//Note that properties in obj2 will overwrite properties in obj1 with the same key.

const colors = ['red', 'green', 'blue']
// Using Spread with Array Destructuring in sorting
const [firstColor1, ...otherColors] = colors
// Here, firstColor1 is 'red', and otherColors is an array containing the rest of the colors (['green', 'blue']).
console.log(colors) // ['red', 'green', 'blue']
console.log(otherColors) // ['green', 'blue']

//if you want grren first
const getGreenFirst = ['green', ...colors.filter(c => c != 'green')]
console.log(getGreenFirst)
//get any color first
const getFirstColor = value => [value, ...colors.filter(c => c != value)]
console.log(getFirstColor('blue'))

//Iterables: arrays, strings, maps, sets BUT NOT objects
const firstname = 'Jonas'
const fullName = [...firstname, '', 'J', '.']
console.log(fullName)//['J','o','n','a','s','','J','.']

//Notes: spread operator doesn't work on template literal ex. ${...firstname} because it doesn't expect multiple values

const restaurant = {
    name: 'Italian World',
    city: 'Jackson Ville',
    orderPasta: function(ingr1, ingr2, ingr3){
        return `here is your pasta with ${ingr1}, ${ingr2}, ${ingr3}`
    },
}

// const ingredients = [
//     prompt('What kind of pasta would you like?'),
//     prompt('What kind of meat would you like?'),
//     prompt('What kind of topping would you like?')
// ]
const ingredients = ['spaghetti', 'beef', 'bolognese']
console.log(restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]))//'here is your pasta with spaghetti, beef, bolognese'
console.log(restaurant.orderPasta(...ingredients))//'here is your pasta with spaghetti, beef, bolognese'


///////////////////////////////////////////////////////
/*Katas

1. Each book object has the author property, which stores an array of strings (author names) 
if there are multiple authors, or a single string (author name) if there is just one author.

Declare an array called bookAuthors, and fill it with authors of the first two books from the books array. 
The bookAuthors array should have just one level (no nested arrays).*/

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

const bookAuthors = [...books[0].author, ...books[1].author]
console.log(bookAuthors)//['Robert Sedgewick', 'Kevin Wayne', 'Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)']

/*
2.Write a function called spellWord that accepts a single string as an argument. 
This function should log to the console each letter of the argument separated by a space.
Code: spellWord('JavaScript') 
Expected output: "J a v a S c r i p t"
*/

function spellWord(word) {
    console.log(...word)
  }
console.log(spellWord('JavaScript'))//[ 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't' ]


//////////////////////////////////////////////////////
//Spread operator is on the left side of =
//Rest operator is on the right side of =

const [a, b, ...others] = [1, 2, 3, 4, 5]
console.log(b)//2
console.log(others)//[3, 4, 5]

const burgerParadise = {
  name: 'Burger Paradise',
  mainMenu: ['Double Cheese Burger', 'Classic Burger', 'Fish Burger', 'Vegan Burger'],
  sidedish: ['French Fries', 'Onion Rings'],
  openingHours: {
    fri: {
      open: '10:00',
      close: '24:00'
    },
    sat: {
      open: '13:00',
      close: '24:00'
    },
    sun: {
      open: '13:00',
      close: '22:00'
    }
  }
}

//...rest with array
const [cheeseBurger,,fishBurger,...otherFood] = [...burgerParadise.mainMenu,...burgerParadise.sidedish]
console.log(cheeseBurger)//'Double Cheese Burger'
console.log(fishBurger)//'Fish Burger'
console.log(otherFood)//['Vegan Burger', 'French Fries', 'Onion Rings']

//...rest with object
const {fri,...weekend} = burgerParadise.openingHours
console.log(weekend)//{sat: { open: '13:00', close: '24:00' },sun: { open: '13:00', close: '22:00' }}

//...rest with function
const logNumbers = (...numbers) => numbers
console.log(logNumbers(1,2))//[1,2]
console.log(logNumbers(1,2,3,4))//[1,2,3,4]

const addNumbers = (...numbers) => {
  let sum = numbers.reduce((num,acc) => num + acc)
  return sum
}
console.log(addNumbers(1,2))//3
console.log(addNumbers(1,2,3,4))//10

const x = [10,20,30]
console.log(addNumbers(...x))//60

const orderPizza = (mainIngrdient, ...otherIngredients) => `you've ordered ${mainIngrdient} pizza with ${otherIngredients}`
console.log(orderPizza('mushroom', 'cheese', 'onion','chili'))//you've ordered mushroom pizza with cheese, onion, chili
console.log(orderPizza('pepperoni', 'olive'))//you've ordered pepperoni pizza with olive

/////////////////////////////////////
/*Kata

Destructure the keywords property (array) of the first book from the books array into variables called mainKeyword and rest. 
The first keyword should be assigned to mainKeyword, 
and the rest of the keywords should be assigned to the rest variable (it should be an array).
*/

const abooks = [
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

const [mainKeyword, ...rest] = abooks[0].keywords
console.log(mainKeyword)//computer science
console.log(rest)//['programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering']

/*2. Destructure the second book from the books array into a variable called bookPublisher. 
The bookPublisher variable should be assigned with the value of the publisher property of the book object. 
Assign the rest of the properties to the restOfTheBook variable.*/
const {publisher: bookPublisher,...restOfTheBook} = abooks[1]
console.log(bookPublisher)//'The MIT Press'
console.log(restOfTheBook)//publicationDate: '2022-04-12',edition: 2,keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],...

/*3. Write a function called printBookAuthorsCount that has two parameters called title and authors. 
The authors parameter should accept any number of arguments. 
This function should log to the console a string formatted like that: "The book "${title}" has ${authors.length} authors"
Code: printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');
Expected Output: "The book "Algorithms" has 2 authors"*/

function printBookAuthorsCount(title,...authors){
  return `"The book "${title}" has ${authors.length} authors`
}
console.log(printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne'))//The book "Algorithms" has 2 authors