// Add Age
// Your task is to create a JavaScript function named addAge.
// This function should take two parameters: an object and a number.
// The function should add the provided number to the object as age and return the updated object.
// function addAges(users,numbers) {
//     let i = 0
//     for(let user of users){
//         user.age = numbers[i]
//         i++
//     }
//     return users
// }
function addAges(users, numbers) {
    for (let i = 0; i < users.length; i++) {
        users[i].age = numbers[i]
    }
    return users
}
console.log(addAges([{'name':'Alice'},{'name':'Bob'}],[21,51]))
console.log(addAges([{'name':'Tom'},{'name':'Tim'},{'name':'Tam'}],[30,31,32]));
