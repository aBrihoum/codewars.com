//  ~~~~~~~~ SOLUTION ~~~~~~~~ : 

function moveZeros(arr) {
    let z = []
    return arr.filter(x => { if (x === 0) z.push(x); return x !== 0 }).concat(z)
}

moveZeros([9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9])









