##parameter - integer
##return - array
##example - coins[0] = pennies ==> $00.01
# coins[1] = nickels ==> $00.05
# coins[2] = dimes ==> $00.10
# coins[3] = quarters ==> $00.25
##concern - new language.  Trying to figure out the correct way to do this in python
##explain - did a while loop to loop through the values and length in the array to return the amounts of coins.
##positive self-talk
##translate -
def coin_combo(cents):
    coins = [0, 0, 0, 0]
    coin_values = [1, 5, 10, 25]
    for i in range(len(coin_values) - 1, -1, -1):
        while cents >= coin_values[i]:
            cents -= coin_values[i]
            coins[i] += 1
    return coins


"""
    Ember's Feedback:
    - Great job!
    - Looping in reverse in Python looks so weird, haha
"""


# Alternative Solution
def coin_combo(cents):
    quarters = cents // 25
    dimes = cents % 25 // 10
    nickels = cents % 10 // 5
    pennies = cents % 5
    return [pennies, nickels, dimes, quarters]
