const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2025-1991,
    job: 'teacher'
}

//using dot vs bracket notation to access object data
console.log(jonas.lastName) //'Schmedtmann'
console.log(jonas['lastName']) //'Schmedtmann'

const nameKey = 'Name'
console.log(jonas['first' + nameKey]) //Jonas

// const answer = prompt('what do you want to know about Jonas? age, firstName, lastName, job?') //type job
// console.log(jonas[answer]) // 'teacher'

// if (jonas[answer]){
//     console.log(jonas[answer])
// } else {
//     //in case answer is undefined
//     console.log('Please choose between age, firstName, lastName, job')
// }

//adding data to the object
jonas.location = 'Portugal'
jonas['nickName'] = 'Jo'

console.log(jonas)