let temperature
let weather
function categorizeDay(temperature, weather) {
// If the temperature is 25 degrees or above and it's sunny, it's a "Beach day".
// If it's sunny but the temperature is below 25 degrees, it's a "Park day".
    if (temperature >= 25){
        if (weather === 'sunny'){
            return 'Beach day'
        } else {
            return 'Casual day'
        }
    } else if (temperature < 25){
        if (weather === 'sunny') {
            return 'Park day'
        } else {
            return 'Casual day'
        }
    }
// If it's rainy and the temperature is below 15 degrees, it's a "Stay home" day.
// If it's rainy but the temperature is 15 degrees or above, it's a "Museum day".
// In all other cases, it's a "Casual day".
    else if (temperature < 15){
        if  (weather === 'rainy'){
            return 'Stay home'
        } else {
            return 'Casual day'
        }
    } else if (temperature >= 15){
        if(weather === 'rainy') {
            return 'Museum day'
        }
    } else {
        return 'Casual day'
    }
}

console.log(categorizeDay(26, 'sunny'))
console.log(categorizeDay(25, 'sunny'))
console.log(categorizeDay(25, 'rainy'))
console.log(categorizeDay(15, 'rainy'))
console.log(categorizeDay(16, 'rainy'))
console.log(categorizeDay(14, 'rainy'))