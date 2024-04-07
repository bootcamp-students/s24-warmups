function getSum(a, b) {
    let min = Math.min(a, b),
        max = Math.max(a, b)
    return (max - min + 1) * (max + min) / 2
}
// while a is less than b increment a and then add it to the total.
// need to find smaller and larger number.

/*
    Ember's Feedback:
    Your pseudocode doesn't match your solution.
    Using the multiline variable declaration this early in the course was surprising to me.
    This is called Gaussian summation, or Gauss sum
*/
