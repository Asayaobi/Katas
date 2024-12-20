const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    job: 'teacher',
    hasDriverLicense: true,
    birthYear: 1991,
    //adding function
    // calcAge: function (birthYear){
    //     return 2025 - birthYear
    // }

    // calAge: function () {
    //     console.log(this) //{firstName: 'Jonas',lastName: 'Schmedtmann',job: 'teacher',...}
    //     return 2025 - this.birthYear
    // }

    //adding function and create new variable (age) to store the result
    calAge: function (){
        this.age = 2025 - this.birthYear
        return this.age
    },

    getDetail: function (){
        return `${this.firstName} is a ${this.calAge()} years old ${this.job} with ${this.hasDriverLicense ? 'a' : 'no'} driver license.`
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
console.log(jonas.calAge()) //34
console.log(jonas.age) //34

//calcAge: function (birthYear){
//   return 2025 - birthYear
//}
// console.log(jonas.calcAge(1991)) //34
// console.log(jonas['calcAge'](1998)) //27

console.log(jonas.getDetail()) //'Jonas is a 34 years old teacher with a dricer license.'