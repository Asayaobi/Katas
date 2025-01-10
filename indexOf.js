//Index Of

//write a function that takes an array of numbers and return the index of the largest number
function getLargestNumberIndex(arr){
    const largestNumber = Math.max(...arr)
    const output = arr.indexOf(largestNumber)
    return output
}

console.log(getLargestNumberIndex([3,6,12,8,0,1])) //2