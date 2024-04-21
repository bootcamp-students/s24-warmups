function friend(friends){
//   console.log(friends)
  const myFriend = friends.filter((friend) => friend.length === 4)
  // console.log(myFriend);
  return myFriend
}

//P create a function that filters a list of strings and returns a list with only my friends name. 
//R my function should return my friends name that has 4 letters in it. return value array of strings
//Example (["ryan", "kieran", "mark"]), ["ryan", "mark"]
//Concerns- what if friends is an empty array.
//Explain- I will creat a variable with the list of everybodys name. creat a function using the filter method in it.
//in that function use friend.length to show the vakue of letters in each name and use an arrow function and use the 
//strictly equal to operator to 4 to find my friends. Create a new array, using .filter returns a new array for free. 
