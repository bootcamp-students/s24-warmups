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
    
    whoLikesThis = `${arrayOfNames[0]}, ${arrayOfNames[1]} and ${
      arrayOfNames.length - 2
    } others like this`;
  }
  return whoLikesThis;
}

/*
Create an array 
Creat a function that pushes things into the array
  the fn should take the name as a param
  if then statements
    one name + likes
    two names "and"
    three names "," + "and"
    >3 names "and" + "[i] others"
*/
