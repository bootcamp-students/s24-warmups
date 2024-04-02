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
              break;
            case "POOR":
              return Math.ceil(amount * 0.05);
              break;
            case "GOOD":
              return Math.ceil(amount * 0.1);
              break;
            case "GREAT": 
              return Math.ceil(amount * 0.15);
              break;
            case "EXCELLENT":
              return Math.ceil(amount * 0.2);
              break;
            default: 
              return "Rating not recognised";
        }
      }