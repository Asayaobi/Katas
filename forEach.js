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