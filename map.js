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

