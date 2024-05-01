/* P - friends, surelyFriends
R - array of surelyFriends

Iterate through the array and filter out those with only 4 letters.
Return the new array.

*/

"use strict";

function friend(friends) {
  let surelyFriends = friends.filter(word => word.length === 4);
  return surelyFriends;
}
/*
  Ember's Feedback:
  - good job!
*/
// Alternative Solution
// The only other way to do this is with a for loop and build a return array.
// Same logic.
