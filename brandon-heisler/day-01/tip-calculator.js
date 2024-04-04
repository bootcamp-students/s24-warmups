function calculateTip(amount, rating) {

var rate = rating.toLowerCase();

if(rate == "excellent"){
  return Math.ceil(amount*.2);
}
else if(rate == "great"){
  return Math.ceil(amount*.15);
}

else if(rate == "good"){
  return Math.ceil(amount*.10);
}

else if(rate == "poor"){
  return Math.ceil(amount*.05);
}

else if(rate == "terrible"){
  return Math.ceil(amount*0);
}

else{
return("Rating not recognised");
}
  
}