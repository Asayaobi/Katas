//Sets doesn't log duplicate value/ set has to be unique
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