// Your task is to create three functions in JavaScript to calculate the area of rectangles and triangles.
// The first two functions calcAreaRectangle and calcAreaTriangle will calculate the areas of a rectangle and a triangle, respectively.
// The formula for a rectangle is a * b, while for a triangle it's a * b / 2.
// The third function calcArea, takes 2 numbers and a string 'rectangle' or 'triangle' and decides which calculation to perform based on the given string.
// If a different string, or no string, is passed, return null.

function calcAreaRectangle(a, b) {
    return a * b
}

function calcAreaTriangle(a, b) {
    return a * b / 2
}

function calcArea(a, b, c) {
    if (c === 'rectangle') {
        return calcAreaRectangle(a, b)
    } else if (c === 'triangle') {
        return calcAreaTriangle(a, b)
    } else {
        return null
    }
}

console.log(calcArea(100, 5, 'rectangle'))
console.log(calcArea(100, 50, 'triangle'))
console.log(calcArea(10, 10, "rectangle"))
console.log(calcArea(10, 10, "triangle"))
console.log(calcArea(30, 20))
console.log(calcArea(30, 20, "cube"))
