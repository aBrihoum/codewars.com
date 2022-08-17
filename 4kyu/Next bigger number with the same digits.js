/*
src : https://www.codewars.com/kata/55983863da40caa2c900004e
Instructions :

Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

12 ==> 21
513 ==> 531
2017 ==> 2071
nextBigger(num: 12)   // returns 21
nextBigger(num: 513)  // returns 531
nextBigger(num: 2017) // returns 2071
If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

9 ==> -1
111 ==> -1
531 ==> -1
nextBigger(num: 9)   // returns nil
nextBigger(num: 111) // returns nil
nextBigger(num: 531) // returns nil

*/

//  ~~~~~~~~ SOLUTION ~~~~~~~~ : 

/*
this was the first attempt : from right to left, if i>i+1, we swap their place in the array
https://prnt.sc/9ScCdkdR5-vT
*/
// x = n.toString().split('')
// x = x.map(x => x = Number(x)).reverse()
// function arraymove(arr, fromIndex, toIndex) {
//     var element = arr[fromIndex]
//     arr.splice(fromIndex, 1)
//     arr.splice(toIndex, 0, element)
// }
// for (let i = 0; i < x.length; i++) {
//     if (x[i] > x[i + 1]) {
//         arraymove(x, i, i + 1)
//         break
//     }
// }
// res = Number(x.reverse().join(''))
// if (res == n) return -1
// else return res

//""""""""""""""""""""""""
/*
the sec attempt : from right to left, we move the last number to his left, if the new number > the original, break
https://prnt.sc/UL96Wt48stdW
*/
// var x = Array.from(String(n), Number)
// exit:
// for (let i = 1; i <= x.length; i++) {
//     var z = x.length - i
//     for (let j = 1; j <= x.length; j++) {
//         x = Array.from(String(n), Number)
//         x.splice(x.length - j, 0, Number(x.splice(z, 1)))
//         if (Number(x.join('')) > n) {
//             break exit;
//         }
//     }
// }
// res = Number(x.join(''))
// if (res == n) return -1
// else return res
//""""""""""""""""""""""""

function nextBigger(n) {
    let p = -1
    let x = Array.from(String(n), Number)
    for (var i = x.length - 1; i >= 0; i--) {
        if (x[i] < x[i + 1]) {
            p = i
            break
        }
    }
    let right = x.splice(p)
    let left = x
    let fn = right[0]
    let fnNb = -1
    for (let i = 0; i < right.sort().length; i++) {
        if (right[i] > fn) {
            fnNb = right[i]
            right.splice(i, 1)
            left.push(fnNb)
            break
        }
    }
    let y = Number(left.concat(right).join(''))
    if (y === n) return -1; else return y
}


nextBigger(48845354111)