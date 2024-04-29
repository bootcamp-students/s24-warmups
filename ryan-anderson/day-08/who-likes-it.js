function likes(names) {
  let nameAmount = names.length;
  switch (nameAmount) {
    case 0:
      return "no one likes this";
      break;
    case 1:
      return names + ' likes this'; // It looks like you really enjoy using this array to string casting
      break;
    case 2:
      return names[0] + " and " + names[1] + " like this";
      break;
    case 3:
      return names[0] + ", " + names[1] + " and " + names[2] + " like this";
      break;
    default:
      return names[0] + ", " + names[1] + " and " + (nameAmount - 2) + " others like this";
      break;
  }
}
/*
  Ember's Feedback:
  - Come back and add pseudo code. Explain what you learned from the last time :D
  - I moved your old code into a notes.js file. Only put your code and your pseudo code in these so it is easier to read.
  - Break statements are unneeded if you have a return statement. I will re-write this below.
*/
function likes(names) {
  let nameAmount = names.length;
  switch (nameAmount) {
    case 0:
      return "no one likes this";
    case 1:
      // using string template, makes the code slightly more readable
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
}
