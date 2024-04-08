/*
Params: The function takes cents value (int) and needs to return the minimum number of coins combination of the same value.
Return: Minimum number of coin combination of the same value:
The function should return an array where
coins[0] = pennies ==> $00.01
coins[1] = nickels ==> $00.05
coins[2] = dimes ==> $00.10
coins[3] = quarters ==> $00.25
Ideas: I think an if/else statement would work? Basically what is happening is that 
we're identifying how a number ('cents') can be broken down into the change category. Recursion or while loop
Solution: 

Provided code:
function coinCombo (cents) {
	return [];

Example: 75 [0, 0, 0, 3]
}
*/ 

const coins = {
penny: 1, nickle: 5, dime: 10, quarter: 25, 
}

//we're basically writing a function where everything is divided from the highest number and then the remainder is passed down to the next modulo expression.

function coinCombo (cents) {
    let quarterCount = Math.floor(cents/25);
// example: 35 % 25 = 10
    let totalMinusQuarters = cents % 25;
    let dimeCount = Math.floor(totalMinusQuarters/10);
    let remainderMinusDimes = totalMinusQuarters % 10;
    let nickleCount = Math.floor(remainderMinusDimes/5);
    let remainderMinusNickles = remainderMinusDimes % 5;
    let pennyCount = remainderMinusNickles;
    let returnArray = [pennyCount, nickleCount, dimeCount, quarterCount];
    /*
    while (cents > 0) {
        cents = cents - coins.quarter
    }
    */
    return returnArray;
}


/* if (cents === 0){
        return [];
    } else {
        if (cents >= coin0) {
            remainder = (cents - coin0);
            return coin0.concat(coinCombo(remainder, coins));
        } else {
            coins.shift();
            return coinCombo(coins);
        }
    }