// Create an object greeter and add a method sayHello to it.
// The method should return 'Hello World'

// greeter.sayHello() // 'Hello World'

const greeter = {
    sayHello: function() {
        return 'Hello World'
    }
}

console.log(greeter.sayHello())

// Create an object greeter.
// In the object, create a method sayHello that takes a parameter, 
// then returns a string as per the tests below.
// greeter.sayHello('John') // 'Hello John'
// greeter.sayHello('Alice') // 'Hello Alice'
// greeter.sayHello() // 'Hello guest'

const greeter1 = {
    sayHello1: function(name) {
        if (!name) {
            return 'Hello guest'
        } else {
            return `Hello ${name}`
        }
    }
}

console.log(greeter1.sayHello1('John'))
console.log(greeter1.sayHello1('Alice'))
console.log(greeter1.sayHello1())

// Counter
// Create an object counter with 2 methods: increase and decrease.
// Each method takes an object, as per the below tests, 
// and returns the object with internal count value either increased by 1 or decreased by 1.

// counter.increase({ count: 1 }) // { count: 2 }
// counter.increase({ count: 10 }) // { count: 11 }
// counter.decrease({ count: 1 }) // { count: 0 }
// counter.decrease({ count: 10 }) // { count: 9 }

const counter = {
    increase: function(value) {
        value.count += 1
        return value
    },
    decrease: function(value) {
        value.count -= 1
        return value
    }
}
console.log(counter.increase({ count: 1 }))
console.log(counter.increase({ count: 10 }))
console.log(counter.decrease({ count: 1 }))
console.log(counter.decrease({ count: 10 }))


// Nutrition
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

const nutrition = {
    calculateCaloriesFromMacros: function(protein, carbs, fat) {
        const calories = (protein * 4) + (carbs * 4) + (fat * 9)
        return calories
    },
    calculateBMI: function(weight, height) {
        const BMI = weight / (height * height) * 10000
        return BMI
    },
    calculateBMR: function(weight, height, age, gender) {
        let BMR
        if (gender === 'male') {
            BMR = 10 * weight + 6.25 * height - 5 * age + 5
        } else {
            BMR = 10 * weight + 6.25 * height - 5 * age - 161
        }
        return BMR
    },
    calculateWaterIntake: function(weight) {
        let waterIntake = weight * 0.033
        return waterIntake
    }
}

console.log(nutrition.calculateCaloriesFromMacros(150, 100, 50))
console.log(nutrition.calculateCaloriesFromMacros(100, 120, 30))
console.log(nutrition.calculateBMI(80, 180))
console.log(nutrition.calculateBMI(65, 155))
console.log(nutrition.calculateBMR(80, 180, 35, 'male'))
console.log(nutrition.calculateBMR(60, 170, 26, 'female'))
console.log(nutrition.calculateWaterIntake(80))
console.log(nutrition.calculateWaterIntake(55))