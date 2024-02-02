function checkVehicle(vehicle) {
    if (vehicle !== 'car' && vehicle !== 'truck' && vehicle !== 'motorbike') {
        return 'allowed'
    } else {
        return 'not allowed'
    }
}
console.log(checkVehicle('car'))
console.log(checkVehicle('truck'))
console.log(checkVehicle('motorbike'))
console.log(checkVehicle('pedestrian'))
console.log(checkVehicle('bicycle'))