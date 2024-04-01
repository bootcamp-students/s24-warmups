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
