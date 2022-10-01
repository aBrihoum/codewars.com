//  ~~~~~~~~ SOLUTION ~~~~~~~~ : 

function getCount(str) {
    return (str.match(/[aeiou]/g) || []).length
}
getCount('hi, hello,')

//  ~~~~ newbie SOLUTION ~~~~ :

// let vowels = ["a", "e", "i", "o", "u"]

// function getCount(str) {
//     let spreadStr = [...str]
//     return spreadStr.filter(x => vowels.indexOf(x) >= 0).length
// }