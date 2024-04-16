var coinCombo = function (cents) {
  let pennies = 0, nickels = 0, dimes = 0, quarters = 0;

  while (cents >= 25) {
    cents -= 25;
    quarters += 1;
  };
  while (cents >= 10) {
    cents -= 10;
    dimes += 1;
  }
  while (cents >= 5) {
    cents -= 5;
    nickels += 1
  }
  while (cents > 0) {
    cents -= 1;
    pennies += 1;
  }
  return [pennies, nickels, dimes, quarters]
}

// how many 25c
// how many 10 cents
// how many 5
// how many 1
// Return them to an array

/*
  Ember's Feedback:
  - Thank you for including pseudo code! Try fleshing it out into full sentences. Tell a story in plain english.
	  Let me know you're going to communicate well in a technical interview. Even if your js has errors, if your
	  pseudo code is locked in you will get hired.
  - Good solution!
  - You have a weird double folder structure going on
*/
// Alternative solution
function coinCombo(cents) {
  let coins = [25, 10, 5, 1]
  let remainder = cents
  return coins.map(coin => {
    let coinsInCents = Math.floor(remainder / coin)
    remainder %= coin
    return coinsInCents
  }).reverse();
}

