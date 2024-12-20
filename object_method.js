const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    job: 'teacher',
    //adding function
    calcAge: function (birthYear){
        return 2025 - birthYear
    }
}

//using dot vs bracket notation to access object data
console.log(jonas.lastName) //'Schmedtmann'
console.log(jonas['lastName']) //'Schmedtmann'

const nameKey = 'Name'
console.log(jonas['first' + nameKey]) //Jonas

// const answer = prompt('what do you want to know about Jonas? firstName, lastName, job?') //type job
// console.log(jonas[answer]) // 'teacher'

// if (jonas[answer]){
//     console.log(jonas[answer])
// } else {
//     //in case answer is undefined
//     console.log('Please choose between firstName, lastName, job')
// }

//adding data to the object
jonas.location = 'Portugal'
jonas['nickName'] = 'Jo'

console.log(jonas)

//calling the function from the object
console.log(jonas.calcAge(1991)) //34
console.log(jonas['calcAge'](1998)) //27