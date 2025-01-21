//Create map
const restaurant = new Map()

//add 
restaurant.set('name', 'Classico Italiano')

//read
console.log(restaurant)//Map { 'name': 'Classico Italiano' }
console.log(restaurant.get('name'))//'Classico Italiano'

//see if the restaurant opens or closes
restaurant.set('open', 11)
restaurant.set('close', 23)
restaurant.set(true, 'we are open :)')
restaurant.set(false, 'we are closed')

const currentTime = 22
// if (currentTime > restaurant.get('open') && currentTime < restaurant.get('close')){
//      console.log(restaurant.get(true)) //'we are open :)'
// } else {
//     console.log(restaurant.get(false))
// }
console.log(restaurant.get(currentTime > restaurant.get('open') && currentTime < restaurant.get('close'))  //'we are open :)'
)

//check if there's an item in the map
console.log(restaurant.has('open'))//true

//delete item
restaurant.delete('open')
console.log(restaurant)//Map {'name': 'Classico Italiano','close': 23,true: 'we are open :)',false: 'we are closed}

//length
console.log(restaurant.size) //4

//remove all element from the map
restaurant.clear()
console.log(restaurant)//Map {}