'use strict';

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

