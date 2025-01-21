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

///////////////////////////////////////////////////////////////////
//Object.keys() returns an array of object's name
const workingHours = {
    friday: {
        open: 12,
        close:23
    },
    saturday: {
        open: 14,
        close:23
    },
    sunday: {
        open: 18,
        close:21
    }
  }
  
  console.log(Object.keys(workingHours))//[ 'friday', 'saturday', 'sunday' ]
  
  const workingDays = Object.keys(workingHours)//[ 'friday', 'saturday', 'sunday' ]
  for (const day of workingDays){
    console.log(day)//'friday', 'saturday', 'sunday'
  }
  
  //Object.values() returns an array of object's values
  console.log(Object.values(workingHours))
  //[{ open: 12, close: 23 }, { open: 14, close: 23 },{ open: 18, close: 21 }]
  
  //Object.entries() returns name + value together
  console.log(Object.entries(workingHours))
  //[[ 'friday', { open: 12, close: 23 } ],[ 'saturday', { open: 14, close: 23 } ],[ 'sunday', { open: 18, close: 21 } ]]
  
  const hoursArr = Object.entries(workingHours)
  for (const x of hoursArr){
    console.log(x)//[ 'friday', { open: 12, close: 23 } ] 
    console.log(`on ${x[0]}, we open at ${x[1].open} and close at ${x[1].close}`)
    //'on friday, we open at 12 and close at 23
  }
  
  for (const [date,{open, close}] of hoursArr){
    console.log(`on ${date}, we open at ${open} and close at ${close}`)
    //'on friday, we open at 12 and close at 23' 
  }
  
  ///////////////////////////////////////
  // Coding Challenge #2
  
  /* 
  Let's continue with our football betting app!
  
  1. Loop over the game.scored array and print each player name to the console, along with the goal number 
  2. Use a loop to calculate the average odd and log it to the console
  3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
        Odd of victory Bayern Munich: 1.33
        Odd of draw: 3.25
        Odd of victory Borrussia Dortmund: 6.5
  Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
  
  BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
        {
          Gnarby: 1,
          Hummels: 1,
          Lewandowski: 2
        }
  
  GOOD LUCK 😀
  */
  
  const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
      ],
      [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
      ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };
  
  //1. (Log Example: "Goal 1: Lewandowski")
  for (const [index,player] of game.scored.entries()){
    console.log(`Goal ${index+1}: ${player}`)
  }
  
  //2. calculate the average odd
  const oddsArray = Object.values(game.odds)//[ 1.33, 3.25, 6.5 ]
  const totalOdd = oddsArray.reduce((acc,odd)=> acc += odd, 0) //11.08
  const averageOdd = totalOdd / oddsArray.length
  console.log(averageOdd) //3.693
  
  //3. log Odd of victory Bayern Munich: 1.33
  const entriesArr = Object.entries(game.odds)//[ [ 'team1', 1.33 ], [ 'x', 3.25 ], [ 'team2', 6.5 ] ]
  for (const [team,number] of entriesArr){
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
    console.log(`Odd of ${teamStr}: ${number}`)
    //'Odd of victory Bayern Munich: 1.33' 'Odd of draw: 3.25' 'Odd of victory Borrussia Dortmund: 6.5'
  }
  
  /*BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, 
  and the number of goals as the value. In this game, it will look like this:
  {
    Gnarby: 1,
    Hummels: 1,
    Lewandowski: 2
  }
  */
  const bonusGame = {
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  }
  let scorers = {}
  for (const player of bonusGame.scored){
    // if(scorers[player]){
    //   scorers[player] +=1
    // } else {
    //   scorers[player] = 1
    // }
    scorers[player] ? scorers[player]++ : (scorers[player] = 1)
  }
  console.log(scorers)//{ Lewandowski: 2, Gnarby: 1, Hummels: 1 }
  