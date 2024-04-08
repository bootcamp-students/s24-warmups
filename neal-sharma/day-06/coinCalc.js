/* precept
parameters- need to make an array of coin values and get those depending on what the coinCombo is.
return- return the amount of coins needed to get the coin combo. 
example- coinCombo(6) --> [1, 1, 0, 0] one penny, one nickel to get 6
concerns- just figuring out how to turn pseudocode into real code
explain- determine cents and then use the biggest coin until the next smaller coin is needed. once
the number is = to cents break the loop. array starts at 0 goes to 3. got messed up here.
tried 1-4 at first.
positive self talk- I can figure it out. thinking maybe math.floor? * went with if else if
because i understand it best. im sure there are better ways. 
translate- if cents is greater than 25 use quarter then subtract that quarter from cents. if 
cents greater than 10 use dime then subtract 10 from cents, if cents
greater than 5 use nickels then subtract 5 from cents, if cents greater than 1 use pennies
then subtract 1 from cents. 
*/

function coinCombo (cents) {
	let coins = [0,0,0,0];
  for(let i = 0; i < 99; i++) {
    if (cents >= 25) {
      coins[3]++;
      cents = cents - 25;
    } else if (cents >= 10) {
      coins[2]++;
      cents = cents - 10;
    } else if (cents >= 5) {
      coins[1]++;
      cents = cents - 5;
    } else if (cents >= 1) {
      coins[0]++;
      cents = cents - 1;
    } else {
      break; // Break out of the loop if there are no more cents remaining
    }
  }

  return coins;
}