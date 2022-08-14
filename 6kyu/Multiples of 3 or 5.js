/*
src : https://www.codewars.com/kata/514b92a657cdc65150000006
Instructions :

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

*/

//  ~~~~~~~~ SOLUTION ~~~~~~~~ : 

function solution(number) {
    let set = new Set()
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) set.add(i)
    }
    return [...set].reduce((a, b) => a + b, 0)
}
// solution(10)

//  ~~~~ newbie SOLUTION ~~~~ :

/*

function solution(number) {
    let set = new Set()
    for (let i = 1; i < number; i++) {
        let x = i * 3
        let y = i * 5
        if (x < number) set.add(x)
        if (y < number) set.add(y)
    }
    return [...set].reduce((a, b) => a + b, 0)
}

*/
