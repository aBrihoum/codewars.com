//  ~~~~~~~~ SOLUTION ~~~~~~~~ : 

function pigIt(str) {
    return str.split(' ').map(x => x.match(/[a-z]+/gi) ? x.slice(1).concat(x[0] + "ay") : x).join(' ')
}

pigIt('Pig latin is cool')