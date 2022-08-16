/*
src : https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

Instructions :
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
This image will illustrate things more clearly:

https://www.haan.lu/files/2513/8347/2456/snail.png


NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].


*/

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
