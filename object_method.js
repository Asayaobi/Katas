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


//Let's go back to Mark and John comparing their BMIs!
//Remember: BMI = mass / (height * height) (mass in kg and height in meters).

//Your tasks:

//For each of them, create an object with properties for their full name, mass, and height 
//(Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

//Create a calcBMI method on each object to calculate the BMI (the same method on both objects). 
// Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

//Log to the console who has the higher BMI, together with the full name and the respective BMI. 
// Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

//TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

//Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).

const markMiller = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}

const johnSmith = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height)
        return this.bmi
    }
}

console.log(`${markMiller.fullName}'s BMI (${markMiller.calcBMI()}) is higher than ${johnSmith.fullName}'s (${johnSmith.calcBMI()})!`)
// console.log(markMiller.calcBMI())//27.30
// console.log(johnSmith.calcBMI())//24.19


///////////////////////////////////////////////////heap concept///////////////////////////////////////////////////////

//when you modify the object, the value of the object changes

const jenny = {
    firstName: 'Jenny',
    lastName: 'Lopez'
}

const newJenny = jenny
newJenny.lastName = 'Anthony'

console.log('original jenny lastname:', jenny.lastName) //'Anthony'
console.log('new jenny lastname:', newJenny.lastName) //'Anthony'

//spread operator allows you to copy the entire object while keeping the original object data

const kim = {
    firstName: 'Kim',
    lastName: 'Kardashian'
}

const newKim = {...kim}
newKim.lastName = 'West'

console.log('original Kim lastname:', kim.lastName) //'Kardashian'
console.log('new Kim lastname:', newKim.lastName) //'West'

//when you modify the function, the value of the function changes

//shallow copy
const kanye = {
    name: 'Kanye West',
    family: ['Kanye', 'Kim']
}

const newKanye = {...kanye}
newKanye.family.push('North')
newKanye.family.push('Saint')

console.log('original Kanye family:', kanye.family)//['Kanye', 'Kim', 'North', 'Saint']
console.log('new Kanye family:', newKanye.family)//['Kanye', 'Kim', 'North', 'Saint']

//deep copy
const kimK = {
    name: 'Kim K.',
    family: ['Kanye', 'Kim']
}

const newKimK = structuredClone(kimK)
newKimK.family.push('North')
newKimK.family.push('Saint')

console.log('original kimK family:', kimK.family)//['Kanye', 'Kim']
console.log('new kimK family:', newKimK.family)//['Kanye', 'Kim', 'North', 'Saint']

