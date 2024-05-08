/*precept
parameters- take a array of 10 numbers and format it to phone number form.
return- formatted string of numbers in phone number form
example- ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
concerns- was having trouble finding the right method to use. But with help learned about
slice.
explain- slice numbers into separate parts join them and then format them with template literals
positive self talk- "Believe you can and you're halfway there." - Theodore Roosevelt
*/

function createPhoneNumber(numbers) {
    let areaCode = numbers.slice(0, 3).join('');
    let mainNumber1 = numbers.slice(3, 6).join('')
    let mainNumber2 = numbers.slice(6, 10).join('')
    let fullNumber = `(${areaCode}) ${mainNumber1}-${mainNumber2}`
    return fullNumber;
}
/*
    Ember's Feedback:
    - Great job! :D
    - Good use of slice and of template
*/
// Alternative Solution
function createPhoneNumber(numbers) {
    return numbers.reduce((a, c) => a.replace('#', c), '(###) ###-####');
}
