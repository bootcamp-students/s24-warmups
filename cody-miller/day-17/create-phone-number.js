function createPhoneNumber(numbers) {
    let formattedNumber = "(xxx) xxx-xxxx";
    for (let i = 0; i < numbers.length; i++) {
        formattedNumber = formattedNumber.replace("x", numbers[i]);
    }
    return formattedNumber;
}
/*
    Ember's Feedback:
    - Good job!
    - I came up with something very similar, using .map
*/
// Alternative Solution
function createPhoneNumber(numbers) {
    return numbers.reduce((a, c) => a.replace('#', c), '(###) ###-####');
}
