// Procedural examples
// Example 1, we go line by line doing our calculations and updating our variables
function coinCombo(cents) {
    let currentTotal = cents;
    let coinArray = [0, 0, 0, 0];

    if (currentTotal >= 25) {
      coinArray[3] = Math.floor(currentTotal / 25);
      currentTotal = currentTotal - 25 * Math.floor(currentTotal / 25);
    }

    if (currentTotal >= 10) {
      coinArray[2] = Math.floor(currentTotal / 10);
      currentTotal = currentTotal - 10 * Math.floor(currentTotal / 10);
    }

    if (currentTotal >= 5) {
      coinArray[1] = Math.floor(currentTotal / 5);
      currentTotal = currentTotal - 5 * Math.floor(currentTotal / 5);
    }

    if (currentTotal >= 1) {
      coinArray[0] = currentTotal;
    }

    return coinArray;
  }

  // Example 2, "functional" example
  function coinCombo(cents) {
    let coins = [25, 10, 5, 1]
    let remainder = cents
    return coins.map(coin => {
      let coinsInCents = Math.floor(remainder / coin)
      remainder %= coin
      return coinsInCents
    }).reverse();
  }

  // Example 3, while loop
  // credit to RyanKHawkins, Tarantino23 from the solution section on code wars
  var coinCombo = function (cents) {
    // who can tell me what is going on with this line
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

  // Example 4 recursion
  function coinCombo(cents) {
    function helper(cents, coins) {
        if (cents === 0) {
            return coins;
        } else {
            if (cents >= 25) {
                coins[3]++;
                return helper(cents - 25, coins);
            } else if (cents >= 10) {
                coins[2]++;
                return helper(cents - 10, coins);
            } else if (cents >= 5) {
                coins[1]++;
                return helper(cents - 5, coins);
            } else {
                coins[0]++;
                return helper(cents - 1, coins);
            }
        }
    }

    return helper(cents, [0, 0, 0, 0]);
}
