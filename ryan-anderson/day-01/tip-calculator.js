function calculateTip(amount, rating) {
  // convert rating to lowercase for case-insensitive comparison
  // if statements for rating
  // calculate tip based on rating
  let newRating = rating.toLowerCase()
  if (newRating === 'terrible') {
    return 0
  } else if (newRating === 'poor') {
    return Math.ceil(amount * .05)
  } else if (newRating === 'good') {
    return Math.ceil(amount * .1)
  } else if (newRating === 'great') {
    return Math.ceil(amount * .15)
  } else if (newRating === 'excellent') {
    return Math.ceil(amount * .2)
  } else {
    return 'Rating not recognised'
  }
}

/* Ember's Feedback:
    Very good job!

    Giving my solution below "for the soup"
    Concerns for this problem would be if amount was not a number, or -
    rating not being a string, because we assume it will have toLowerCase().
*/
// Alternative Solution
function calculateTip(amount, rating) {
  if (isNaN(amount)) return 0;
  const tip = (percent) => Math.ceil(amount * percent);
  switch (rating?.toLowerCase()) {
    case "terrible":
      return 0;
    case "poor":
      return tip(0.05);
    case "good":
      return tip(0.1);
    case "great":
      return tip(0.15);
    case "excellent":
      return tip(0.2);
    default:
      return "Rating not recognised";
  }
}

// or, another one
function calculateTip(amount, rating) {
  if (isNaN(amount)) return 0;

  const ratings = {
    "terrible": 0,
    "poor": 0.05,
    "good": 0.1,
    "great": 0.15,
    "excellent": 0.2,
  }

  const getTip = (percent) => Math.ceil(amount * percent);

  const tipAmount = getTip(ratings[rating?.toLowerCase()]);

  return Number.isNaN(tipAmount) ? "Rating not recognised" : tipAmount
}

