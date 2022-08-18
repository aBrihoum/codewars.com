/*
src : https://www.codewars.com/kata/5659c6d896bc135c4c00021e
Instructions :

Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

For example:

nextSmaller(21) == 12
nextSmaller(531) == 513
nextSmaller(2071) == 2017
Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

nextSmaller(9) == -1
nextSmaller(111) == -1
nextSmaller(135) == -1
nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
some tests will include very large numbers.
test data only employs positive integers.
The function you write for this challenge is the inverse of this kata: "Next bigger number with the same digits."

*/

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
