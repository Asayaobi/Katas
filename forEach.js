const bankMovement = [200,100,-200,300,-200]

bankMovement.forEach(function(movement){
    if (movement>0){
        console.log(`you have deposit $${movement}`)
    } else {
        console.log(`you have withdraw $${Math.abs(movement)}`)
    }
})
/*you have deposit $200
you have deposit $100
you have withdraw $200
you have deposit $300
you have withdraw $200*/

console.log('movement, index, array')
//forEach passes 1. element of the array, 2. index of that array 3. array
bankMovement.forEach(function(movement,index,array){
    if (movement>0){
        console.log(`Movement${index+1}: you have deposit $${movement}`)
    } else {
        console.log(`Movement${index+1}: you have withdraw $${Math.abs(movement)}`)
    }
})
/*
Movement1: you have deposit $200
Movement2: you have deposit $100
Movement3: you have withdraw $200
Movement4: you have deposit $300
Movement5: you have withdraw $200
*/

//For of loop
console.log('with for of')
for (const [index,element] of bankMovement.entries()){
    if (element>0){
        console.log(`Movement${index+1}: you have deposit $${element}`)
    } else {
        console.log(`Movement${index+1}: you have withdraw $${Math.abs(element)}`)
    }
}


//forEach with Map
const currencies = new Map([
    ['USD','United States Dollar'],
    ['EUR','Euro'],
    ['GBP','Pound Sterling']
])

currencies.forEach(function(value,key,map){
    console.log(`${key}: ${value}`)
})
// USD: United States Dollar
// EUR: Euro
// GBP: Pound Sterling

//forEach with Set -- Set doesn't have a key so you can us omit sign _ in the parameter
const currenciesUnique = new Set(['USD','EUR','USD','GBP','GBP'])
console.log(currenciesUnique)//{'USD','EUR','GBP'}
currenciesUnique.forEach(function(value,_,map){
    console.log(`${_}:${value}`)
})
//USD:USD
//EUR:EUR
//GBP:GBP


///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, 
and stored the data into an array (one array for each). 
For now, they are just interested in knowing whether a dog is an adult or a puppy. 
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! 
So create a shallow copy of Julia's array, and remove the cat ages from that copied array 
(because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult 
("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets


TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

*/



const checkDogs = function(dogsJulia,dogsKate){
    //remove the FIRST and the LAST TWO dogs from dogsJulia
    const dogs = [...dogsJulia]
    dogs.shift() //or dogs.splice(0,1)
    dogs.splice(-2)

    //Create an array with both Julia's (corrected) and Kate's data
    const alldogs = [...dogs, ...dogsKate] //or dogs.concat(dogsKate)
    //log the console
    alldogs.forEach((age, i)=>{
        if (age >= 3){
            console.log(`Dog number ${i+1} is an adult, and is ${age} years old`)
        } else {
            console.log(`Dog number ${i+1} is still a puppy 🐶`)
        }
    })
}

checkDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3])
checkDogs([9, 16, 6, 8, 3],[10, 5, 6, 1, 4])