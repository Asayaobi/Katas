const arr = ['a','b','c','d','e']

//Slice()
// Create new array based on original
//create some parts of the array using slice
console.log(arr.slice(2))//[ 'c', 'd','e' ]
console.log(arr.slice(2,3))//[ 'c' ]
console.log(arr.slice(-1))//[ 'e' ]
console.log(arr.slice(-2))//[ 'd', 'e' ]
//create a copy of any array
console.log(arr.slice())//['a','b','c','d','e']
console.log([...arr])//['a','b','c','d','e']

//Splice()
// Mutate original
const arr1 = ['a','b','c','d','e']

console.log(arr1.splice(-1))//[ 'e' ]
console.log(arr1)//[ 'a', 'b', 'c' ,'d']
console.log(arr1.splice(1,2)) //delete the first 2 items after the 1st item in the array.//[ 'b', 'c' ]
console.log(arr1)//[ 'a', 'd' ]

// toSpliced() 
// creates a new copy of the original array
const originalArr = ['a','b','c','d','e']
const newArr = originalArr.toSpliced(2,1) //after position2, delete 1 element
console.log(newArr)//[ 'a', 'b', 'd', 'e' ]

//Concat()
// creates a new copy of the original array
console.log(arr.concat(arr2))//[ 'a', 'd', 5, 4, 3, 2, 1 ]
console.log([...arr,...arr2])// [ 'a', 'd', 5, 4, 3, 2, 1 ]