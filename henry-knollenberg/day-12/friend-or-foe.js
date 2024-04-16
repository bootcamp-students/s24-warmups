/* P - friends, surelyFriends
R - array of surelyFriends

Iterate through the array and filter out those with only 4 letters.
Return the new array.

*/

"use strict";

function friend(friends){
  let surelyFriends = friends.filter(word => word.length === 4);
  return surelyFriends;
}