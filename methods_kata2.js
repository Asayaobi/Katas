// Create an object greeter.
// In the object, create a method sayHello that takes a parameter, then returns a string as per the tests below.

// greeter.sayHello('John') // 'Hello John'
// greeter.sayHello('Alice') // 'Hello Alice'
// greeter.sayHello() // 'Hello guest'

let greeter = {
    sayHello: function(name) {
        if (!name) {
            return 'Hello guest'
        } else {
        return 'Hello ' + name
        }
    }
}

console.log(greeter.sayHello('John'))
console.log(greeter.sayHello('Alice'))
console.log(greeter.sayHello())