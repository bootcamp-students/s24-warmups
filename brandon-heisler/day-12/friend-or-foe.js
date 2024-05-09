function friend(friends) {
  "use strict";
  let result = friends.filter((friend) => friend.length === 4);
  return result
}

/*
i need to "filter" over the given array to find values equaling 4,
easy enough, just literally use .filter and set the params to 4, return result
*/
/*
  Ember's Feedback:
  - the "set to params to 4" part isn't strictly correct, but that is
    me being a stickler for specificity in language.
  - Great job! :D
*/
// Alternative Solution
let getFilteredFriends = (friends) => friends.filter(name => name.length === 4)
