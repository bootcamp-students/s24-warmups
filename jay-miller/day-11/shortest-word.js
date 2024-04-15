function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}
//use .split
//Find shortest word with .length
//Use currentWord to see if it's greater than shortestWord
//Then return shortestWord
//used .map on .split
