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
//base amount * percent based on rating
//round up result using Math.ceil
//Use a switch case
//make it case insensitive somehow
