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
const {name: firstName, age, occupation} = person
console.log(firstName) //'Alice'
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

const pizzaria = {
    name: 'Pizzaria',
    openingHours: {
        friday: {
            open: 12,
            close:23
        },
        saturday: {
            open: 14,
            close:23
        },
        sunday: {
            open: 18,
            close:21
        },
    }
}

//nested object
const {openingHours} = pizzaria
// console.log(openingHours)
const {friday: {open, close}} = openingHours
console.log(open) //12
console.log(close) //23


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
    },
    orderDelivery: function({crustIdx = 0, menuIdx = 0, address, time = '00:00'}){
        return `Order receieved at ${time} 
        for ${this.menu[menuIdx]} with ${this.crust[crustIdx]}
        deliver to ${address}.`
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

const {owner = [], crust} = restaurant
console.log(owner) //[]
console.log(crust)//['Italian Pan', 'Crispy Pan', 'Cheesy Pan']

console.log(restaurant.orderDelivery({
    address: 'Fifth Avenue 13-4',
    time: '10:00'
}))//Order received at 10:00 for Double Pepperoni with Italian Pan, deliver to Fifth Avenue 13-4

const nestedArr = ['log1', 2, [3, 'log4']]
const [l1, ,[, l4]] = nestedArr
console.log(l1, l4) //['log1','log4']

//default value prevents undefined
const [x = 1, y = 1, z = 1] = [9, 1]
console.log(x,y,z) //[9,1,1]


//Mutating Variable
// let value1 = 333
// let value2 = 666
// const obj = {value1: 111, value2: 222, value3: 333}
// ({value1,value2} = obj)
//value1 gets the value 111 from obj.value1 and value2 gets the value 222 from obj.value2
// console.log(value1,value2) // 111, 222

/////////////////////////////////////////////
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

//5.Destructure the first book object from the books array into variables called title, author and ISBN.
const {title, author , ISBN} = books[0]
console.log(title)//Algorithms
console.log(ISBN)//9780321573513

//6.Each book object has the keywords property. Destructure the first book object from the books array into a variable called tags. 
// The tags variable should be assigned with the value of the keywords property.
const {keywords:tags} = books[0]
console.log(tags)

//7.The seventh book from the books array is missing the programmingLanguage property. 
// Destructure the seventh book object (books[6]) into variables called language and programmingLanguage.
// Assign the programmingLanguage variable with a default value of 'unknown'.
const {language , programmingLanguage = 'unknown'} = books[6]
console.log(language)// English
console.log(programmingLanguage)//'unknown'

//8.Below are two variables called bookTitle and bookAuthor. 
//Reassign them with the values of the title and author properties of the first book object from the books array.
let bookTitle = 'unknown';
let bookAuthor = 'unknown';
({title: bookTitle, author: bookAuthor} = books[0])

/*9.Each book object has a deeply nested rating property as illustrated below:
{
    title: 'Algorithms',
    ...
    thirdParty: {
      goodreads: {
        rating: 4.41,              // <-- HERE
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13
      }
    }
  },
Destructure the first book object from the books array into a variable called bookRating. In the result of your destructuring, 
the bookRating variable should be assigned with the value of the book[0].thirdParty.goodreads.rating property.

Please do most of the work on the left side of the assignment operator: const ... = books[0]*/
const {thirdParty:{goodreads: {rating:bookRating}}} =  books[0]
console.log(bookRating) //4.41

/*10. Write a function called printBookInfo that has three parameters called title, author and year. 
This function should work for a single object passed as an argument, and it should log to the console information
about the book in this format: "${title} by ${author}, ${year}".

If year is undefined (was not passed), it should be assigned with a default value of 'year unknown'.

Code:
printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick', year: '2011' });
Expected output:
"Algorithms by Robert Sedgewick, 2011"
*/

function printBookInfo({title, author, year = 'year unknown'}){
    return `${title} by ${author}, ${year}`
}
console.log(printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick', year: '2011' }))//Algorithms by Robert Sedgewick, 2011
console.log(printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick' }))//"Algorithms by Robert Sedgewick, year unknown"

///////ES6 Enhanced object literal 
//if the name of the variable is the same as the property name, with ES6 you can use this shortcut
const hours = {
  friday: {
      open: 12,
      close:23
  },
  saturday: {
      open: 14,
      close:23
  },
  sunday: {
      open: 18,
      close:21
  }
}

const PizzaCompany = {
  name: 'Pizza Company',
  location: 'St. Luis',
  hours,
  // hours: hours
  order(...menu){
    return `${menu}`
},
//   order: function(...menu){
//     return `${menu}`
// },
}
console.log(PizzaCompany)

//deconstruct+ calculate properties
const days = ['mon', 'tue', 'wed','thu','fri','sat','sun']
const excercise = {
  [days[0]]: {
    start:'10.00',
    finish: '11.00'
  },
  [days[3]]:{
    start:'18.00',
    finish: '19.00'
  },
  [days[1 + 1]]: {
    start:'12.00',
    finish: '13.00'
  },
}
console.log(excercise)

