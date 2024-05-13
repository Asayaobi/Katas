// Add Ages
// Your task is to create a JavaScript function named addAges.
// This function should take two parameters: an object and a number.
// The function should add the provided number to the object as age and return the updated object.
// function addAges(users,numbers) {
//     let i = 0
//     for(let user of users){
//         user.age = numbers[i]
//         i++
//     }
//     return users
// }
function addAges(users, numbers) {
    for (let i = 0; i < users.length; i++) {
        users[i].age = numbers[i]
    }
    return users
}
console.log(addAges([{'name':'Alice'},{'name':'Bob'}],[21,51]))
console.log(addAges([{'name':'Tom'},{'name':'Tim'},{'name':'Tam'}],[30,31,32]));


// Format the Data
// Create a function formatData that receives an array of products from a database.
// Unfortunately, the data is corrupt, some of the objects in the array have a price field of type number but others are strings.
// Some of the products have an inStock field of type boolean, others are the string 'yes' or 'no' and others don't have the field at all.
// The functions should:

// convert all products prices to numbers
// convert all products inStock property to booleans ('yes' -> true, 'no' -> false) and add a default true if the property doesn't exist
// then return the updated and properly formatted array
//formatData([{'name':'shoes','price':10,'inStock':true},{'name':'skirt','price':'50','inStock':'yes'}])
//[{'name':'shoes','price':10,'inStock':true},{'name':'skirt','price':50,'inStock':true}]

function formatData(products) {
    for (let i = 0; i < products.length; i++) {
        products[i].price = Number(products[i].price)
        if (products[i].inStock === 'no'){
            products[i].inStock = false
        } else {
            products[i].inStock = true
        }
    }
    return products
}

console.log(formatData([{'name':'shoes','price':10,'inStock':true},{'name':'skirt','price':'50','inStock':'yes'}]))
console.log(formatData([{'name':'jacket','price':'90.5','inStock':'no'}]))
console.log(formatData([{'name':'keyboard','price':22.35}]))