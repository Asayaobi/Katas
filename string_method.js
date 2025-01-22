// 1. length
// The length property provides the length of the string, 
// i.e., the number of characters it contains. Just like in an array.
// Example:
const greeting = 'Hello, world!'
console.log(greeting.length) //13
console.log(greeting[0])//'H'
console.log(greeting[1])//'e'

// 2.charAt()
// Returns the character at a specified index. Index starts at 0.
// Example:
'hello'.charAt(1) // 'e'
console.log('first'.charAt(0))

// 3.includes()
// Checks if a string contains a specified substring.
// Example:
const sentence = 'The quick brown fox jumps over the lazy dog.'
sentence.includes('fox') // true
console.log(sentence.includes('quick'))

// 4. replace() and replaceAll()
// Replaces a specified value with another value in a string.
// Example:
let sentence1 = 'Hello, world'
sentence1.replace('world', 'JavaScript') // Output: 'Hello, JavaScript'
console.log(sentence.replace('fox', 'puppy'))

const priceEuro = '€2,50'
const priceUS = priceEuro.replace('€','$').replace(',','.')
console.log(priceUS) //'$2.50'

const announcement = 'Please board at door 12, door 12'
console.log(announcement.replace('door','gate'))//'Please board at gate 12, door 12'
console.log(announcement.replaceAll('door','gate'))//'Please board at gate 12, gate 12'
//using regular expression
console.log(announcement.replace(/door/g,'gate'))//'Please board at gate 12, gate 12'

// 5. slice()
// Extracts a part of a string and returns a new string.
// Example
let str = 'The quick brown fox'
str.slice(4, 9)
console.log(str.slice(4, 9))
console.log(str.slice(str.lastIndexOf(' ')))//'fox'
console.log(str.slice(-3))//'fox'

console.log(str.indexOf('b'))//10
console.log(str.indexOf('n'))//14
console.log(str.slice(10,14+1))//'brown'


// 6. split()
// Splits a string into an array of substrings.
// Example
let fruits = 'apple,orange,banana,mango'
fruits.split(',') // ['apple', 'orange', 'banana', 'mango']

let cities = 'Bangkok-Tokyo-London'
cities.split('-') // ['Bangkok', 'Tokyo', 'London'
console.log(cities.split('-'))

// 7. toLowerCase() / toUpperCase()
// Converts a string to lowercase or uppercase.
// Example
'Hello World'.toLowerCase() // 'hello world'
'Hello World'.toUpperCase() // 'HELLO WORLD'
const nameFormat = 'JoNaS'
const lowercaseName = nameFormat.toLowerCase()
const correctFormat = lowercaseName[0].toUpperCase()+lowercaseName.slice(1)
console.log(correctFormat) //'Jonas'


// 8. trim()
// Removes whitespace from both ends of a string.
// Example
'  Hello World  '.trim() // 'Hello World'
console.log('  Hello World  '.trim() )//'Hello World'
console.log('  JonAs@gMAIL.Io   \n'.trim().toLocaleLowerCase())//'jonas@gmail.io'

//9. indexOf
console.log('Hello'.indexOf('o'))//4
console.log('Hello'.indexOf('l'))//2
console.log('Hello'.lastIndexOf('l'))//3

console.log('Hi Hello'.indexOf('Hello')) //3
console.log('Hi Hello'.indexOf('hello')) //-1 means that it is not found (because of the lowercase)

//10. startsWith() endsWith()
console.log('Airbus'.startsWith('Air'))//true
console.log('Airbus'.endsWith('us'))//true

//11. join() join the arrays to string
const nameInput = 'Anthony Kings'
console.log(nameInput.split(' '))//[ 'Anthony', 'Kings' ]
const [firstName, lastName] = nameInput.split(' ')
const newName = ['Mr.', firstName, lastName].join(' ')
console.log(newName)//'Mr. Anthony Kings'

//capitalizeName
function capitalizedName(string){
  const nameArr = string.split(' ')
  const formatName = []
  for (let name of nameArr){
    name = name[0].toUpperCase() + name.slice(1)
    // name = name.replace(name[0], name[0].toUpperCase())
    formatName.push(name)
  }
  return formatName.join(' ')
}

console.log(capitalizedName('ana maria garcia'))////'Ana Maria Garcia'
console.log(capitalizedName('mario kart')) //'Mario Kart'

//12. padding
//add the length of this message to 25 and fill the empty space with +
const padding = 'go to gate23!'
console.log(padding.padStart(25,'+'))//'++++++++++++go to gate23!'
console.log(padding.padStart(25,'+').padEnd(35,"+"))//''++++++++++++go to gate23!++++++++++''

//maskCreditCard
function maskCreditCard(number){
  //convert number to a string
  //const string = String(number)
  const string = number + ''
  const lastDigits = string.slice(-4)
  const mask = lastDigits.padStart(string.length, '*')
  return mask
}
console.log(maskCreditCard(3417884598682343)) //'************2343'
console.log(maskCreditCard(34178843))//'****8843'


//13. repeat()
const greetingMessage = 'Hello'
console.log(greetingMessage.repeat(3)) //'HelloHelloHello'

function addSmiley(number){
  return '🙂'.repeat(number)
}
console.log(addSmiley(5))//'🙂🙂🙂🙂🙂'
//check baggage
function checkBaggage(items){
  const baggage = items.toLocaleLowerCase()
  if (baggage.includes('knife') || baggage.includes('gun')){
    return 'you are not allowed to board the plane'
  } else {
    return 'welcome on board'
  }
}
console.log(checkBaggage('I have a Knife and some food.'))//'you are not allowed to board the plane'
console.log(checkBaggage('I have some socks and a Laptop'))//'welcome on board'


// Return String Length
// Create a returnLength function that takes a parameter and returns its length 
// if it's a string. In any other case it returns the type of the parameter.
const returnLength = random => {
    return typeof random === 'string' ? random.length : typeof random
}
console.log(returnLength('hello'))//5
console.log(returnLength(''))//0
console.log(returnLength(10))//'number'
console.log(returnLength([1,2,3]))//'object'
console.log(returnLength(true))//'boolean'

// Is Longer Than
// Create a JavaScript function called isLongerThan.
// This function should take two parameters: a string and a number.
// It should return true if the length of the string is greater than the given number, and false otherwise.
const isLongerThan = (string, number) => string.length > number ? true : false
console.log(isLongerThan('hello',3))
console.log(isLongerThan('hello',5))
console.log(isLongerThan('',-1))
console.log(isLongerThan('',0))

// String into Array
// Create a JavaScript function named splitStringIntoArray.
// This function should take two parameters: a string and a delimiter. 
// It should divide the string into an array of substrings, separated by the specified delimiter, and return the resulting array.
const splitStringIntoArray = (string, delimiter) => string.split(delimiter)
console.log(splitStringIntoArray('apple,banana,cherry',','))
console.log(splitStringIntoArray('Hello World',' '))
console.log(splitStringIntoArray('one-two-three','-'))

// Search
// Create a function search that takes two parameters: an array of strings, and a string keyword.
// The function should return the string from the array that contains the keyword.
// Assume that there is only 1 string containing the keyword.

const search = (words, keyword) => {
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(keyword)) {
            return words[i]
        }
    }
}
console.log(search(['hello world','good morning'],'world'))
console.log(search(['123456','911'],'9'))

// Flip the String
// Create a function flipString that takes a string and returns the string flipped.
const flipString = word => word.split('').reverse().join('')
console.log(flipString('Hello'))
console.log(flipString(''))
console.log(flipString('Haiku Academy'))

// Format Phone Number
// A list of phone numbers was entered in the database as plain numbers, without proper formatting.
// Create a function formatPhoneNumber that takes a 12 digit number and formats it according to the tests.
// Assume the phone numbers never start with a zero.
// If the number is not a number, if it's falsy or if it's not 12 digits, return the error message.
const formatPhoneNumber = (numbers) => {
    let format = '-'
    if (typeof numbers !== 'number' || !numbers) {
        return 'invalid number'
    } else {
        let stringNumbers = String(numbers)
        if (stringNumbers.length !== 12) {
            return 'invalid number'
        } else {
            let result = stringNumbers.slice(0,3) + '-' + stringNumbers.slice(3,6) + '-' + stringNumbers.slice(6,9) + '-' + stringNumbers.slice(9,12)
            return result
        }
    }
}
console.log(formatPhoneNumber(123456789012))
console.log(formatPhoneNumber(123))
console.log(formatPhoneNumber(999999999999))
console.log(formatPhoneNumber(783543777241))
console.log(formatPhoneNumber(null))

//check if your seat is the middle seat or not. Note: B and E are middle seat
function checkMiddleSeat(seatnumber){
    let letter = seatnumber.slice(-1)
    if (letter === 'B' || letter === 'E') {
        return `it's a middle seat`
    } else {
        return `it's not a middle seat`
    }
}

console.log(checkMiddleSeat('1A'))

//////////////////////////////////////////////////////////
//Kata part1
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
//1. Take the ISBN property of the first book from the books array, 
// and log to the console characters at index 6, 4, 9 and 8. Use bracket notation to access individual characters.
const ISBN = books[0].ISBN
console.log(`${ISBN[6]},${ISBN[4]},${ISBN[9]},${ISBN[8]}`) //'1,3,3,7'

//2. Below is the quote variable that stores a string. Find the index of the word 'chess', and log it to the console.
const quote = 'A computer once beat me at chess, but it was no match for me at kick boxing'
console.log(quote.indexOf('chess'))//27

//3. Extract the word "boxing" from the same quote string, and log it to the console.
console.log(quote.slice(quote.lastIndexOf(' ')+1)) // 'boxing'

//4.Some authors are noted as "(Contributor)", for example "Julie Sussman (Contributor)". 
// Create a function called isContributor that takes an author's name as an argument, 
// and returns either true (if he's a contributor) of false (if he's not a contributor). 
// The string "(Contributor)" is always the last part of the author's name string.
//Example 1: isContributor('Julie Sussman (Contributor)')//true
//Example 2: isContributor('Robert Sedgewick');//false

function isContributor(str){
    //return (str.slice(str.lastIndexOf(' ')+1) === '(Contributor)')
    return str.lastIndexOf('Contributor') !== -1
}
console.log(isContributor('Julie Sussman (Contributor)'))//true
console.log(isContributor('Robert Sedgewick'))//false

//5. Write a function called normalizeAuthorName that takes an author's name (string) as an argument, 
// and returns the same string, but the first name and last name are capitalized, and the "(Contributor)" part is removed (if exists).

//You can be sure that the author's name always consists of two words separated by a space, 
// and possibly ends with "(Contributor)". The string may also contain trailing spaces.
//code: normalizeAuthorName('  JuliE sussMan (Contributor)')//"Julie Sussman"

function normalizeAuthorName(str){
  //1. tolowercase
let string = str.trim().toLowerCase()
  //2. if there's a word Contributor, remove it
if (string.includes('contributor')){
  const index = (string.indexOf('('))//14
  string = string.slice(0,index-1)
}
  //3. format upperCase + lowerCase
const spaceIdx = string.indexOf(' ')//5
const formatName = string[0].toUpperCase() + string.slice(1,spaceIdx + 1) + string[spaceIdx+1].toUpperCase() +string.slice(spaceIdx+2)
return formatName
}
console.log(normalizeAuthorName('  JuliE sussMan (Contributor)'))//"Julie Sussman"

//6. Take the title of the second book (books[1]) from the books array, 
// and replace the word "Programs" with "Software". Assign the new string to the newBookTitle variable.
console.log(books[1].title)//'Structure and Interpretation of Computer Programs'
const newBookTitle = books[1].title.replace("Programs","Software")
console.log(newBookTitle)//'Structure and Interpretation of Computer Software'

//7. Write a function called logBookTheme that takes book's title (string), and logs to the console:
//"This book is about computers" if the title starts with the word "computer",
//"This book is about algorithms and data structures" if the title includes both the "algorithms" and "structures" words,
//and, "This book is about some systems, but definitely not about operating systems" 
// if the title ends with the word "system" or "systems", but doesn't include the word "operating".
function logBookTheme(string){
  if (string.toLowerCase().startsWith('computer')) {
    return "This book is about computers"
  } else if (string.toLowerCase().includes('algorithms')&& string.toLowerCase().includes('structures')) {
    return "This book is about algorithms and data structures"
  } else if ((string.toLowerCase().endsWith('system') || string.toLowerCase().endsWith('systems')) && !string.toLowerCase().includes('operating')) {
    return "This book is about some systems, but definitely not about operating systems"
  }
}


//8. Below is the bookCategories variable that stores a string of categories. Each category is separated with a semicolon, 
// for example, in a string "science;computing", 'science' and 'computing' are separate categories.
//Write a function called logBookCategories that takes a string of categories separated with semicolons,
//  and logs each category to the console (as separate strings).

const bookCategories = 'science;computing;computer science;algorithms;business;operating systems;networking;electronics';
//logBookCategories(bookCategories)//science computing computer science algorithms business operating systems networking electronics

// const categoriesString = bookCategories => bookCategories.replaceAll(';', ' ')
function logBookCategories (bookCategories){
  const catArray = bookCategories.split(';')
  for (const c of catArray){
    console.log(c)
  }
}
logBookCategories(bookCategories)

//9. Now, the opposite. Each book from the books array has the keywords property.
//Write a function called getKeywordsAsString that takes the books array as an argument, 
// collects keywords from each book, removes duplicates, and then joins them to create a single string 
// where keywords are separated by a semicolon.

//Example getKeywordsAsString(books)//computer science;programming;algorithms;data structures;java;math;software;engineering;javascript;computer systems;C;operating systems;Java;mathematics;business;compilers;interpreters;work;focus;personal development
function getKeywordsAsString(books){
  //collects keywords from each book
  const allKeys = []
  for (const b of books){
    const keywords = b.keywords
    allKeys.push(...keywords)
  }
  //removes duplicates
  const uniqueKeywords = new Set(allKeys)
  const uniqueKeywordsArr = [...uniqueKeywords]
  //joins them to create a single string separated by a semicolon.
  return uniqueKeywordsArr.join(';')
}
console.log(getKeywordsAsString(books))
//'computer science;programming;algorithms;data structures;java;math;software;engineering;javascript;computer systems;C;operating systems;Java;mathematics;business;compilers;interpreters;work;focus;personal development'
