// In this kata, you're going to create a mini JS library that is useful to calculate a number of values related to nutrition.

// Create an object named nutrition
// Within the object, create the following methods. For each method you have the formula that should be used to calculate the result.
// calculateCaloriesFromMacros(protein, carbs, fat)
// Total Calories = (Protein * 4) + (Carbs * 4) + (Fat * 9)

// calculateBMI(weight, height)
// BMI = weight / (height squared) * 10000

// calculateBMR(weight, height, age, gender)
// For 'male', BMR = 10 * weight + 6.25 * height - 5 * age + 5
// For 'femal', BMR = 10 * weight + 6.25 * height - 5 * age - 161

// calculateWaterIntake(weight)
// Water Intake = weight * 0.033

let nutrition = {
    calculateCaloriesFromMacros: function(protein, carbs, fat) {
        const totalCalories = (protein * 4) + (carbs * 4) + (fat * 9)
        return totalCalories
    },
    calculateBMI: function(weight, height) {
        const BMI = weight / (height * height) * 10000
        return BMI
    },
    calculateBMR: function(weight, height, age, gender) {
        if (gender === 'male') {
            let BMR = 10 * weight + 6.25 * height - 5 * age + 5
            return BMR
        } else {
            let BMR = 10 * weight + 6.25 * height - 5 * age - 161
            return BMR
        }
    },
    calculateWaterIntake: function(weight) {
        const waterIntake = weight * 0.033
        return waterIntake
    }
}

console.log(nutrition.calculateCaloriesFromMacros(150, 100, 50));
console.log(nutrition.calculateCaloriesFromMacros(100, 120, 30));
console.log(nutrition.calculateBMI(80, 180));
console.log(nutrition.calculateBMI(65, 155));
console.log(nutrition.calculateBMR(80, 180, 35, 'male'));
console.log(nutrition.calculateBMR(60, 170, 26, 'female'));
console.log(nutrition.calculateWaterIntake(80));
console.log(nutrition.calculateWaterIntake(55));