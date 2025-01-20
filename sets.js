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