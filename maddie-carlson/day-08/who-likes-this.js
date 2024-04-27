function likes(names) {
  // takes an array of names and returns a string showing who likes what, like how Facebook does it
  // returns a string detailing the likes
  // can fail if names is the wrong type or the types inside are not strings

  //check for empty array
  if (names.length === 0) {
    return "no one likes this"
  }

  let likes = ""

  //add names based on array length
  //takes at most 3 names, or two names if it's four or more, instead having a number

  if (names.length === 1) {
    likes = names[0] + " likes this"
  } else if (names.length === 2) {
    likes = names[0] + " and " + names[1] + " like this"
  } else if (names.length === 3) {
    likes = names[0] + ", " + names[1] + " and " + names[2] + " like this" //no oxford comma :(
  } else { //more than 3
    likes = names[0] + ", " + names[1] + " and " + String(names.length - 2) + " others like this" //just add to the count
  }

  return likes
}
/*
  Ember's Feedback:
  - Great job!
  - Use === it will save you headaches down the road
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
