// Create an object greeter and add a method sayHello to it.
// The method should return 'Hello World'

// greeter.sayHello() // 'Hello World'

let greeter = {
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

let greeter1 = {
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

let counter = {
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