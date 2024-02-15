// Given an array of integers, remove the n smallest. 
// If there are multiple elements with the same value, 
// remove the ones with a lower index first. 
// If n is greater than the length of the array/list, 
// return an empty list/array. If n is zero or less, 
// return the original array/list.

// Don't change the order of the elements that are left.
// removeSmallest (-10) [1,2,3,4,5] = [1,2,3,4,5]
// removeSmallest 0 [1,2,3,4,5] = [1,2,3,4,5]
// removeSmallest 2 [5,3,2,1,4] = [5,3,4]
// removeSmallest 3 [5,3,2,1,4] = [5,4]
// removeSmallest 3 [1,2,3,4,5] = [4,5]
// removeSmallest 5 [1,2,3,4,5] = []
// removeSmallest 9 [1,2,3,4,5] = []

// removeSmallest 2 [1,2,1,2,1] = [2,2,1]

loop the Array to find the smallest to remove
apply condition by comparing value with array's length
v <= 0 -> original Array
V > Array.lenght -> emtpy array
else loop to remove v times

