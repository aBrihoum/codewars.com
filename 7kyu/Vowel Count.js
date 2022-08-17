/*
src : https://www.codewars.com/kata/54ff3102c1bad923760001f3
Instructions :

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

//  ~~~~~~~~ SOLUTION ~~~~~~~~ : 

function getCount(str) {
    return (str.match(/[aeiou]/g) || []).length
}
getCount('hi, hello,')

//  ~~~~ newbie SOLUTION ~~~~ :

// let vowels = ["a", "e", "i", "o", "u"]

// function getCount(str) {
//     let spreadStr = [...str]
//     return spreadStr.filter(x => vowels.indexOf(x) >= 0).length
// }