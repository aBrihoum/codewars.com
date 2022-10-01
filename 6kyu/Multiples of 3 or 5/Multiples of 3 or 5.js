//  ~~~~~~~~ SOLUTION ~~~~~~~~ : 

function solution(number) {
    let set = new Set()
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) set.add(i)
    }
    return [...set].reduce((a, b) => a + b, 0)
}
solution(10)

//  ~~~~ newbie SOLUTION ~~~~ :

/*

function solution(number) {
    let set = new Set()
    for (let i = 1; i < number; i++) {
        let x = i * 3
        let y = i * 5
        if (x < number) set.add(x)
        if (y < number) set.add(y)
    }
    return [...set].reduce((a, b) => a + b, 0)
}

*/
