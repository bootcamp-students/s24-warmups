function duplicateCount(text) {
    const count = {};
    for (let i = 0; i < text.length; i++) {

        let character = text.charAt(i);
        if (count[character]) {
            count[character]++;
        } else {
            count[character] = 1;
        }
    }
    return count
}

// We are given a string
// We are to return a number
// That occur more than once
// I have my key value pairs. I want to see which ones have the highest value

/*
    Ember's Feedback:
    - this doesn't work :)
    - no mime type on file
*/

function duplicateCount(text) {
    const count = {};
    for (let i = 0; i < text.length; i++) {

        let character = text.charAt(i).toLowerCase();
        if (count[character]) {
            count[character]++;
        } else {
            count[character] = 1;
        }
    }

    return Object.values(count).filter(x => x > 1).length
}
