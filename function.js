'use strict';

//Closure
//Closure: gives function access to variable of ots parent function, even after the parent function as returned. 
//It makes sure that a function doesn't loose connection to variable that exists at the function's birthplace.
//passengerCount was moved to heap and not garbage collected because of the closure

const secureBooking = function(){
    let passengerCount = 0
    return function (){
        passengerCount++
        console.log(`${passengerCount} passengers`)
    }
}

//because passengerCount isn't in global scope, in order to access to passengerCount, we have to access through closure (internal property of its function)
const booker = secureBooking()
booker()//'1 passengers' 
booker()//'2 passengers' 
booker()//'3 passengers'

//console.dir(booker)//passengerCount is nested in its scopes

//Note. booker is a function -> it has access to the variable environment (passengerCount) of the execution context
//Closure: the variable attached in the function stays as it was at the time it was created

// Example 2
const boardPassengers = function (allPassenger, wait) {
    const perGroup = allPassenger / 3
  
    setTimeout(function () {
      console.log(`We are now boarding all ${allPassenger} passengers`)
      console.log(`There are 3 groups, each with ${perGroup} passengers`)
    }, wait * 1000) //waiting time is in second, so we have to *1000 to convert to milisecond
  
    console.log(`Will start boarding in ${wait} seconds`)
  }
  
  //const perGroup = 1000 //if we update perGroup here, the scope chain will use perGroup = 1000 instead of perGroup = allPassenger / 3
  boardPassengers(180, 3)//'Will start boarding in 3 seconds'
  
/////////////////////////////////////////////////////////////////////////////////////
//Set Timeout function
//after one second(1000 milisecond), call the function (log this word)
setTimeout(function(){console.log('this is one second')}, 1000)

const bookings = []
//add default value
const createBooking = function(flight,passenger = 1 ,price = 199 * passenger ){
    const booking = {flight, passenger, price}
    console.log(booking)
    bookings.push(booking)
}

createBooking('LH212')//{ flight: 'LH212', passenger: 1, price: 199 }
createBooking('LH212',2)//{ flight: 'LH212', passenger: 2, price: 398 }
createBooking('LH212',3,200)//{ flight: 'LH212', passenger: 3, price: 200 }

//if you want to skip passing parameter, use undefined
createBooking('LH617', undefined, 300)//{ flight: 'LH617', passenger: 1, price: 300 }

/////////////////////
const flight = 'LH311'
const jonas = {
    name: 'Jonas Brothers',
    passport: 85574735
}

const checkIn = function(flightNumber, passengerInfo){
    flightNumber = 'LH444'
    passengerInfo.name = 'Mr.'+ passengerInfo.name
    if (passengerInfo.passport === 85574735){
        return 'welcome on board'
    } else {
        return 'wrong passport'
    }
}
console.log(checkIn(flight,jonas))//'welcome on board'

//variable runs in a function as a copy, it's not modified because it runs in the global scope, not in memory heap, flightNumber = flight
console.log(flight)//'LH311'
//objects are modified because it is the same object in the memory heap passengerInfo = jonas
console.log(jonas)//{ name: 'Mr.Jonas Brothers', passport: 85574735 }

const newPassport = function(passengerInfo){
    passengerInfo.passport = Math.trunc(Math.random()* 100000000)
}
console.log(newPassport(jonas))
console.log(jonas)//{ name: 'Mr.Jonas Brothers', passport: 24040664 }
console.log(checkIn(flight, jonas))//wrong passport


/////////////////////////////////////
//higher function excepts another function (callback function) as an input

//functions
const useUppercase = function(str){
    const [first,...others] = str.split(' ')    
    //console.log([first.toUpperCase(), ...others].join(' '))//'JAVASCRIPT is the best.'
    return [first.toUpperCase(), ...others].join(' ')
}

const joinToOneWord = function(str){
    //console.log(str.replaceAll(/ /g,'').toLowerCase())//'javascriptisthebest.'
    return str.replaceAll(/ /g,'').toLowerCase()
}

//higher function
const transformWord = function(str, func){
    //console.log('original string:', str)//[ 'original string:', 'Javascript is the best.' ]
    console.log(`calling ${func.name} function`)
    console.log('transform string:', func(str))
}

transformWord('Javascript is the best.',useUppercase)//calling useUppercase function'  'transform string:', 'JAVASCRIPT is the best.'
transformWord('Javascript is the best.',joinToOneWord)//'calling joinToOneWord function'  'transform string:', 'javascriptisthebest.' 


//////////////////////////////////////////////////////////////////////////////

//function returning function
const greet = function(greeting){
    return function(name){
        return `${greeting} ${name}`
    }
}

const greetingWithHey = greet('Hey')
console.log(greetingWithHey('Jane'))//'Hey Jane'

console.log(greet('Hi')('Mario'))//'Hi Mario'

/////////////////////////////////////////////////

//using arrow function
const greeting = greetingWord => name => `${greetingWord} ${name}`
console.log(greeting('Hola')('Pedro'))//'Hola Pedro'

///////////////////////////////////////////////////

//function as method
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function(){}
    book(flightNumber, name){
        this.bookings.push({flight: `${this.iataCode}${flightNumber}`, name})
        return `${name} has booked ${this.airline} flight ${this.iataCode}${flightNumber}.`
    }
}

console.log(lufthansa.book(114,'Karen Smiths'))//'Karen Smiths has booked Lufthansa flight LH114.'
console.log(lufthansa.bookings)//[ { flight: 'LH114', name: 'Karen Smiths' } ]

//if you want to reuse book function from lufthansa variable
const eurowing = {
    airline: 'Eurowing',
    iataCode: 'EW',
    bookings: [],
}
const book = lufthansa.book

//DOES NOT WORK because of this keyword
//console.log(book(123,"Joe Rogan"))

//FIX IT by using :
//CALL METHOD -- point which variable of this keyword is pointing to.
console.log(book.call(eurowing,123,"Joe Rogan"))//'Joe Rogan has booked Eurowing flight EW123.'
console.log(eurowing)//{airline: 'Eurowing',iataCode: 'EW',bookings: [ { flight: 'EW123', name: 'Joe Rogan' } ]}

//APPLY METHOD -- point which variable of this keyword is pointing to, followed by an array
const flightData = [444,'Jane Cooper']
console.log(book.apply(lufthansa,flightData))//'Jane Cooper has booked Lufthansa flight LH444.'
console.log(book.call(eurowing,...flightData))//'Jane Cooper has booked Eurowing flight EW444.'

//BIND METHOD -- create a new function where this keyword always sets to a certain object
const bookEurowing = book.bind(eurowing)
console.log(bookEurowing(222,'Steven Williams'))//'Steven Williams has booked Eurowing flight EW222.'

const bookEW111 = book.bind(eurowing,111)
console.log(bookEW111('Jack Johnson'))//'Jack Johnson has booked Eurowing flight EW111.'

/* With Event Listeners -- this will point to the clicked button, use bind method to create a new function and setting 'this' to 'lufthansa'
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

document
  .querySelector('.buybutton')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
*/

//Partial application
const taxPrice = (rate, value) => value + value * rate
console.log(taxPrice(0.1,100))//110
const portugalVAT = taxPrice.bind(null,0.23) //'null' -- since there's no 'this' keyword
console.log(portugalVAT(100)) //123

const taxCal = rate => value => value + value * rate
console.log(taxCal(0.2)(100))//120

const rateCal = taxCal(0.2)
console.log(rateCal(100))//120


/////////////////////////////////////////////////////////////////////////////////////
//Immediety Invoke Function Expression

//create a function that runs just once by putting it into an expression and call it right away
(function(){
    console.log('this will run just once.')
})()

(() => console.log('this will ALSO never run again.'))()

//Data Privacy -- data inside of an expressiong (let and const) will not be accessed on the global scope. var does
{
    const isPrivate = 23
    var isNotPrivate = 40
}
console.log(isPrivate)//undefined
console.log(isNotPrivate) //40