function friend(friends){
  "use strict";
 let result = friends.filter((friend) => friend.length === 4);
    return result
}

/*
i need to "filter" over the given array to find values equaling 4, 
easy enough, just literally use .filter and set the params to 4, return result
*/

