function friend(friends) {
  return friends.filter((name) => name.length === 4);
}

// its giving me an array of strings

// its expecting me to return an array of strings

//(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]

// I could incorrectly filter the string

// take the array of strings and filter out the names that are exactly 4 letters. return the filtered array

// Im very confident that I can do this!

/*
  Ember's Feedback:
  - Great job!
  - filter is a good one that you have now mastered
  - a concern for this problem would be "don't modify the input array"
*/
// Alternative Solution
let getFilteredFriends = (friends) => friends.filter(name => name.length === 4)
