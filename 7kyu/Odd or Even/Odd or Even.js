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