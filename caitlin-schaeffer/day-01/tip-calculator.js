// Make a tipping function
// Should we use a switch statement with percentages? its case, content, break
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
  if (rating == 'terrible') {
    tip = Math.ceil(((0 / 100) * amount))
    return tip;
  } else if (rating == 'poor') {
    tip = Math.ceil(((5 / 100) * amount))
    return tip;
  } else if (rating == 'good') {
    tip = Math.ceil(((10 / 100) * amount))
    return tip;
  } else if (rating == 'great') {
    tip = Math.ceil(((15 / 100) * amount))
    return tip;
  } else if (rating == 'excellent') {
    tip = Math.ceil(((20 / 100) * amount))
    return tip;
  } else {
    return 'Rating not recognised'
  }
}

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

/* Ember's Feedback:
  Please clean these submissions up going forward. Treat these like code you would submit at work.
  In that vein, I cleaned this up to be formatted in a way that is industry standard.
  if you are going to include code that you did not ultimately use, I assume for yourself to reference later, then -
    put the unused code into a notes.js file so that I can see your pseudocode.
  Please pay attention to detail. The assignment was to put these into folders labeled "onboarding, day-01, etc..." and -
    the assignment was to name your files in the format lowercase-name-kata.js
*/
// Alternative Solution
function calculateTip(amount, rating) {
  if (isNaN(amount)) return 0;
  const tip = (percent) => Math.ceil(amount * percent);
  switch (rating?.toLowerCase()) {
    case "terrible":
      return 0;
    case "poor":
      return tip(0.05);
    case "good":
      return tip(0.1);
    case "great":
      return tip(0.15);
    case "excellent":
      return tip(0.2);
    default:
      return "Rating not recognised";
  }
}
