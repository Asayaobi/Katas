// Destructuring Objects
// When you have an object with several properties, and you want to create variables for these properties
const person = {
    name: 'Alice',
    age: 25,
    occupation: 'Developer'
}
// Traditional Way Without Destructuring:
// const name = person.name
// const age = person.age
// const occupation = person.occupation

//with Destructuring
const {name, age, occupation} = person
console.log(name) //'Alice'
console.log(age)//25
console.log(occupation) //'Developer'

// You can also set default values that will be used if the property does not exist in the object.
const personA = {
    nameA: 'Alice',
    ageA: 25,
    occupation: 'Developer'
}
const { nameA, ageA, country = 'Unknown' } = personA
console.log(nameA) //'Alice'
console.log(ageA)//25
console.log(country) //'Unknown'

const users = {
    email: 'a@a.com'
}
const {firstname = 'guest', email} = users
console.log(`Hello ${firstname}`)

// Without Destructuring
// function addScores(scores) {
//     let score1 = scores.score1
//     let score2 = scores.score2
//     if (!score1) {
//         score1 = 1
//     }
//     if (!score2) {
//         score2 = 1
//     }
//     return score1 + score2
// }
// addScores({ score1: 10, score2: 20 }) 

// Without Destructuring
const addScores = scores => {
    let {score1 = 1, score2 = 1} = scores
    return score1 + score2
    }
console.log(addScores({ score1: 10, score2: 20 }) ) //30
console.log(addScores({ score1: 10}) ) //11

// Destructuring Arrays
// Array destructuring works similarly, allowing you to unpack values from arrays.

// Traditional Way Without Destructuring:
const colors = ['red', 'green', 'blue']
const firstColor = colors[0]
const secondColor = colors[1]
// With Destructuring: you can also skip over element
const [firstColour, ,thirdColour] = colors
console.log(firstColour) //'red'
console.log(thirdColour) //'blue'

const restaurant = {
    name: 'Pizza Hut',
    city: 'Jackson Ville',
    categories: ['Italian', 'Pizzaria', 'Vegetarian', 'Vegan'],
    crust : ['Italian Pan', 'Crispy Pan', 'Cheesy Pan'],
    menu: ['Double Pepperoni', 'Four Cheese', 'BBQ', 'Sausage Lover'],
    order: function(crustIdx, menuIdx){
        return [this.crust[crustIdx], this.menu[menuIdx]]
    }
}

let [, , c] = restaurant.categories
console.log(c)//'Vegetarian'

let [, b]= restaurant.categories
console.log(b)//'Pizzaria'

c = 'Children'
console.log(c)//'Children'
console.log(restaurant.categories)//['Italian', 'Pizzaria', 'Vegetarian', 'Vegan']

console.log(restaurant.order(0,2))//['Italian Pan', 'BBQ']
const [breadCrust, pizzaTopping] = restaurant.order(0,2)
console.log(breadCrust, pizzaTopping)//['Italian Pan', 'BBQ']


const nestedArr = ['log1', 2, [3, 'log4']]
const [l1, ,[, l4]] = nestedArr
console.log(l1, l4) //['log1','log4']

//default value prevents undefined
const [x = 1, y = 1, z = 1] = [9, 1]
console.log(x,y,z) //[9,1,1]
/////////////////////////////////////////////

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

//Katas
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
    {
      title: 'Computer Systems: A Programmer\'s Perspective',
      author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
      publisher: 'Prentice Hall',
      publicationDate: '2002-01-01',
      edition: 1,
      keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
      pages: 978,
      format: 'hardcover',
      ISBN: '9780130340740',
      language: 'English',
      programmingLanguage: 'C',
      onlineContent: false,
      thirdParty: {
        goodreads: {
          rating: 4.44,
          ratingsCount: 1010,
          reviewsCount: 57,
          fiveStarRatingCount: 638,
          oneStarRatingCount: 16
        }
      },
      highlighted: true
    },
    {
      title: 'Operating System Concepts',
      author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
      publisher: 'John Wiley & Sons',
      publicationDate: '2004-12-14',
      edition: 10,
      keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
      pages: 921,
      format: 'hardcover',
      ISBN: '9780471694663',
      language: 'English',
      programmingLanguage: 'C, Java',
      onlineContent: false,
      thirdParty: {
        goodreads: {
          rating: 3.9,
          ratingsCount: 2131,
          reviewsCount: 114,
          fiveStarRatingCount: 728,
          oneStarRatingCount: 65
        }
      }
    },
    {
      title: 'Engineering Mathematics',
      author: ['K.A. Stroud', 'Dexter J. Booth'],
      publisher: 'Palgrave',
      publicationDate: '2007-01-01',
      edition: 14,
      keywords: ['mathematics', 'engineering'],
      pages: 1288,
      format: 'paperback',
      ISBN: '9781403942463',
      language: 'English',
      programmingLanguage: null,
      onlineContent: true,
      thirdParty: {
        goodreads: {
          rating: 4.35,
          ratingsCount: 370,
          reviewsCount: 18,
          fiveStarRatingCount: 211,
          oneStarRatingCount: 6
        }
      },
      highlighted: true
    },
    {
      title: 'The Personal MBA: Master the Art of Business',
      author: 'Josh Kaufman',
      publisher: 'Portfolio',
      publicationDate: '2010-12-30',
      keywords: ['business'],
      pages: 416,
      format: 'hardcover',
      ISBN: '9781591843528',
      language: 'English',
      thirdParty: {
        goodreads: {
          rating: 4.11,
          ratingsCount: 40119,
          reviewsCount: 1351,
          fiveStarRatingCount: 18033,
          oneStarRatingCount: 1090
        }
      }
    },
    {
      title: 'Crafting Interpreters',
      author: 'Robert Nystrom',
      publisher: 'Genever Benning',
      publicationDate: '2021-07-28',
      keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
      pages: 865,
      format: 'paperback',
      ISBN: '9780990582939',
      language: 'English',
      thirdParty: {
        goodreads: {
          rating: 4.7,
          ratingsCount: 253,
          reviewsCount: 23,
          fiveStarRatingCount: 193,
          oneStarRatingCount: 0
        }
      }
    },
    {
      title: 'Deep Work: Rules for Focused Success in a Distracted World',
      author: 'Cal Newport',
      publisher: 'Grand Central Publishing',
      publicationDate: '2016-01-05',
      edition: 1,
      keywords: ['work', 'focus', 'personal development', 'business'],
      pages: 296,
      format: 'hardcover',
      ISBN: '9781455586691',
      language: 'English',
      thirdParty: {
        goodreads: {
          rating: 4.19,
          ratingsCount: 144584,
          reviewsCount: 11598,
          fiveStarRatingCount: 63405,
          oneStarRatingCount: 1808
        }
      },
      highlighted: true
    }
  ];

//1. Destructure the books array into two variables called firstBook and secondBook.
const [firstBook, secondBook] = books

//2. Destructure the books array into a variable called thirdBook. You must skip the first two books.
const [, , thirdBook] = books

//3.Below is the nested ratings array that contains two other arrays. 
// Destructure the nested ratings arrays into two variables called rating and ratingsCount. 
// In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.
const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
const [[,rating], [,ratingsCount]] = ratings
console.log(rating)//4.19
console.log(ratingsCount)//144584

//4.Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, 
// oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.
const ratingStars = [63405, 1808];
let [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars
console.log(fiveStarRatings, oneStarRatings, threeStarRatings) //[63405, 1808,0]