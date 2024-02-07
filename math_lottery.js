// Create a function winTheLottery that takes an array of 4 strings, as per the tests below.
// The function should generate a random number between 0 and 4 which will be used to extract one of the strings from the array.
// The functions should then return the extracted string.


function winTheLottery(array) {
    const i = Math.ceil(Math.random() * 4)
    return array[i]
}

console.log(winTheLottery(['lose', 'lose', 'win', 'lose']));






// console.log(winTheLottery(['lose', 'lose', 'win', 'lose'])) // sometimes 'win', sometimes 'lose'
// function winTheLottery(array) {
    //Math.random() to get number 0 - 4
    // const i = Math.ceil(Math.random() * 4)
    // console.log(i)
    // use that as an index to show the result in the array
//     return array[i]
// }