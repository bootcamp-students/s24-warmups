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
function maskify(cc) {
  if (cc.length <= 4) {
    return cc
  } else if (cc.length >= 5) {
    let end = cc.length - 4
    let short = cc.substring(0, end)
    //short is all of the numbers but the last four
    //okay it breaks down after this and i think it's because split makes it an array and replaceAll is a string method
    let everyElement = short.split('')
    let replace = everyElement.replaceAll(' ', '#')
    let answer = replace + end
    return answer
  }
}

/*
  Ember's Feedback:
  - The else if isn't needed, an just use the if
  - doesn't work
*/
