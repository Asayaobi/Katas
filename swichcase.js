//user input
const day = 'sunday'

switch(day) {
    case 'saturday':
        console.log('eat out')
        break
    case 'sunday':
        console.log('goto shopping :D')
        break
    case 'monday':
    case 'tuesday':
    case 'wednesday':
    case 'thursday':
    case 'friday':
        console.log('goto work')
        break
    //else
    default:
        console.log('not a valid day!')
}