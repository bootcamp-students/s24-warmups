/*
Instructions: Make a program that filters a list of strings and returns a list with only
your friends name in it. If a name has exactly 4 letters in it, you can be sure that it
has to be a friend of yours! Otherwise, you can be sure he's not...
Params: given array of strings
Return: items from that array whose length does not exceed 4
Example: Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
Solution: do a simple filter method! This will not change the order of array, simply return only
what matches the filter.

Given Code:
function friend(friends){
  //your code here
}
*/

function friend(friends) {
  realFriends = friends.filter(friends => friends.length === 4)
  return realFriends
}
/*
  Ember's Feedback:
  - Great job!!! :D
  - Really doing a wonderful job with the array methods
*/
// Alternative Solution
// your solution was mine, the only other way to do this is with a for loop
