//p- array of strings
//r-array of strings, string exactly 4 characters long
//e-.filter method to name length === 4
//c- syntax issues
//e-friends.filter
//p-you're getting better!
//t-

function friend(friends){
  let friend = friends.filter(name => name.length === 4)
  return friend
}
/*
  Ember's Feedback:
  - Great job :)
  - Love the positive self talk
*/
// Alternative Solution
let filteredFriends = (friendsArray) => friendsArray.filter(name => name.length === 4)
