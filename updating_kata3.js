// Create a JavaScript function named updateNestedArray.
// This function should take three parameters:

// an object
// a number
// and a string.
// The object contains a nested array of strings. The function should update the element in the array at the index specified by the number parameter to the value provided by the string parameter.
// After updating, the function should return the modified object.

let a = {"fruits": ["apple", "banana"]}
updateNestedArray(a, 1, "cherry") // {"fruits": ["apple", "cherry"]}
let b = {"fruits": ["pineapple", "strawberry"]}
updateNestedArray(b, 0, "kiwi") // {"fruits": ["kiwi", "strawberry"]}

function updateNestedArray(obj, number, string) {
    obj.fruits[number] = string
    return obj
}

console.log(updateNestedArray({'fruits':['apple','banana']},1,'cherry'))
console.log(updateNestedArray({'fruits':['pineapple','strawberry']},0,'kiwi'));