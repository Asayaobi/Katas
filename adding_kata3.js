// Create a function formatData that receives an array of products from a database.
// Unfortunately, the data is corrupt, some of the objects in the array have a price field of type number but others are strings.
// Some of the products have an inStock field of type boolean, others are the string 'yes' or 'no' and others don't have the field at all.
// The functions should:

// convert all products prices to numbers
// convert all products inStock property to booleans ('yes' -> true, 'no' -> false) and add a default true if the property doesn't exist
// then return the updated and properly formatted array

function formatData(arrays) {
    for (let array of arrays) {
        if (typeof array.price !== 'number') {
            array.price = Number(array.price)
        }
        if (array.inStock === 'yes') {
            array.inStock = true
        } 
        if (array.inStock === 'no') {
            array.inStock = false
        } 
        if (array.inStock !== 'boolean') {
            array.inStock = Boolean(array.inStock)
        }
    }
    return arrays
}

console.log(formatData([{'name':'shoes','price':10,'inStock':true},{'name':'skirt','price':'50','inStock':'yes'}]))
console.log(formatData([{'name':'jacket','price':'90.5','inStock':'no'}]))
console.log(formatData([{'name':'keyboard','price':22.35}]));