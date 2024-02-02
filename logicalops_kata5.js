function countVowels(letters) {
let count = 0
    for (let letter of letters) {
        if (letter === 'a' || letter === 'e'|| letter === 'i'|| letter === 'o' || letter === 'u') {
            count = count + 1
        }
    } 
    return count
}

console.log(countVowels(['a', 'i']))