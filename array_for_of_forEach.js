//display all of the students who have a bike from the array.
// const students = ['chris', 'vally', 'viki']
// function addBike(students) {
// let output = ''
//     for (let student of students) {
//         output = output + student + ' has bike. '
//     }
//     return output
// }
// console.log(addBike(students));

// break it down with nested function
// add '\n' to start a new line

const students = ['chris', 'vally', 'viki']
function addBikeToStudent(student) {
    return student + ' has a bike.'
}

function addBikeToStudents(students) {
let output = ''
    for (let student of students) {
        output = output + addBikeToStudent(student) + '\n'
    }
    return output
}
console.log(addBikeToStudents(students))

//if you want to show the index in for of loop
//entries() returns an array of index and an array of elements
const friends = ['ross','chris', 'vally', 'viki']
for (const friend of friends.entries()){
    console.log(friend)//[ 0, 'ross' ]
    console.log(friend[0]) //0
    console.log(friend[1])//'ross'
    console.log(`${friend[0]+1}: ${friend[1]}`)//'1: ross' 
}

//with deconstucted variable
const menu = ['pizza', 'pasta', 'fries']
for (const[index, element] of menu.entries()){
    console.log(`${index}: ${element}`)//0: pizza, 1: pasta, 2: fries
}

//1. Use the for-of loop to loop over the books array and sum the pages of all books. 
// Use the pageSum variable below, and the pages property of the book objects.
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
  ]
  let pageSum = 0
  for (const book of books){
    pageSum += book.pages
  }
  console.log(pageSum)//6380

  const pages = books.reduce((acc, book) => acc += book.pages, 0)
  console.log(pages)//6380

//2. Below is the allAuthors variable which stores an empty array. 
// Use the for-of loop to fill allAuthors with the authors of each book from the books array.
// Remember that each book object has the author property, which can be a string (if there is only a single author) or an array 
// (if there are multiple authors). You may need to use the typeof operator. 
// You can also use multiple loops if needed. The allAuthors array should have just one level (no nested arrays).
const allAuthors = []
for (const book of books){
    if(typeof book.author === 'string'){
        allAuthors.push(book.author)
    } else {
        allAuthors.push(...book.author)
        // for (const author of book.author)
        // allAuthors.push(author)
    }
}
console.log(allAuthors)

//3.Use the for-of loop together with Array's entries() method to log each author from allAuthors to the console 
// together with its index. Make the index start from 1, instead of 0.
for (const [index,author] of allAuthors.entries()){
    console.log(`${index+1}. ${author}`)//'1. Robert Sedgewick' '2. Kevin Wayne' '3. Harold Abelson'
}



////////////////////////////////
//forEach()
//only loop the array without create a new array
//eg. loop an array to add a new property, loop to read the value
const bankMovement = [200,100,-200,300,-200]

bankMovement.forEach(function(movement){
    if (movement>0){
        console.log(`you have deposit $${movement}`)
    } else {
        console.log(`you have withdraw $${Math.abs(movement)}`)
    }
})
/*you have deposit $200
you have deposit $100
you have withdraw $200
you have deposit $300
you have withdraw $200*/

console.log('movement, index, array')
//forEach passes 1. element of the array, 2. index of that array 3. array
bankMovement.forEach(function(movement,index,array){
    if (movement>0){
        console.log(`Movement${index+1}: you have deposit $${movement}`)
    } else {
        console.log(`Movement${index+1}: you have withdraw $${Math.abs(movement)}`)
    }
})
/*
Movement1: you have deposit $200
Movement2: you have deposit $100
Movement3: you have withdraw $200
Movement4: you have deposit $300
Movement5: you have withdraw $200
*/

//For of loop
console.log('with for of')
for (const [index,element] of bankMovement.entries()){
    if (element>0){
        console.log(`Movement${index+1}: you have deposit $${element}`)
    } else {
        console.log(`Movement${index+1}: you have withdraw $${Math.abs(element)}`)
    }
}


//forEach with Map
const currencies = new Map([
    ['USD','United States Dollar'],
    ['EUR','Euro'],
    ['GBP','Pound Sterling']
])

currencies.forEach(function(value,key,map){
    console.log(`${key}: ${value}`)
})
// USD: United States Dollar
// EUR: Euro
// GBP: Pound Sterling

//forEach with Set -- Set doesn't have a key so you can us omit sign _ in the parameter
const currenciesUnique = new Set(['USD','EUR','USD','GBP','GBP'])
console.log(currenciesUnique)//{'USD','EUR','GBP'}
currenciesUnique.forEach(function(value,_,map){
    console.log(`${_}:${value}`)
})
//USD:USD
//EUR:EUR
//GBP:GBP


///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, 
and stored the data into an array (one array for each). 
For now, they are just interested in knowing whether a dog is an adult or a puppy. 
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! 
So create a shallow copy of Julia's array, and remove the cat ages from that copied array 
(because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult 
("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets


TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

*/



const checkDogs = function(dogsJulia,dogsKate){
    //remove the FIRST and the LAST TWO dogs from dogsJulia
    const dogs = [...dogsJulia]
    dogs.shift() //or dogs.splice(0,1)
    dogs.splice(-2)

    //Create an array with both Julia's (corrected) and Kate's data
    const alldogs = [...dogs, ...dogsKate] //or dogs.concat(dogsKate)
    //log the console
    alldogs.forEach((age, i)=>{
        if (age >= 3){
            console.log(`Dog number ${i+1} is an adult, and is ${age} years old`)
        } else {
            console.log(`Dog number ${i+1} is still a puppy 🐶`)
        }
    })
}

checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3])
checkDogs([9, 16, 6, 8, 3],[10, 5, 6, 1, 4])