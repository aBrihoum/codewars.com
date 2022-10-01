//  ~~~~~~~~ SOLUTION ~~~~~~~~ : 

function nextSmaller(n) {
    let p = -1
    let x = Array.from(String(n), Number)
    for (var i = x.length - 1; i >= 0; i--) {
        if (x[i] > x[i + 1]) {
            p = i
            break
        }
    }
    let right = x.splice(p)
    let left = x
    let fn = right[0]
    let fnNb = -1
    for (let i = 0; i < right.sort().reverse().length; i++) {
        if (right[i] < fn) {
            fnNb = right[i]
            right.splice(i, 1)
            left.push(fnNb)
            break
        }
    }
    if (left[0] === 0) return -1
    let y = Number(left.concat(right).join(''))
    if (y === n) return -1; else return y
}

nextSmaller(2071)
