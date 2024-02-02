function checkLottery(ticketNumber,winningTicket) {
    let message = ''
    if (ticketNumber === winningTicket) {
        message = 'Winner'
    }
    else {
        message = 'Loser'
    }
    return message
}

console.log(checkLottery(549930, 549930))
console.log(checkLottery(111111, 549930))