// Lottery
// Create a function checkLottery that takes 2 parameters: ticketNumber and winningTicket.
// Create a variable message within the local scope of the function.
// Using an "if/else" conditional statement, change the value of message to "Winner" if ticketNumber 
// matches the winningTicket, or "Loser" otherwise.
// Return the value of message.


function checkLottery(ticketNumber, winningTicket) {
    if (ticketNumber === winningTicket) {
        return 'Winner'
    } else {
        return 'Loser'
    }
}

console.log(checkLottery(549930, 549930))
console.log(checkLottery(111111, 549930))

// Monthly Bookings
// Improve the following conditional statement, so that it can handle bookings longer than 30 days, 
// in which case log the phrase: "Please contact us for monthly bookings".

function monthlyBooking(bookingDays){
    let output = ''
    if (bookingDays < 30) {
    output = 'Your booking is being processed'
    } else {
        output = 'Please contact us for monthly bookings'
    }
    return output   
}

console.log(monthlyBooking(20))
console.log(monthlyBooking(33))

// Categorize Day
// Create a function categorizeDay that categorizes the day based on temperature and weather conditions.
// Your task is to implement a set of nested if, else if, and else statements to accurately categorize the day.
// Don't use the && or || symbols.

// The function should categorize the day as follows:

// If the temperature is 25 degrees or above and it's sunny, it's a "Beach day".
// If it's sunny but the temperature is below 25 degrees, it's a "Park day".
// If it's rainy and the temperature is below 15 degrees, it's a "Stay home" day.
// If it's rainy but the temperature is between 15 and 25 degrees, it's a "Museum day".
// In all other cases, it's a "Casual day".


// categorizeDay(26,'sunny')	'Beach day'
// categorizeDay(25,'sunny')	'Beach day'
// categorizeDay(25,'rainy')	'Museum day'
// categorizeDay(15,'rainy')	'Museum day'
// categorizeDay(16,'sunny')	'Park day'
// categorizeDay(14,'rainy')	'Stay home'

function categorizeDay(temp, weather) {
    //if weather is 'sunny'
        // if temp >= 25 is 'Beach day'
        // if temp < 25 is 'Park Day'
    if (weather === 'sunny') {
        if (temp >= 25){
            return 'Beach day'
        } else {
            return 'Park Day'
        }
    }
    //if weather is 'rainy'
        // if temp < 15 is 'Stay home day'
        // if temp <= 25 is 'Museum Day'
        //else 'Casual day'
    else if (weather === 'rainy') {
        if (temp < 15) {
            return 'Stay home day'
        } else if (temp <= 25) {
            return 'Museum day'
        } else {
            return 'Casual day'
        }
    }
}

console.log(categorizeDay(26,'sunny'))
console.log(categorizeDay(25,'sunny'))
console.log(categorizeDay(25,'rainy'))
console.log(categorizeDay(30,'rainy'))
console.log(categorizeDay(16,'sunny'))
console.log(categorizeDay(14,'rainy'))






