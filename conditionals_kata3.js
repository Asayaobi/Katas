function categorizeDay(temperature, weather) {
    if (temperature >= 25) {
        if (weather === 'sunny') {
            return 'Beach day'
        } else {
            return 'Casual day'
        }
    } else if (temperature >= 15) {
        if (weather === 'sunny') {
            return 'Park day'
        } else if (weather === 'rainy') {
            return 'Museum day'
        } else {
            return 'Casual day'
        }
    } else if (temperature < 15) {
        if (weather === 'sunny') {
            return 'Park day'
        } else if (weather === 'rainy') {
            return 'Stay home'
        } else {
            return 'Casual day'
        }
    }
}

console.log(categorizeDay(26, 'sunny'))
console.log(categorizeDay(25, 'sunny'))
console.log(categorizeDay(25, 'rainy'))
console.log(categorizeDay(15, 'rainy'))
console.log(categorizeDay(16, 'rainy'))
console.log(categorizeDay(14, 'rainy'))