// numbers counted more than twice are still just one
// capital and lower case can be duplicates
// will have to switch toLowerCase
// will need a new array



const duplicateCount = (string) => {

    // makes an array all lowercase and sorts the array in alpha order for easy comparison
    let sortedString = string.toLowerCase().split('').sort();

    // this array will house the duplicated values so we can
    // get the length of it (or the number of duplicated characters).
    let newArray = []

    // set a loop for the array
    for (i = 0; i < sortedString.length; i++) {
        // if the current element equals the following element the push it to the new array AND
        // ONLY if the new array doesn't already include the current element
        if (sortedString[i] === sortedString[i + 1] && !newArray.includes(sortedString[i])) {
            // push elements to new array
            newArray.push(sortedString[i])
        }
    }
    // return the number of elements in the array to represent the number characters that were duplicated
    return newArray.length
}

/*
    Ember's Feedback:
    - Such a great job!! :D
    - Awesome pseudocode and comments
    - don't forget to use "let i" in the for loop!
*/

// Alternative Solution
function duplicateCount(text) {
    return text
        .toLowerCase()
        .split('')
        .filter(function (val, i, arr) {
            return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
        })
        .length;
}
