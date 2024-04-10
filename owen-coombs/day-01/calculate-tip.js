function calculateTip(amount, rating) {
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

// use math ceil
// let terrible = "0%"
// let poor = "5%"
// let good = "10%"
// let great = "15%"

/*
  Ember's Feedback:
  Great job!
  Come back to this and add your pseudocode.
*/
// Alternative Solution
function calculateTip(amount, rating) {
  const tip = (percent) => Math.ceil(amount * percent);
  switch (rating.toLowerCase()) {
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
