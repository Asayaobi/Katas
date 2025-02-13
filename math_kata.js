//1. Squareroot
console.log(Math.sqrt(25))//5
console.log(25**(1/2)) //5

//cubic root
console.log(8**(1/3))//2

//2. Math.max()
console.log(Math.max(1,'30',2,3,4)) //30
console.log(Math.max(1,2,30,4)) //30

console.log(Math.min(1,2,30,4)) //1

//3. Math.PI
console.log(Math.PI)//3.141592653589793
//calculate the radient of a circle
console.log(Math.PI * Number.parseFloat('10px') ** 2)//314.1592653589793

//4. Math.random()
//returns value between 0 and 1
console.log(Math.random())
//generate number for rolling dice
console.log(Math.trunc(Math.random() * 6) + 1)

//generate random number between min and max value
const generateNums = (min, max) => {
   const gen =  Math.floor(Math.random() * (max - min + 1)) + min
   return gen
}
console.log(generateNums(0,4))
console.log(generateNums(1,3))

//5. Rounding integer
//Math.trunc() 
console.log(Math.trunc('2.9'))//2
console.log(Math.trunc(-20.3))//-20

//Math.round()
console.log(Math.round(2.3))//2
console.log(Math.round('2.6'))//3

//Math.ceil()
console.log(Math.ceil(2.3))//3
console.log(Math.ceil('2.6'))//3

//Math.floor()
console.log(Math.floor(2.3))//2
console.log(Math.floor('2.6'))//2
console.log(Math.floor(-20.3))//-21


// Create a JavaScript function called findSmallestNumber.
// This function should take between 2 and 4 numbers as its parameters and return the smallest number.
// Use the correct Math method.

function findSmallestNumber(a,b,c,d) {
    let smallest
    if ((c === undefined) && (d === undefined)) {
        smallest = Math.min(a,b)
    } else if (d === undefined) {
        smallest = Math.min(a,b,c)
    } else {
        smallest = Math.min(a,b,c,d)
    }
    return smallest
}

console.log(findSmallestNumber(2,71))
console.log(findSmallestNumber(2,71,4))
console.log(findSmallestNumber(20,80,-5.5))
console.log(findSmallestNumber(8,1))
console.log(findSmallestNumber(2,0,5,3.9))

// Correct Square Roots
// Create a function checkSquareRoot that takes an array of objects.
// Each object contains a value and a squareRoot property, where the squareRoot indicates the square root of the value.
// If the square root is correct, add a property correct with a value of true to the object, otherwise false.
// The function should then return the array of objects with their new correct field.
// checkSquareRoot([{'value':100,'squareRoot':10},{'value':25,'squareRoot':6}])

function checkSquareRoot(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].squareRoot === Math.sqrt(arr[i].value)) {
            arr[i].correct = true
        } else {
            arr[i].correct = false
        }
    }
    return arr
}

console.log(checkSquareRoot([{'value':100,'squareRoot':10},{'value':25,'squareRoot':6}]))
console.log(checkSquareRoot([{'value':81,'squareRoot':9}])	)

// Win the lottery
// Create a function winTheLottery that takes an array of 4 strings, as per the tests below.
// The function should generate a random number between 0 and 4 which will be used to extract one of the strings from the array.
// The functions should then return the extracted string.
// hint: if you use Math.ceil then it won't ever give you the i = 0.
// console.log(winTheLottery(['lose', 'lose', 'win', 'lose'])) // sometimes 'win', sometimes 'lose'

function winTheLottery(results) {
    let i =Math.floor(Math.random()*4)
    return results[i]
}

console.log(winTheLottery(['lose', 'lose', 'win', 'lose']))
