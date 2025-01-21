//Unlike array, sets doesn't log duplicate value/ set has to be unique
const orders = new Set(['pizza', 'risotto', 'pizza', 'pasta', 'pizza'])
console.log(orders)//Set { 0: 'pizza', 1: 'risotto', 2: 'pasta' }

//check the length of the set
console.log(orders.size)//3

//check if 'pizza' is included in the set
console.log(orders.has('pizza'))//true
console.log(orders.has('fries'))//false

//add item to the set
console.log(orders.add('garlic bread'))
console.log(orders)//Set { 0: 'pizza', 1: 'risotto', 2: 'pasta', 3: 'garlic bread' }

//delete item from set
console.log(orders.delete('garlic bread'))
console.log(orders)//Set { 0: 'pizza', 1: 'risotto', 2: 'pasta' }

//delete all element from the set
const forDelete = new Set(['pizza', 'risotto', 'pizza', 'pasta', 'pizza'])
console.log(forDelete.clear())
console.log(forDelete)//Set {}

//loop through the set
for (const order of orders) console.log(order)//'pizza' 'risotto' 'pasta'

const spelling = new Set('Spice')
console.log(spelling)//Set { 0: 'S', 1: 'p', 2: 'i', 3: 'c', 4: 'e' }
console.log(spelling.size)//5

//////////////////////////
//Example) Remove duplicate values
const menu = ['pizza', 'risotto', 'pizza', 'pasta', 'pizza']
const uniqueMenuSet = new Set(menu)
console.log(uniqueMenuSet)//Set { 0: 'pizza', 1: 'risotto', 2: 'pasta' }

const uniqueMenuArray = [...new Set(menu)]
console.log(uniqueMenuArray)//[ 'pizza', 'risotto', 'pasta' ]

//find out how many unique item in the menu
console.log(new Set(menu).size) //3

//count unique letter in a string
const letters = 'letters'
console.log(new Set(letters).size)//5


///////////////////////////////////////
// New Operations to Make Sets Useful!
// Set Intersection
function setIntersection(setA, setB) {
    return new Set([...setA].filter((item) => setB.has(item)));
  }
  
  // Set Union
  function setUnion(setA, setB) {
    return new Set([...setA, ...setB]);
  }
  
  // Set Difference
  function setDifference(setA, setB) {
    return new Set([...setA].filter((item) => !setB.has(item)));
  }
  
  // Usage
  const setA = new Set([1, 2, 3]);
  const setB = new Set([2, 3, 4]);
  
  console.log(setIntersection(setA, setB)); // Set { 2, 3 }
  console.log(setUnion(setA, setB));       // Set { 1, 2, 3, 4 }
  console.log(setDifference(setA, setB)); // Set { 1 }
  

const italianFoods = new Set([
    'pasta',
    'gnocchi',
    'tomatoes',
    'olive oil',
    'garlic',
    'basil',
  ]);
  
  const mexicanFoods = new Set([
    'tortillas',
    'beans',
    'rice',
    'tomatoes',
    'avocado',
    'garlic',
  ]);

//intersection shows similar items between 2 sets
console.log(italianFoods.intersection(mexicanFoods))//{'tomatoes', 'garlic'}
//log answer in an array
const common = italianFoods.intersection(mexicanFoods)
console.log([...common])//['tomatoes', 'garlic']


//union join together 2 sets and only show unique value
console.log(italianFoods.union(mexicanFoods))//{'pasta', 'gnocchi', 'tomatoes', 'olive oil', 'garlic', …}
console.log(new Set([...italianFoods,...mexicanFoods]))// {'pasta', 'gnocchi', 'tomatoes', 'olive oil', 'garlic', …}
console.log([...new Set([...italianFoods,...mexicanFoods])])
//['pasta', 'gnocchi', 'tomatoes', 'olive oil', 'garlic', 'basil', 'tortillas', 'beans', 'rice', 'avocado']
  
//remove items that are common between the 2 sets
console.log(italianFoods.difference(mexicanFoods))//{'pasta', 'gnocchi', 'olive oil', 'basil'}
console.log(mexicanFoods.difference(italianFoods))//{'tortillas', 'beans', 'rice', 'avocado'}

//show only unique element (remove the common element) of 2 sets
console.log(italianFoods.symmetricDifference(mexicanFoods))//{'pasta', 'gnocchi', 'olive oil', 'basil', 'tortillas', "beans", "rice", "avocado"}

//check if the first set is totally different from another set
console.log(italianFoods.isDisjointFrom(mexicanFoods))//false

///////////////////////Kata//////////////////////////
//1. Below is the allKeywords variable, which stores an empty array. Loop over the books array, 
// and fill the allKeywords array with the keywords coming from the keywords property of each book object. 
// The allKeywords array should have just one level (no nested arrays).
//allKeywords : ['computer science', 'programming', 'algorithms', 'data structures', ...].

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
  ];

  const allKeywords = []
  for(const book of books){
    allKeywords.push(...book.keywords)
  }
console.log(allKeywords)
// ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering', 'computer science', 'programming', 'javascript', 'software', 'engineering']

//2.The allKeyword array contains duplicates. Remove them by creating a Set out of that array. Assign the newly created set to the uniqueKeywords variable.
const uniqueKeywords = new Set(allKeywords)
console.log(uniqueKeywords)//{'computer science', 'programming', 'algorithms', 'data structures', 'java', …}

//3. Add two more keywords to the uniqueKeywords set, for example, 'coding' and 'science'.
uniqueKeywords.add('coding')
uniqueKeywords.add('science')

//4.Delete 'business' from the uniqueKeywords set.
uniqueKeywords.delete('business')

//5. Create an array out of the uniqueKeywords set, and assign it to the uniqueKeywordsArr variable
const uniqueKeywordsArr = [...uniqueKeywords]
console.log(uniqueKeywordsArr)
//['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering', 'javascript', 'coding', 'science']

//6.Delete all items from the uniqueKeywords set.
uniqueKeywords.clear()