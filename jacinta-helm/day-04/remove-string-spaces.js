function noSpace(x){
 return x.replaceAll(" ","");
}

// P - create a function that removes space
// R - delete all spaces
// use replaceAll function. with this method (pattern, Replacement)

/* Ember's Feedback:
    Great job!
    PRECEPT for this
    Parameters - x: string -> this is the string we will remove all spaces from
    Return value - string data type will be returned out of the function
    Example - ("  wow an example  ") => "wowanexample"
    Concerns - if my input is not a string data type, my program will error. I should guard against that.
    Explain - For a given input string, I will look at each character in the string and determine if it is an empty space.
                If I find an empty space, I will not include it in the string returned from the function.
                All other characters will be added to a return string to return from the function.
    Pos self talk - I got this and my instructors have my back
    Translate - I will take my lines of plain english logic and implement them using JavaScript
*/
