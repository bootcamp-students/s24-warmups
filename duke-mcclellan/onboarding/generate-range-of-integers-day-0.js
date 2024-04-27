

function generateRange(min, max, step) {

    let range = [];

    if (max - min < step) {
        range.push(min);
    } else {

        for (let i = min; i <= max; i += step) {
            range.push(i);
        }
    }

    return range;
}

/* Ember's Feedback:
    Good job
    This is the same as the range function that you will see when we get ot python
*/
