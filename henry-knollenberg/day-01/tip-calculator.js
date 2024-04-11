/* switch case : Terrible -> amount * 0
        case: poor -> amount * .05
        case: good -> amount * .1
        case: great -> amount * .15
        case: excellent -> amount * .2
        default: rating not recognized

    make rating uppercase*/

function calculateTip(amount, rating) {
  rating = rating.toUpperCase();
  switch (rating) {
    case "TERRIBLE":
      return 0;
    case "POOR":
      return Math.ceil(amount * 0.05);
    case "GOOD":
      return Math.ceil(amount * 0.1);
    case "GREAT":
      return Math.ceil(amount * 0.15);
    case "EXCELLENT":
      return Math.ceil(amount * 0.2);
    default:
      return "Rating not recognised";
  }
}


/* Ember's Feedback:
    Very good job!
    In your pseudocode, try to make it be more plain logic and less code. Leave the code for the function.
    When a function hits a return statement it stops executing the rest of the function, so the break statements are unnecessary.

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
