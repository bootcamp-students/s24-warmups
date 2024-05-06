/*
Instructions: Your task is to write a function maskify, which changes all but the last four characters into '#'.
Examples: 
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""
// "What was the name of your first pet?"
"Skippy" --> "##ippy"
Params: given string (could be numbers or integers)
Return: new string 
Concerns: could be given numbers or integers, but you just need to count the individual elements of the string, and anything over 4 elements gets blacked out. 
Solution: 

Given Code:
// return masked string
function maskify(cc) {

}
*/

/*
Logic:
if (string.length <= 4){
    return string
} else if (string.length >= 5 ) {
    return string.split . replace with #
}
*/