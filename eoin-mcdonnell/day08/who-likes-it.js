//we need to add and for names one or more
// if there is three names the and need to be between the last two
// if there are more than three we only show the first two and add and x amount others like this
// we will need to add the names to the array
// we will need to for the last one be array.length - 2 others like this
//
/*-
function likes(names) {
  // TODO
  console.log(names)
  let namesArr = [];
  if(names === ""){
    return "no one likes this"
  } else {
    namesArr.push(names)
  }
  for (let i = 0; i < namesArr.length; i++){
    if(i ===  1) {
      return "${namesArr[i]} likes this"
    } else if (i === 2) {
      return "${namesArr[0]} and ${namesArr[1]} like this"
    } else if (i === 3){
      return "${namesArr[0]}, ${namesArr[1]}, and ${namesArr[3]} like this"
    } else if (i > 4) {
      return "${namesArr[0]} and ${namesArr[1]} and ${namesArr.length -2} other like this."
    }
  }
}
-*/

//names is already an array, i do not need to add them to an array


function likes(names) {
  if (names.length == 0) {
    return "no one likes this";
  } else if (names.length == 1) {
    return names[0] + " likes this";
  } else if (names.length == 2) {
    return names[0] + " and " + names[1] + " like this";
  } else if (names.length == 3) {
    return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  } else {
    return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
  }
}

/*
  Ember's Feedback:
  - Great job!
  - Put unused / old code in a notes.js file so the submission is kept tidy and you can reference your old code later
    if it is helpful for you to do that.
*/
// Alternative Solution
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
