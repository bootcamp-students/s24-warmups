function noSpace(x) {
  return x.replaceAll(" ", "")
}

/*
p: i have x which will give me a string. I will have characters
and spaces in that string. i need to manipulate it to remove the blanks.

R: should return a string with no spaces

E: "8 J B" --> "8JB"

C: im concerned that i dont know what will delete a space.
it should be a simple thing. read the string, return it differently.

p: all i have to do is learn, take it step by step, i am capable.

t: i discovered .replaceAll, learned that i can substitute " " (a space) with "" (no character)
*/

/* Ember's Feedback:
  - Good job :D
  - concern here would be that if when this function is called, if the argument value given is not a string
    then that means it won't have a .replaceAll() method and will throw an error.
    Sometimes you want to throw an error and sometimes you don't. It depends on the shop. But it is a concern.
*/
// Alternative solution
function removeSpaces(inputString) {
  // this is optional chaining. It will return undefined if the variable value doesn't have a repalceAll property.
  return inputString?.replaceAll(" ", "")
}
