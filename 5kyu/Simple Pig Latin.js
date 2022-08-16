/*
src : https://www.codewars.com/kata/520b9d2ad5c005041100000f
Instructions :

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

//  ~~~~~~~~ SOLUTION ~~~~~~~~ : 

function pigIt(str) {
    return str.split(' ').map(x => x.match(/[a-z]+/gi) ? x.slice(1).concat(x[0] + "ay") : x).join(' ')
}