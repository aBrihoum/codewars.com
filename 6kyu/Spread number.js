/*
src : https://www.codewars.com/kata/52597aa56021e91c93000cb0
Instructions :

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/

//  ~~~~~~~~ SOLUTION ~~~~~~~~ : 
function moveZeros(arr) {
    let z = []
    return arr.filter(x => { if (x === 0) z.push(x); return x !== 0 }).concat(z)
}

moveZeros([9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9])









