function noSpace(x) {
    let newx = x.split(" ").join("");
    return newx
    // find command to remove all " " characters from string
    // replace spaces with ""
}

/*
    Ember's Feedback:
    - Great job!
    - Split will break the string apart by the empty space, which essentially removes them as they
        are not in the array. So then when you bring the array back into a string they are gone :D
    - Take a look at the solutions tab on Codewars to see how others also solved this problem.
*/
