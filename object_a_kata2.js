// Create a villa object with the properties:

// windows = 6
// material = 'stone'
// and a property livingroom with the following sub-properties:

// windows = 2
// doors = 1

let villa = {
    windows: 6,
    material: 'stone',
    livingroom: {
        windows: 2,
        doors: 1
    }
}

console.log(villa.livingroom.doors)