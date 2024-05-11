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













