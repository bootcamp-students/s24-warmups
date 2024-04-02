function calculateTip(amount, rating) {
  //declare rating percantages
  let lowerCaseRating = rating.toLowerCase();
  
  if (lowerCaseRating === "terrible"){
      return 0;
  } else if (lowerCaseRating === "poor") {
     return Math.ceil(amount *0.05);
  } else if (lowerCaseRating === "good"){
      return Math.ceil(amount * 0.10);
  } else if (lowerCaseRating === "great"){
      return Math.ceil(amount * 0.15);
  } else if (lowerCaseRating === "excellent"){
      return Math.ceil(amount * 0.20);
  } else return "Rating not recognised"
  
  }
//   return calculateTip = (amount * rating);



//Parameter create a function that calculates tip based on bill and service
//Return the value of tip amount
//Example (30, "Good"), 3 
//Create a string for the value of ratings
//use if else statements for function 
//Concerns rounding up whole numbers 
