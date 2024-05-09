function friend(friends) {
    //Use .filter to get names
    //if name.length === 4: Passed
    //if name.length doesn't === 4: Failed
    return friends.filter(function (item) { return item.length === 4 });
}
/*
    Ember's Feedback:
    - Good job!
    - File name should be all lower case
*/
// Alternative Solution
function friend(friends) {
    return friends.filter(friend => friend.length === 4);
}
