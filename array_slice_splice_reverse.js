const arr = ['a','b','c','d']

//SLICE METHOD : doesn't change the original array
//create some parts of the array using slice
console.log(arr.slice(2))//[ 'c', 'd' ]
console.log(arr.slice(2,3))//[ 'c' ]
console.log(arr.slice(-1))//[ 'd' ]
console.log(arr.slice(-2))//[ 'c', 'd' ]
//create a copy of any array
console.log(arr.slice())//['a','b','c','d']
console.log([...arr])//['a','b','c','d']

//SPLICE METHOD: modify the original array by deleting the splice part out of the array
const arr1 = ['a','b','c','d','e']

console.log(arr1.splice(-1))//[ 'e' ]
console.log(arr)//[ 'a', 'b', 'c' ,'d']
console.log(arr.splice(1,2)) //delete the first 2 items after the 1st item in the array.//[ 'b', 'c' ]
console.log(arr)//[ 'a', 'd' ]
