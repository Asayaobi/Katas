// Jenny has written a function that returns a greeting for a user. 
// However, she's in love with Johnny, and would like to greet him slightly different. 
// She added a special case to her function, but she made a mistake.
// function greet(name){
//     return "Hello, " + name + "!";
//     if(name === "Johnny")
//       return "Hello, my love!";
//   }

// answer 1
// function greet(name) {
//     if (name == 'Johnny') {
//         return 'Hello, my love!'
//     } else {
//         return 'Hello, ' + name + "!"
//     }
// }

// answer2
const greet = name => name === 'Johnny' ? 'Hello, my love!' : `Hello, ${name}!`
console.log(greet("Jim"))
console.log(greet("Simon"))
console.log(greet("Johnny"))

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.
const invert = numbers => {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = numbers[i] * -1
    }
    return numbers
}
console.log(invert([1,2,3,4,5]))
console.log(invert([1,-2,3,-4,5]))
console.log(invert([]))

// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

const findAverage = numbers => {
    if (numbers.length === 0) {
        return 0
    } else {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum / numbers.length
    }
}
console.log(findAverage([]))
console.log(findAverage([1,2,3]))
console.log(findAverage([1,2,3,4]))

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return true if you're better, else false!
// Note:
// Your points are not included in the array of your class's points. Do not forget them when calculating the average score!
const betterThanAverage = (scores, yourScore) => {
    let sum = 0
    for (let i = 0; i < scores.length ; i++) {
        sum += scores[i]
    }
    return yourScore > (sum / scores.length) ? true : false
}
console.log(betterThanAverage([2, 3], 5))
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75))
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9))

// A hero is on his way to the castle to complete his mission. 
// However, he's been told that the castle is surrounded with a couple of powerful dragons! 
// each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. 
// Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, 
// will he survive?
// Return true if yes, false otherwise :)
const hero = (bullets, dragons) => bullets >= dragons * 2 ? true : false
console.log(hero(10, 5))
console.log(hero(100, 40))
console.log(hero(1500, 751))

// Create a function checkVehicle that takes a parameter vehicle (a string).
// The function should prevent 'car', 'truck' and 'motorbike' from accessing the park, returning 'not allowed', and should allow anyone else in, such as 'pedestrian', 'bicycle', and others, returning 'allowed'.
// Use the NOT EQUAL operator.
// function checkVehicle(vehicle){
//     let output =''
//     if (vehicle !== 'car' && vehicle !== 'truck' && vehicle !== 'motorbike'){
//         output = 'allowed'
//     } else {
//         output = 'not allow'
//     }
// return output
// }

const checkVehicle = vehicle => (vehicle !== 'car' && vehicle !== 'truck' && vehicle !== 'motorbike')? 'allowed' : 'not allow'
console.log(checkVehicle('car')	);
console.log(checkVehicle('truck'))
console.log(checkVehicle('motorbike'))
console.log(checkVehicle('pedestrian'));
console.log(checkVehicle('bird'));
checkVehicle('car')	//'not allowed'
checkVehicle('truck')	//'not allowed'
checkVehicle('motorbike')	//'not allowed'
checkVehicle('pedestrian')	//'allowed'
checkVehicle('bicycle')	//'allowed'
checkVehicle('bird')	//'allowed'

// Vowels are "a", "e", "i", "o" and "u".
// Create a function countVowels that takes an array of letters, 
// and returns the number of vowels in the array.

// countVowels(['h','a','i','k','u'])	3
// countVowels(['a','c','a','d','e','m','y'])	3
// countVowels(['c','o','d','e'])	2

function countVowels(letters){
    const vowels = ['a', 'e', 'i', 'o', 'u']
    //if a similar letter from VOWELS is found from LETTER, it'll be true and it will pass that LETTER into the output array
    const output = letters.filter(letter => vowels.includes(letter))
    return output.length
    // let count = 0
    // for (let letter of letters) {
    //     if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
    //         count += 1
    //     }
    // }
    // return count

}
console.log(countVowels(['h','a','i','k','u']));
console.log(countVowels(['a','c','a','d','e','m','y']))
console.log(countVowels(['c','o','d','e']));

// KATAS FOR INCLUDES()
// Kata 1: Remove Duplicates
// Write a function removeDuplicates that takes an array of numbers as input 
// and returns a new array with only unique elements. Use the includes method.

// javascript
// Copy code
// removeDuplicates([1, 2, 3, 4, 4, 5, 6, 6]); // Output: [1, 2, 3, 4, 5, 6]

function removeDuplicates(numbers) {
    let result = []
    for (let n of numbers) {
        if (!result.includes(n)){
            result.push(n)
        }
    }
    return result
}
console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 6, 6]));

// Kata 2: Common Elements
// Write a function commonElements that takes two arrays as input 
// and returns a new array containing only the elements that are common between 
// the two arrays. Use the includes method.

// javascript
// Copy code
// commonElements([1, 2, 3, 4], [3, 4, 5, 6]); // Output: [3, 4]


// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. 
// Essentially, rearrange the digits to create the highest possible number.
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

// let number = 12345
// let digitArray = Array.from(String(number), Number)
// console.log(digitArray)
// let sort = digitArray.sort((a, b) => b - a)
// console.log(sort.join(''))

// function descendingOrder(input){
//     let result = Array.from(String(input), Number).sort((a, b) => b - a).join('')
//     return Number(result)
//   }

  let sortNumber = (n) => (Number(Array.from(String(n), Number).sort((a, b) => b - a).join('')))
  console.log(sortNumber(42145))

//   An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
//   Implement a function that determines whether a string that contains only letters is an isogram. 
//   Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output)
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
    str = str.toLowerCase()
    for(let i = 0; i < str.length; i++)
      for(let j = i + 1; j < str.length; j++)
        if(str[i] === str[j])
          return false
    return true
  }

// let isIsogram = str => {
//     let wordArray = Array.from(String(str.toLowerCase()))
//     for (i = 0; i < wordArray.length; i++) {
//    let wordsMinus = wordArray.slice(i+1)
//    if (wordsMinus.includes(wordArray[i])) {
//     return false
//    } 
// }
// return true
// } 

console.log(isIsogram("aba"))
console.log(isIsogram("Dermatoglyphics"))
console.log(isIsogram("moOse"))

// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) 
// that checks whether the two arrays have the "same" elements, with the same multiplicities 
// (the multiplicity of a member is the number of times it appears). "Same" means, here, 
// that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]

  //1. If either array is null, return false
//   if (!a || !b) return false

  //2. If the arrays have different lengths, return false
//   if (a.length !== b.length) return false

    // 3. square a with map then sort the result
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// let aResult = a.map( n => n * n).sort((a, b) => a - b)
// console.log(aResult)

    //4. find if b matches aResult
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
//     for (let i = 0; i < b.length; i++){
//         if(b[i] != aResult[i]){
//             return false
//         }
//     }
//     return true

//function comp(array1, array2) {
//     if(array1 == null || array2 == null) return false;
//     array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
//     return array1.map(v => v * v).every((v, i) => v == array2[i]);
//   }

let comp = (array1, array2) => {
    if (!array1 || !array2) return false
    if (array1.length !== array2.length) return false
    let array1Sort = array1.map( n => n * n).sort((a, b) => a - b)
    let array2Sort = array2.sort((a, b) => a - b)
    for (let i = 0; i < array1.length; i++){
        if (array1Sort[i] !== array2Sort[i]) {
            return false
        }
    }
    return true
}

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],[121, 14641, 20736, 361, 25921, 361, 20736, 361]))
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],[132, 14641, 20736, 361, 25921, 361, 20736, 361]))
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],[121, 14641, 20736, 36100, 25921, 361, 20736, 361]))

//Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer.

//Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, 
// starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) 
// and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// Example:
// "MM"      -> 2000
// "MDCLXVI" -> 1666
// "M"       -> 1000
// "CD"      ->  400
// "XC"      ->   90
// "XL"      ->   40
// "I"       ->    1

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000



//with js object
var data = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1}
console.log(data['M']) // 1000
console.log(data.M)



function calculateRoman(str){
  const data = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1}
  const romanArr = str.split('')
  let value = 0
  for (let n = 0; n < romanArr.length; n++){
    if (data[romanArr[n]] < data[romanArr[n+1]]){
      value +=  data[romanArr[n+1]] - data[romanArr[n]]
      n++
    } else {
      value +=  data[romanArr[n]]
    }
  }
  return value
}

console.log(calculateRoman('IV'))
console.log(calculateRoman("IX"));       // 9
console.log(calculateRoman("MCMXC"));    // 1990
console.log(calculateRoman("MMVIII"));   // 2008
console.log(calculateRoman("MDCLXVI"));  // 1666



//with array
function altSolution(number) {
  const romanNums = [{ number:'I', value: 1}, {number:'V', value: 5}, {number:'X', value: 10 }, { number:'L', value: 50}, {number:'C', value: 100}, {number:'D', value: 500 }, {number:'M', value: 1000 }]
  let romanArray = number.toString().split('')

  //get the value of roman numbers
  let numberArray = []
  for ( let n = 0; n < romanArray.length; n++ ){
    let find = romanNums.find(e => e.number === romanArray[n])
    // Check if find is undefined (invalid Roman numeral)
    if (!find) {
      throw new Error(`Invalid Roman numeral: ${romanArray[n]}`);
    }
    numberArray.push(find.value);
  }

  //calculation
  let sumArray = []
  for ( let c = 0; c < numberArray.length; c++){
    //1. filter out special case like 4, 9, 40, 90
    if (numberArray[c] < numberArray[c+1]){
      let specialValue = numberArray[c+1] - numberArray[c]
      //add special value to sum array
      sumArray.push(specialValue)
      //skip the next c+1
      c++
    } else {
      //2. calculate normal numbers
      sumArray.push(numberArray[c])
    }
  }
  const result = sumArray.reduce((acc,cur) => acc + cur)
  return result
}


//  Create a function taking a positive integer between 1 and 3999 (both included) 
//as its parameter and returning a string containing the Roman Numeral representation of that integer.

//  Modern Roman numerals are written by expressing each digit separately starting 
//with the leftmost digit and skipping any digit with a value of zero. There cannot be more than 3 identical symbols in a row.
 
//  In Roman numerals:
//  1990 is rendered: 1000=M + 900=CM + 90=XC; resulting in MCMXC.
//  2008 is written as 2000=MM, 8=VIII; or MMVIII.
//  1666 uses each Roman symbol in descending order: MDCLXVI.


function solution(number) {
  var result = ''
  
  // A map of Roman numerals and their corresponding values.
  var romanMap = {
    M: 1000,CM: 900,D: 500,CD: 400,C: 100,XC: 90,L: 50,XL: 40,X: 10,IX: 9,V: 5,IV: 4,I: 1
  }

  // Loop through each Roman numeral key in the map.
  for (var key in romanMap) {
    // Get the value for the current Roman numeral.
    var value = romanMap[key]

    // While the number is larger than or equal to the current value,
    // subtract the value from the number and add the Roman numeral to the result.
    while (number >= value) {
      result += key
      number -= value
    }
  }

  return result
}


// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, 
// pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. 
// It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// if (arr.length === 0 ) return "no one likes this"
// if (arr.length === 1 ) return "arr[0] likes this"
// if (arr.length === 2 ) return "arr[0] and arr[1] like this"
// if (arr.length > 2 ) return "arr[0], arr[1] and 2 others like this"

function likes(arr){
  if (arr.length > 3) {
    return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`
  } else if (arr.length === 3 ) {
    return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`
  } else if (arr.length === 2 ) {
    return `${arr[0]} and ${arr[1]} like this`
  } else if (arr.length === 1) {
    return `${arr[0]} likes this`
  } else {
    return "no one likes this"
  }
}
console.log(likes([]))
console.log(likes(['Peter']))


// Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present).
// For example, 
// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

function countSheeps(sheep) {
  let sum = 0
 for (let s of sheep ){
  if (s) {
    sum++
  }
 }
 return sum
}

function countSheeps1(arr) {
  return arr.filter(Boolean).length;
}
console.log(countSheeps([[undefined], 0])) //1
console.log(countSheeps1([true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true])) //17


// There is a bus moving in the city which takes and drops some people at each bus stop.
// You are provided with a list (or array) of integer pairs. 
// Elements of each pair represent the number of people that get on the bus (the first item) 
// and the number of people that get off the bus (the second item) at a bus stop.
// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). 
// Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, 
// they are probably sleeping there :D

// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. 
// So the returned integer can't be negative.
// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

//([[10,0],[3,5],[5,8]]

// function busride(people){
//   let total = 0
//   for (let p of people) {
//     total += p[0]
//     total -= p[1] 
//   }
//   return total
// }

//const number = busStops => busStops.reduce((p,n) => p+n[0]-n[1],0)

function busride(people){
  let total = 0
  for (let i = 0; i < people.length; i++) {
    total += people[i][0]
    total -= people[i][1] 
  }
  return total
}

console.log(busride([[10,0],[3,5],[5,8]])) //5
console.log(busride([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]))  //21

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which are named with letters from a to m.
// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...
// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.
// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"


function printerError(str){
  let error = 0
  const allowed = 'abcdefghijklm'
  const strArray = str.split('')
  for (let i = 0; i < strArray.length; i++){
    if (!allowed.includes(strArray[i])){
      error++
    }
    }
  return `${error}/${str.length}`
}

function printerError1(s) {
  let count = 0
  for (let i = 0; i < s.split('').length;i++){
    if (s[i] > 'm'){
      count++
    }
  }
  return `${count}/${s.length}`
}

function printerError2(str) {
  const allowed = 'abcdefghijklm'
  const errorCount = str.split('').filter(letter => !allowed.includes(letter)).length
  return `${errorCount}/${str.length}`
}

console.log(printerError('aaabbbbhaijjjm'))
console.log(printerError('aaaxbbbbyyhwawiwjjjwwm'))

//Write a function which converts the input string to uppercase.
const makeUpperCase = str => str.toUpperCase()
console.log(makeUpperCase('abc'))//'ABC'
console.log(makeUpperCase('Hello'))//'HELLO'

//Nathan loves cycling.
//Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
//You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down.

//For example:
// time = 3 ----> litres = 1
// time = 6.7---> litres = 3
// time = 11.8--> litres = 5

function litres(time) {
  const drinks = Math.floor(time * 0.5)
  return drinks
}
console.log(litres(3)) //1
console.log(litres(6.7)) //3
console.log(litres(11.8)) //5