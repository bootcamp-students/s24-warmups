function likes(names) {
  let arrayOfNames = names;
  let whoLikesThis = "";

  if (arrayOfNames.length === 0) {
    whoLikesThis = "no one likes this";

  } else if (arrayOfNames.length === 1) {
    whoLikesThis = `${arrayOfNames[0]} likes this`;

  } else if (arrayOfNames.length === 2) {
    whoLikesThis = `${arrayOfNames[0]} and ${arrayOfNames[1]} like this`;

  } else if (arrayOfNames.length === 3) {

    whoLikesThis = `${arrayOfNames[0]}, ${arrayOfNames[1]} and ${arrayOfNames[2]} like this`;
  } else if (arrayOfNames.length > 3) {

    whoLikesThis = `${arrayOfNames[0]}, ${arrayOfNames[1]} and ${arrayOfNames.length - 2
      } others like this`;
  }
  return whoLikesThis;
}

/*
  if then statements
    if names is empty, no one likes this
    one name + likes
    two names "and"
    three names "," + "and"
    >3 names "and" + "[i] others"
*/

/*
  Ember's Feedback:
  - Flesh out the pseudo code some more, I cleaned it up for you
  - Great job! :D
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
