/*
Instructions: You probably know the "like" system from Facebook and other pages.
People can "like" blog posts, pictures or other items. We want to create the text that should be displayed
next to such an item. Implement the function which takes an array containing the names of people that like
an item. It must return the display text as shown in the examples:
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
Params: Gives us an array called 'names'
Return: a string
Solution:

Given Code:
function likes(names) {
  // TODO
}
*/

/* First thought:
A function that returns the string value of the array 'names' and then concatenates it to
the phrase 'likes this' (with a few variables)
If the function is empty it needs to return ('no one likes this')
If the function returns more than three name it needs to list the first to name and
then count all of the other names to return ('name, name, name and 2 others like this')

for loops for the last two, but you basically need to name a function outside of the original
likes function and then call that one to the likes function ??

No! I just did this
*/

function likes(names) {
  let status = ''
  if (names.length <= 0) {
    status = 'no one likes this'
  } else if (names.length == 1) {
    status = names[0] + ' likes this'
  } else if (names.length == 2) {
    status = names[0] + ' and ' + names[1] + ' like this'
  } else if (names.length == 3) {
    status = names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
  } else if (names.length >= 4) {
    status = names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this'
  }
  return status
}

// HA!

/*
  Ember's Feedback:
  - GREAT JOB! :D
  - Killing it!
*/
// Alternative solution
function likes(names) {
  switch (names.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}
