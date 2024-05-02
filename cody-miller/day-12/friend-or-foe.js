function friend(friends) {
  let friend = friends.filter(name => name.length === 4)
  return friend;
}
/*
  Ember's Feedback:
  - Great job, good use of filter!
  - This is a super useful method so I hope it clicked for you
*/
// Alternative Solution
let getFilteredFriends = (friends) => friends.filter(name => name.length === 4)
