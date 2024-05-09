//string
//string of highest and lowest number
//math.min/math.max
//wrong method/incorrect syntax
//stay positive!
//translate -


function highAndLow(numbers) {
    return `${Math.max(...numbers.split(' '))} ${Math.min(...numbers.split(' '))}`
}
/*
    Ember's Feedback:
    - great job!
    - this is really concise code :D
*/
// Alternative Solution
// Sort
function highAndLow(numbers) {
    "use strict"
    let order = numbers.split(' ').map(Number).sort((a, b) => a - b)
    return `${order.at(-1)} ${order.at(0)}`
}

// Slightly different reduce where you run it just once
function highAndLow(numbers) {
    "use strict"
    let numbersList = numbers.split(' ').map(Number)
    let [highestNumber, lowestNumber] = numbersList.reduce((acc, cur) => {
        if (cur > acc[0]) {
            acc[0] = cur
        }
        if (cur < acc[1]) {
            acc[1] = cur
        }
        return acc
    }, [-Infinity, Infinity])
    return `${highestNumber} ${lowestNumber}`
}

// Min Max
function highAndLow(numbers) {
    let numArr = numbers.split(' ')
    return `${Math.max(...numArr)} ${Math.min(...numArr)}`
}
