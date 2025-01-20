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
