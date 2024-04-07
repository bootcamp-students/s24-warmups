function calculateTip(amount, rating) {
  //Declare ratings
  let rate = rating.toLowerCase();

  if (rate === "excellent") {
    return Math.ceil(amount * 20 / 100);
  }

  if (rate === "great") {
    return Math.ceil(amount * 15 / 100);
  }

  if (rate === "good") {
    return Math.ceil(amount * 10 / 100);
  }

  if (rate === "poor") {
    return Math.ceil(amount * 5 / 100);
  }

  if (rate === "terrible") {
    return Math.ceil(amount * 0 / 100);
  } else {
    return "Rating not recognised";
  }
}

/* Ember's Feedback:
    Very good job!
    You need to include pseudocode in your submissions, circle back and add some for this to count.

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
