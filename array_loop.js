//display all of the students who have a bike from the array.
// const students = ['chris', 'vally', 'viki']
// function addBike(students) {
// let output = ''
//     for (let student of students) {
//         output = output + student + ' has bike. '
//     }
//     return output
// }
// console.log(addBike(students));

// break it down with nested function
// add '\n' to start a new line

const students = ['chris', 'vally', 'viki']
function addBikeToStudent(student) {
    return student + ' has a bike.'
}

function addBikeToStudents(students) {
let output = ''
    for (let student of students) {
        output = output + addBikeToStudent(student) + '\n'
    }
    return output
}
console.log(addBikeToStudents(students))

//if you want to show the index in for of loop
//entries() returns an array of index and an array of elements
const friends = ['ross','chris', 'vally', 'viki']
for (const friend of friends.entries()){
    console.log(friend)//[ 0, 'ross' ]
    console.log(friend[0]) //0
    console.log(friend[1])//'ross'
    console.log(`${friend[0]+1}: ${friend[1]}`)//'1: ross' 
}

//with deconstucted variable
const menu = ['pizza', 'pasta', 'fries']
for (const[index, element] of menu.entries()){
    console.log(`${index}: ${element}`)//0: pizza, 1: pasta, 2: fries
}