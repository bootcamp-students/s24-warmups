function calculateTip(amount, rating) {
//Declare ratings 
let rate = rating.toLowerCase();
if (rate === "excellent"){
  return Math.ceil(amount*20/100);
}
if (rate === "great"){
  return Math.ceil(amount*15/100);
}
if (rate === "good"){
  return Math.ceil(amount*10/100);
}
if (rate === "poor"){
  return Math.ceil(amount*5/100);
}
if (rate === "terrible"){
  return Math.ceil(amount*0/100);
}
  else{
    return "Rating not recognised";
  }
}
