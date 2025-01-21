//Create map
const restaurant = new Map()

//add 
restaurant.set('name', 'Classico Italiano')

//read
console.log(restaurant)//Map { 'name': 'Classico Italiano' }
console.log(restaurant.get('name'))//'Classico Italiano'

//see if the restaurant opens or closes
restaurant.set('open', 11)
restaurant.set('close', 23)
restaurant.set(true, 'we are open :)')
restaurant.set(false, 'we are closed')

const currentTime = 22
// if (currentTime > restaurant.get('open') && currentTime < restaurant.get('close')){
//      console.log(restaurant.get(true)) //'we are open :)'
// } else {
//     console.log(restaurant.get(false))
// }
console.log(restaurant.get(currentTime > restaurant.get('open') && currentTime < restaurant.get('close'))  //'we are open :)'
)

//check if there's an item in the map
console.log(restaurant.has('open'))//true

//delete item
restaurant.delete('open')
console.log(restaurant)//Map {'name': 'Classico Italiano','close': 23,true: 'we are open :)',false: 'we are closed}

//length
console.log(restaurant.size) //4

//remove all element from the map
restaurant.clear()
console.log(restaurant)//Map {}


///////////////////////////////////////////////////////////////
// Kata
//1. Create a new book, but this time, as a Map. Assign it to the bookMap variable. Use this array as initial data:
//[['title', 'Clean Code'], ['author', 'Robert C. Martin']]
const bookMap = new Map([['title', 'Clean Code'], ['author', 'Robert C. Martin']])
console.log(bookMap)//Map { 'title': 'Clean Code', 'author': 'Robert C. Martin' }

//2.Set a new key in bookMap called pages, and assign it with a number 464.
bookMap.set('pages', 464)
console.log(bookMap)//Map {'title': 'Clean Code','author': 'Robert C. Martin','pages': 464}

//3.Get the title and author values from bookMap, and log to the console a string formatted like that: "${title} by ${author}".
console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`)//'Clean Code by Robert C. Martin'

//4.Get the size of bookMap, and log it to the console.
console.log(bookMap.size)//3

//5.Check if bookMap has the author key. and if so, log "The author of the book is known" to the console.
console.log(bookMap.has('author') && "The author of the book is known")//"The author of the book is known"


///////////////////////////////////////
// Maps: Iteration
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try again!'],
  ]);
  console.log(question)
  /* Map {
  'question': 'What is the best programming language in the world?',
  1: 'C',
  2: 'Java',
  3: 'JavaScript',
  'correct': 3,
  true: 'Correct 🎉',
  false: 'Try again!'
}*/

console.log([...question.keys()])//Array(7) [ 'question', 1, 2, 3, 'correct', true, false ]
console.log([...question.values()])
//Array(7) ['What is the best programming language in the world?', 'C', 'Java', 'JavaScript',3, 'Correct 🎉', 'Try again!']


/////////convert object to Map with Object.entries()
  const questionObject = {
        'question': 'What is the best programming language in the world?',
        1: 'C',
        2: 'Java',
        3: 'JavaScript',
        'correct': 3,
        true: 'Correct 🎉',
        false: 'Try again!'
  }
//Step 1. Object.entries() will return the array
console.log(Object.entries(questionObject))
/*Array(7) [
    [ '1', 'C' ],
    [ '2', 'Java' ],
    [ '3', 'JavaScript' ],
    [ 'question', 'What is the best programming language in the world?' ],
    [ 'correct', 3 ],
    [ 'true', 'Correct 🎉' ],
    [ 'false', 'Try again!' ]
  ]
  */
//Step 2.put that array in to new Map(array)
 const createMap = new Map(Object.entries(questionObject))
 console.log(createMap)
 /* Map {
  '1': 'C',
  '2': 'Java',
  '3': 'JavaScript',
  'question': 'What is the best programming language in the world?',
  'correct': 3,
  'true': 'Correct 🎉',
  'false': 'Try again!'
} */

 //////convert map back to an array
 console.log([...createMap])
/*Array(7) [
    [ '1', 'C' ],
    [ '2', 'Java' ],
    [ '3', 'JavaScript' ],
    [ 'question', 'What is the best programming language in the world?' ],
    [ 'correct', 3 ],
    [ 'true', 'Correct 🎉' ],
    [ 'false', 'Try again!' ]
  ]
  */
 
 
  /////////////////////////////
 //Quiz app
 console.log(question.get('question'))//'What is the best programming language in the world?'
 for (const [key,value] of question){
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`)
        //'Answer 1: C' 'Answer 2: Java' 'Answer 3: JavaScript'
 }

//  let answer = Number(prompt('type your answer'))
let answer = 3

console.log(question.get(answer === question.get('correct'))) //'Correct 🎉'

////////////////////////////////////////////////
//Kata
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

//1. Convert the first book object from the books array into a Map, and assign it to a firstBookMap variable.
const firstBookMap = new Map(Object.entries(books[0]))
console.log(firstBookMap)