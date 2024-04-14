// Century from year

// Remove string spaces

function noSpace(x) {
    let i = 0;
    if (i < x.length, i++) { // this is an if statement, not a for loop
        let newString = x[i];
        if (newString = " ") { // one equal sign is assignment, not equality checking
            newString.replace(" ", ""); // for the context of this problem, if you were looping over the string you would want to add characters to a new string
            console.log(newString);
        }
        console.log(newString);
        return newString; // your return statement is inside what assume you wished to be a for loop. This would exit on the first iteration of a loop.
    }
}
