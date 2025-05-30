// Sort()
// Mutate original array
// The sort() method in JavaScript is a built-in function used to sort the elements of an array in place. 

// By default, sort() converts elements to strings and compares their UTF-16 character sequences. 
// This works well for strings but can lead to unexpected results when sorting numbers.
const numbers = [10, 5, 40, 25]
numbers.sort()
console.log(numbers) // [10, 25, 40, 5]

// Sorting Numbers with sort()
// To sort numbers correctly, you need to provide a comparison function.
numbers.sort((a, b) => a - b)
console.log(numbers) // [5, 10, 25, 40]

// toSorted() 
// creates a new copy of the original array
const numbersA = [1, 5, 2, 4]
const numbersB = numbersA.toSorted((a, b) => a - b)
const numbersC = numbersA.toSorted((a, b) => b - a)
console.log(numbersA.toSorted((a,b) => b - a))//[ 5, 4, 2, 1 ]

console.log(numbersA)//[ 1, 2, 4, 5 ]
console.log(numbersB)//[ 1, 2, 4, 5 ]
console.log(numbersC)//[ 5, 4, 2, 1 ]

// Sorting Objects by a Property:
// You can also sort arrays of objects by a specific property using a comparison function.
const products = [
   { name: 'Laptop', price: 1000 },
   { name: 'Phone', price: 500 },
   { name: 'Tablet', price: 750 }
]
products.sort((a, b) => a.price - b.price)
console.log(products)//[{ name: 'Phone', price: 500 },{ name: 'Tablet', price: 750 },{ name: 'Laptop', price: 1000 }]
console.log(products.toSorted((a,b) => b.price - a.price))//[{ name: 'Laptop', price: 1000 }, { name: 'Tablet', price: 750 },{ name: 'Phone', price: 500 }]

// Refactor Sort
// You are given a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.
// The current implementation sorts the array using a for loop.
// Your task is to refactor this function to use the sort() method instead, for a more efficient and idiomatic approach.
// function sortNumbers(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         for (let j = i + 1; j < numbers.length; j++) {
//             if (numbers[i] > numbers[j]) {
//                 let temp = numbers[i];
//                 numbers[i] = numbers[j];
//                 numbers[j] = temp;
//             }
//         }
//     }
//     return numbers;
// }
const sortNumbers = numbers => numbers.sort((a, b) => a - b)
console.log(sortNumbers([6,5,4,1,2,3]))//[1,2,3,4,5,6]
console.log(sortNumbers([20,100,-20,0]))//[-20,0,20,100]

// Sort Names
// Create a sortNames function that takes an array of strings (names) and returns the array sorted alphabetically.
const sortNames = names => names.sort()
console.log(sortNames(['Bob','Alice','David']))//['Alice','Bob','David']
console.log(sortNames(['Xenia','Xander','Xavia']))//['Xander','Xavia','Xenia']

// Filter Best Books
// Create a function named filterAndSortBooks.
// This function will take two parameters: an array of book objects and a minimum rating value.
// Each book object contains a title, an author, and a rating. 
// The function should first use the filter() method to keep only the books with a rating greater than or equal to the minimum rating value.
// Then, it should use the sort() method to sort these filtered books in descending order of their ratings.
// The function should return the sorted array of books.
const filterAndSortBooks = (books,rating) => {
    const filterBooks = books.filter(book => book.rating >= rating)
    return filterBooks.sort((a,b) => b.rating - a.rating)
}
console.log('answer ---->')
console.log(filterAndSortBooks([{'title':'The Great Gatsby','author':'F. Scott Fitzgerald','rating':8.5},{'title':'1984','author':'George Orwell','rating':9},{'title':'To Kill a Mockingbird','author':'Harper Lee','rating':8.3}],8.4))
//[{'title':'1984','author':'George Orwell','rating':9},{'title':'The Great Gatsby','author':'F. Scott Fitzgerald','rating':8.5}]
console.log(filterAndSortBooks([{'title':'Atomic Habits','author':'James Clear','rating':9},{'title':'Mindset','author':'Carol Dwecks','rating':9},{'title':'Dare to Lead','author':'Brene Brown','rating':7.2}],7.3))
//[{'title':'Atomic Habits','author':'James Clear','rating':9},{'title':'Mindset','author':'Carol Dwecks','rating':9}]


const movements = [200,450,-400,3000,500]
console.log(movements.sort()) //sort() works in strings order[ -400, 200, 3000, 450, 500 ]
//ascending order
// movements.sort((a,b) => {
//     if (a > b) return 1
//     if (a < b) return -1
// })
movements.sort((a,b) => a - b)
console.log(movements)//[ -400, 200, 450, 500, 3000 ]

//decending order
// movements.sort((a,b)=> {
//     if (a > b) return -1
//     if (a < b) return 1
// })
movements.sort((a,b) => b - a)
console.log(movements)//[ 3000, 500, 450, 200, 400 ]


/////////////////////////////////////////////////////
//Reverse()
// Mutate original
const arr2 = [1,2,3,4,5]
console.log(arr2.reverse())//[ 5, 4, 3, 2, 1 ]
console.log(arr2)//[ 5, 4, 3, 2, 1 ]

let namesA = ['Bob', 'Alice', 'John', 'Zelda']
let newnames = namesA.reverse()
console.log(newnames)//[ 'Zelda', 'John', 'Alice', 'Bob' ]
console.log(namesA)//[ 'Zelda', 'John', 'Alice', 'Bob' ]

//Note: reverse() modify the original array, you can avoid it by
// 1.  adding slice() to create a copy of the original array first
const namesB = ['Bob', 'Alice', 'John', 'Zelda']
const namesC = namesB.slice().reverse()
console.log(namesB)//[ 'Bob', 'Alice', 'John', 'Zelda' ]
console.log(namesC)//[ 'Zelda', 'John', 'Alice', 'Bob' ]
// 2. use toReversed()
// create new array base on original
const namesD = namesB.toReversed()
console.log(namesB)//[ 'Bob', 'Alice', 'John', 'Zelda' ]
console.log(namesD)//[ 'Zelda', 'John', 'Alice', 'Bob' ]

// Reverse Array
// Create a function reverseArray that takes an array and returns the array reversed.
const reverseArray = array => array.reverse()
console.log(reverseArray([1,2,3,4]))
console.log(reverseArray(['a','b','c']))



//////////////////////////////////
//group by
const movementsA = [200,450,-400,3000,-500]
const groupMovements = Object.groupBy(movementsA,
    mov => 
    mov > 0 ? 'deposit' : 'withdraw')
console.log(groupMovements)
//{"deposit": [200,450,3000],"withdraw": [ -400, -500]}

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    type: 'premium'
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    type: 'standard'
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    type: 'premium'
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    type: 'basic'
  };
  
  const accounts = [account1, account2, account3, account4];
  const groupType = Object.groupBy(accounts, 
    acc => acc.type
  )
  console.log(groupType)
  /*
  {"premium": [
    {"owner": "Jonas Schmedtmann","movements": [200,450,-400,3000,-650,-130,70,1300],"type": "premium"},
    {"owner": "Steven Thomas Williams","movements": [200,-200,340,-300,-20,50, 400,-460],"type": "premium"}
    ],
    "standard": [
        {"owner": "Jessica Davis","movements": [5000, 3400,-150, -790,-3210,-1000,8500,-30],"type": "standard"}
    ],
    "basic": [
        {"owner": "Sarah Smith","movements": [430,1000, 700,50,90],"type": "basic"}
    ]
}
    */