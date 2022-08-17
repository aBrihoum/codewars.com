/*
src : https://www.codewars.com/kata/5949481f86420f59480000e7/
Instructions :
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
*/
// some help : https://www.youtube.com/watch?v=g1C40tDP0Bk
//  ~~~~~~~~ SOLUTION ~~~~~~~~ :

function oddOrEven(array) {
    return array.reduce((a, b) => a + b, 0) % 2 === 0 ? "even" : "odd"
}
oddOrEven([0, 1, 4])

//  ~~~~ newbie SOLUTION ~~~~ :

/*

function oddOrEven(array) {
    let sum = 0
    array.forEach(el => { sum += el })
    return (sum % 2 === 0 ? "even" : "odd")
}

*/