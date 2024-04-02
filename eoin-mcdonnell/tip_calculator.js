function calculateTip(amount, rating) {
    switch(rating.toLowerCase()){
      case "terrible":
        return 0;
      case "poor":
        return Math.ceil(amount * 0.05);
      case "good":
        return Math.ceil(amount * 0.1);
      case "great":
        return Math.ceil(amount * 0.15);
      case "excellent":
        return Math.ceil(amount * 0.2);
      default:
        return "Rating not recognised";
    }
  }