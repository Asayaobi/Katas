// IndexOf()
// returns the first index at which a given element can be found in the array, or -1 if it is not present.
const fruits1 = ['apple', 'banana', 'orange']

const orangeIndex = fruits1.indexOf('orange')
console.log(orangeIndex)//2 

const kiwiIndex = fruits1.indexOf('kiwi')
console.log(kiwiIndex)//-1

//findIndex()
const firstBigMovementIndex = movements.findIndex(mov => Math.abs(mov) > 1000)
console.log(firstBigMovementIndex) //3

//findLastIndex()
//assume that big movement is the amount that is more than 1000
//find your latest big movement and show that it was x movements ago
const latestBigMovementIndex = movements.findLastIndex(mov => Math.abs(mov) > 1000)
console.log(latestBigMovementIndex) //7
console.log(`your latest big movement was ${movements.length - latestBigMovementIndex} movements ago`)////'your latest big movement was 1 movements ago'


//at method
const arr = [1,2,3,4,5]
console.log(arr[0])//1
console.log(arr.at(0))//1

//log the last element of an array
console.log(arr[arr.length-1])//5
console.log(arr.slice(-1))//[ 5 ]
console.log(arr.slice(-1)[0])// 5 
console.log(arr.at(-1))//5