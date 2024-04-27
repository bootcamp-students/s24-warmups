function calculateTip(amount, rating) {
  //   let terrible = "0%"
  //   let poor = "5%"
  //   let good = "10%"
  //   let great = "15%"
  //   let excellent = "20%
  let tip = 0
  if (rating.toLowerCase() === "terrible") {
    tip = 0
  } else if (rating.toLowerCase() === "poor") {
    tip = 0.05 * amount
  } else if (rating.toLowerCase() === "good") {
    tip = 0.10 * amount
  } else if (rating.toLowerCase() === "great") {
    tip = 0.15 * amount
  } else if (rating.toLowerCase() === "excellent") {
    tip = 0.20 * amount
  } else {
    return "Rating not recognised"
  }

  return Math.ceil(tip);
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
