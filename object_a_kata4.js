// Create a function countWindows that counts, 
// then returns, the total number of windows in the house parameter object, 
// by accessing each room's windows:

let house = {
  livingRoom: {
    windows: 4
  },
  bedroom: {
    windows: 2
  },
  kitchen: {
    windows: 1
  }
}

function countWindows(house){
    return house.livingRoom.windows + house.bedroom.windows + house.kitchen.windows
}

console.log(countWindows(house))