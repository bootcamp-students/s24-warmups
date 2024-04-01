function calculateTip(amount, rating) {
    //convert rating to lowercase for case-insensitive comparison
    //if loop for rating
    //calculate tip based on rating
      let newrating = rating.toLowerCase()
      if (newrating == 'terrible') {
        return 0
      } else if (newrating == 'poor') {
        return Math.ceil(amount * .05)
      } else if (newrating == 'good') {
        return Math.ceil(amount * .1)
      } else if (newrating == 'great') {
        return Math.ceil(amount * .15)
      } else if (newrating == 'excellent') {
        return Math.ceil(amount * .2)
      } else {
       return 'Rating not recognised'
      }
    }