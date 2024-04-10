function calculateTip(amount, rating) {
  // parameters are amount and rating, amount should be a number and rating should be a string
  // should return a number - the tip amount, or a string "rating not recognized"
  // ex (20, "Excellent"), returns 4
  // function can fail if an invalid rating or amount is input

  let tip = 0;
  rating = rating.toLowerCase();

  if (typeof amount != "number") {
    return "Rating not recognised"
  }

  // set rating to lowercase, compare to the different possible values in a switch statement
  switch (rating) {
    case "terrible":
      tip = 0
      break;
    case "poor":
      tip = amount * 0.05
      break;
    case "good":
      tip = amount * 0.1
      break;
    case "great":
      tip = amount * 0.15
      break;
    case "excellent":
      tip = amount * 0.2
      break;
    default:
      tip = "Rating not recognised"
      return tip
  }

  // round tip UP
  tip = Math.ceil(tip)

  // return tip amount
  return tip
}

/* Ember's Feedback:
    Very good job! :D
    Extra pleased with your guarding statement!!

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
