// Make a tipping function
//Should we use a switch statement with percentages? its case, content, break
// No, use if else 

// Make a tipping function
//Should we use a switch statement with percentages? its case, content, break
// No, use if else 
// Parameters: tip ratings (terrible, poor, good, great, excellent)
// amount is a number, rating is a string
// it is looking for us to return a number (tip)
// 20 * .2 (20%) is 4, which is an excellent rating tip

// Make a tipping function
//Should we use a switch statement with percentages? its case, content, break
// No, use if else 
// Parameters: tip ratings (terrible, poor, good, great, excellent)
// amount is a number, rating is a string
// it is looking for us to return a number (tip)
// 20 * .2 (20%) is 4, which is an excellent rating tip

function calculateTip(amount, rating) {
    let tip = 0;
    rating = rating.toLowerCase();
    // this make it case insensitive
    
    // so for the example test,  tip = amount * .2(excellent) 
    if ( rating == 'terrible') {
      tip = Math.ceil(((0/100) * amount))
      return tip;
    }
    else if ( rating == 'poor') {
      tip = Math.ceil(((5/100) * amount))
      return tip;
    }
     else if ( rating == 'good') {
      tip = Math.ceil(((10/100) * amount))
      return tip;
    }
     else if ( rating == 'great') {
      tip = Math.ceil(((15/100) * amount))
      return tip;
    }
     else if ( rating == 'excellent') {
      tip = Math.ceil(((20/100) * amount))
      return tip;
    }
    else {
      return 'Rating not recognised'
    }
  }


/*
function calculateTip(amount, rating) {
    let tip = 0;
    // so for the example test,  tip = amount * .2(excellent) 
    if ( rating == 'terrible') {
      tip = ((0/100) * amount)
      return tip;
    }
    else if ( rating == 'poor') {
      tip = ((5/100) * amount)
      return tip;
    }
     else if ( rating == 'good') {
      tip = ((10/100) * amount)
      return tip;
    }
     else if ( rating == 'great') {
      tip = ((15/100) * amount)
      return tip;
    }
     else if ( rating == 'excellent') {
      tip = ((20/100) * amount)
      return tip;
    }
  }
  
   */ 




/*
function calculateTip(amount, rating) {
    if ((0/100) * amount) {
      console.log('terrible');
    }
    else if ((5/100) * amount) {
      console.log('poor');
    }
      else if ((10/100) * amount) {
      console.log('good');
    }
      else if ((15/100) * amount) {
      console.log('great');
    }
      else if ((20/100) * amount) {
      console.log('excellent');
    }
  }
    
    */
    /* switch (amount, rating) {
      case '+=0%':
      console.log('Terrible');
      break;
      case '+=5%':
      console.log('poor');
      break;
      case '+=10%':
      console.log('good');
      break;
      case '+=15%':
      console.log('great');
      break;
      case '+=20%':
      console.log('excellent');
      break;
  }
  }
  */
  
  /*
  DESCRIPTION:
  Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.
  You need to consider the following ratings:
  Terrible: tip 0%
  Poor: tip 5%
  Good: tip 10%
  Great: tip 15%
  Excellent: tip 20%
  The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:
  "Rating not recognised" in Javascript, Python and Ruby...
  ...or null in Java
  ...or -1 in C#
  Because you're a nice person, you always round up the tip, regardless of the service.
  */ 
