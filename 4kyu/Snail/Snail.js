//  ~~~~~~~~ SOLUTION ~~~~~~~~ : 

snail = function (array) {
    let arr = []
    while (array.length > 1) {
        arr.push(array.shift())
        arr.push(array.map(x => x.pop()))
        arr.push(array.pop().reverse())
        arr.push((array.map(x => x.shift())).reverse())
    }
    if (array.length === 1) { arr.push(array[0]) }
    return arr.reduce((a, b) => a.concat(b))
}
// explanation : https://i.imgur.com/RlUF5YM.jpeg

array = [
    [1, 2, 3, 1],
    [4, 5, 6, 4],
    [7, 8, 9, 7],
    [7, 8, 9, 7]
]
snail(array)
