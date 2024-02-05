function addDiscount(price, discount) {
    if (typeof price == 'number' && typeof discount == 'number') {
        return price * discount
    } else {
        return 'Error: Invalid input'
    }
}

console.log(addDiscount(100, 0.5))
console.log(addDiscount(40, 0.25))
console.log(addDiscount('hello', 0.5))
console.log(addDiscount(100, 0.5))
console.log(addDiscount('hello', 'hello'))
