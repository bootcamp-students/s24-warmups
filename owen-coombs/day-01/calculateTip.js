function calculateTip(amount, rating) {


  let tip = 0
  if(rating.toLowerCase() === "terrible"){
    tip = 0
  }
  else if(rating.toLowerCase() === "poor"){
    tip = 0.05*amount 
    
  }
    
  else if(rating.toLowerCase() === "good"){
    tip = 0.10*amount
    console.log("in good")
    
  }
    
  else if(rating.toLowerCase() === "great"){
    tip = 0.15*amount 
    
  }
    
  else if(rating.toLowerCase() === "excellent"){
    tip = 0.20*amount 
    
  }
    
  else{
      console.log ("in else")
      return "Rating not recognised"
    
    }
    
    return Math.ceil(tip);
  }


// use math ceil
//   let terrible = "0%"
//   let poor = "5%"
//   let good = "10%"
//   let great = "15%"
