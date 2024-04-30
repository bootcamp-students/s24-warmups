function friend(friends) {
  const myFriend = friends.filter((friend) => friend.length === 4)
  return myFriend
}

//P create a function that filters a list of strings and returns a list with only my friends name.
//R my function should return my friends name that has 4 letters in it. return value array of strings
//Example (["ryan", "kieran", "mark"]), ["ryan", "mark"]
//Concerns- what if friends is an empty array.
//Explain- I will create a variable with the list of everybody's name. create a function using the filter method in it.
//in that function use friend.length to show the value of letters in each name and use an arrow function and use the
//strictly equal to operator to 4 to find my friends. Create a new array, using .filter returns a new array for free.

/*
  Ember's Feedback:
  - Good job! Great use of an inline function there, no return keyword needed :D
  - Only thing I would say is myFriend could be better named as myFriends, filteredFriends, etc.
*/
// Alternative Solution
let filteredFriends = (friends) => friends.filter((friend) => friend.length === 4)
