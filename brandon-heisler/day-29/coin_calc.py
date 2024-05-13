def coin_combo(cents):
    coin_values = [1, 5, 10, 25]
    
    coin_counts = [0, 0, 0, 0]
    
    for i in range(len(coin_values) - 1, -1, -1):
        coin_counts[i] = cents // coin_values[i]
        cents %= coin_values[i]
    
    return coin_counts

# im given a number representing anumber of coins and need to return an array
# the array should represent pennies, nickels, dimes and quarters in order
# i need to find the minimum number of coins that make the given number and
# return that.
# first i need to set up my coin values for comparison
# then the empty return array
# going to iterate through the list starting with quarters. 
# update empty array index where input is divided by the coin.
# get the remaining cents to go again.
