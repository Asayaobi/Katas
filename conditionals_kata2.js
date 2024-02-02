let bookingDays = 31
let output = ''
if (bookingDays < 30) {
  output = 'Your booking is being processed'
}
else {
    output = 'Please contact us for monthly bookings'
}
return output


console.log(output)