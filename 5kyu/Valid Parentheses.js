/*
src : https://www.codewars.com/kata/52774a314c2333f0a7000688
Instructions :

Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100

*/

//  ~~~~~~~~ SOLUTION ~~~~~~~~ : 

function validParentheses(parens) {
    while (parens.indexOf('()') != -1) {
        parens = parens.replace('()', '')
    }
    return !parens.length
}

validParentheses('(())((()))')


//  ~~~~ my #1 attempt ~~~~ :
/*
  parens = parens.split('')
  for (var i = 0; i < parens.length; i++) {
      if (parens[i] === '(' && parens[i + 1] === ')') {
          parens.splice(i, 1)
          parens.splice(i, 1)
          i--
          i--
      }
  }
  if (parens.length === 0) return true
  return false
  */
