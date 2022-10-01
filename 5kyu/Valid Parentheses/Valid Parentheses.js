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
