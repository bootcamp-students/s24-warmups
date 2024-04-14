//create array, push items to array in a loop
function generateRange(min, max, step) {
    var resultArray = []
    while (min <= max) {
        resultArray.push(min);
        min += step;
    }
    return resultArray;
}
