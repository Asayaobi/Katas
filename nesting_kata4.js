// Your task is to create a function named getEvenScorePlayers.
// This function should take an array of objects as its parameter.
// Each object represents a player with two properties: name (a string) and score (a number or a string).
// The function should select the players whose scores are even numbers (and specifically not strings), concatenate their names into a single string with spaces, and return this string.
let players1 = [
    {name: "Alice", score: 20},
    {name: "Bob", score: 15},
    {name: "Charlie", score: 30},
    {name: "Daisy", score: "40"}]
// getEvenScorePlayers(players1) // 'Alice Charlie'
// 
let players2 = [
    {name: "Tom", score: "8"},
    {name: "Tim", score: 9},
    {name: "Tam", score: 2}]
// getEvenScorePlayers(players2) // 'Tam'

function getEvenScorePlayers(players) {
let output = ''
    for (let player of players) {
        if (player.score % 2 === 0 && typeof player.score != 'string') {
            output = output + player.name + ' '
        }
    }
    return output
}
console.log(getEvenScorePlayers(players1))
console.log(getEvenScorePlayers(players2))


// Filter to make it work when you pass both of number and object 

function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    }
    if (typeof a === 'object') {
        return a.a + a.b
    }
}
console.log(add(2, 3))
console.log(add({a: 3, b: 2}))

let car = {
    driver: {
        name: 'Jesus',
        age: 21,
        favColors: [{
            name: 'yellow'
        }, {
            name: 'red'
        }]

    },
    color: 'red'
}
// Object with nest object to make the output show the result of Jesus favColor ‘red’
console.log(car.driver.favColors[1].name);
    

// Loop the array to show the object’s properties (key, value pair)
// { name: 'Jesus', colors: [ 'red', 'yellow' ] }
// { name: 'Viki' }
let users = [
    {
        name: 'Jesus',
        colors: ['red', 'yellow']
    }, {
        name: 'Viki'
    }
]

for (let user of users) {
    console.log(user);
}
// Loop the array to show the object’s name
// Jesus
// Viki
for (user of users) {
    console.log(user.name);
}
// Loop the array to add the object’s names into one output string 'Jesus Viki '
let outputString = ''
for (user of users) {
    outputString = outputString + user.name + ' '
}
console.log(outputString)

// Loop the array to show all users’s favColors. 
// Because Viki doesn't have color, add conditional to filter that out too
for (user of users){
    if (!user.colors) {
        console.log('no color')
    } else {
        console.log(user.colors)
        for (let color of user.colors) {
            console.log(color);
        }
    }
}

