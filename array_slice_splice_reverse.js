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