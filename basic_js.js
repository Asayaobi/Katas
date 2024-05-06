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
