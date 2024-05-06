// Find Maximum Number
// Write a function maxNumber that takes two numbers a and b as arguments and returns the larger of the two.
function maxNumber(a, b) {
    if (a > b) {
        return b
    }
    return a
}

console.log(maxNumber(1, 2))
console.log(maxNumber(5, 20)) 

// Create a function assignGrade that takes a number score and returns a grade ('A', 'B', 'C') based on that score.
// 'A' is for a score equal to or greater than 90.
// 'B' is between 80 and 90.
// 'C' is below 80.

function assignGrade(score) {
    //return grade a, b, c
    if (score >= 90) {
        return 'A'
    }
    if (score >= 80) {
        return 'B'
    }
    return 'C'
}

console.log(assignGrade(90))
console.log(assignGrade(80))
console.log(assignGrade(70))


// Check Temperature
// The function checkTemperature should return 'Cold' if the temperature is below 15, 
// 'Warm' if it's between 15 and 25, and 'Hot' otherwise.

function checkTemperature(t) {
    if (t < 15) {
        return 'cold'
    }
    if (t <= 25) {
        return 'warm'
    }
    return 'hot'
}


console.log(checkTemperature(10))
console.log(checkTemperature(15))
console.log(checkTemperature(27))

// Animal Classification
// Create a function classifyAnimal that takes an animal name and returns 'Domestic' if it's either 'cat' or 'dog', 
// and 'Wild' for any other animal.

function classifyAnimal(animal) {
    if (animal === 'cat') {
        return 'Domestic'
    }
    if (animal === 'dog') {
        return 'Domestic'
    }
    return 'Wild'
}

console.log(classifyAnimal('dog'))
console.log(classifyAnimal('cat'))
console.log(classifyAnimal('rat'))