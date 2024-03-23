// Create a function checkSquareRoot that takes an array of objects.
// Each object contains a value and a squareRoot property, where the squareRoot indicates the square root of the value.
// If the square root is correct, add a property correct with a value of true to the object, otherwise false.
// The function should then return the array of objects with their new correct field.


function checkSquareRoot(objects) {
    for (let object of objects) {
        if (object.squareRoot === Math.sqrt(object.value)) {
            object.correct = true
        } else {
            object.correct = false
        }
    }
    return objects
}

//using map 
function checkSquareRoot(objects) {
    return objects.map(object => ({
        ...object,
        correct: object.squareRoot === Math.sqrt(object.value)
    }));
}


console.log(checkSquareRoot([{'value':100,'squareRoot':10},{'value':25,'squareRoot':6}]));
console.log(checkSquareRoot([{'value':81,'squareRoot':9}]));