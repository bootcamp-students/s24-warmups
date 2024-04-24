/*
The map function can accept equations. Because we want to
double what is in the array, we simply just times everything 
by the two.
*/

function double(array) {
    let twice = array.map((thing) => thing * 2);
    return twice;
}