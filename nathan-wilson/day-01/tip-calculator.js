function calculateTip(amount, rating) {
  let lowerCaseRating = rating.toLowerCase();

  switch (lowerCaseRating) {
    case 'terrible':
      return 0;
    case 'poor':
      return Math.ceil(amount * 0.05);
    case 'good':
      return Math.ceil(amount * 0.1);
    case 'great':
      return Math.ceil(amount * 0.15);
    case 'excellent':
      return Math.ceil(amount * 0.2);
    default:
      return 'Rating not recognised';
  }
}

// amount of check, rating which is a string that refers to tip percentage
// return the amount you tip
// 20 total amount, rating excellent which is 20% tip, return 4
// could return wrong value, could be case sensitive
// for each rating convert it to lowercase and then get whatever tip percentage it correlates to
// take the amount for each times 0.(whatever the tip amount is
// I can do this, its okay if it isnt the first try!
