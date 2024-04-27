/* calculate how much you need to tip based on total amount of the bill and the service.
- get total amount of bill, quality of service, and calculate tip based on those variables.
precept -
- parameters - number (total bill), string ('good') etc., math to calculate tip %.
give each service quality a matching tip %.
- return value - should be a number that calculates tip based on bill total and service quality.
- concerns - need to learn loop or method for how to do this.
- explain solution - if/else if/else loop for rating with the corresponding tip amount.
- positive self talk - i can do this!!
- translate - (take explain and turn it into programming language.) */

function calculateTip(amount, rating) {
  rating = rating.toLowerCase();// to lower case

  if (rating === 'terrible') {
    return Math.ceil(amount * 0);
  } else if (rating === 'poor') {
    return Math.ceil(amount * 0.05);
  } else if (rating === 'good') {
    return Math.ceil(amount * 0.1)
  } else if (rating === 'great') {
    return Math.ceil(amount * 0.15)
  } else if (rating === 'excellent') {
    return Math.ceil(amount * 0.2);
  } else {
    return 'Rating not recognised'; // i think its supposed to be recognized but i got an error spelling it that way.
  }
}


/* Ember's Feedback:
    Excellent job! :)

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
