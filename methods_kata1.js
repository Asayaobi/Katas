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
