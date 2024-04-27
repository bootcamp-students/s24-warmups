function calculateTip(amount, rating) {
  let tipAmount;
  switch (rating.toLowerCase()) {
    case "terrible":
      tipAmount = Math.ceil(amount * 0.0);
      break;
    case "poor":
      tipAmount = Math.ceil(amount * 0.05);
      break;
    case "good":
      tipAmount = Math.ceil(amount * 0.1);
      break;
    case "great":
      tipAmount = Math.ceil(amount * 0.15);
      break;
    case "excellent":
      tipAmount = Math.ceil(amount * 0.2);
      break;
    default:
      return "Rating not recognised";
  }
  return tipAmount;
}
// base amount * percent based on rating
// round up result using Math.ceil
// Use a switch case
// make it case insensitive somehow

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
