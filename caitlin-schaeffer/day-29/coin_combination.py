# Instructions: The function takes cents value (int) and needs to return the minimum number of coins combination of the same value.
# The function should return an array where
# coins[0] = pennies ==> $00.01
# coins[1] = nickels ==> $00.05
# coins[2] = dimes ==> $00.10
# coins[3] = quarters ==> $00.25
# Examples: coinCombo(6) --> [1, 1, 0, 0]
# Params: given an integer
# Return: returns an array
# Concerns: naming all of the coins or just using the values in the function
# Solution: Use the double slash (//) to progressively divide it up.

# Given Code:
# def coin_combo(cents):
#     return


# Notes:
# // = Division (floor): divides the first operand by the second
# so if we use that we can stack up the division basically
# % = Modulus: returns the remainder when the first operand is divided by the second

def coin_combo(cents):
    # start with pennies and work up to quarters
    return [cents % 5, cents % 25 % 10 // 5, cents % 25 // 10, cents // 25]

# pennies = % 5, give the remainder of cents after seeing how much 5 can go into it, and whatever the remainder is is pennies (less than 5)
# nickles = cents % 25 % 10 // 5, takes away the modulo of 25 (quarters) and 10 (dimes), and then divides by 5 for nickles
# dimes= follows the same logic as nickles, but just need to take out quarters and then divide by 10
# quarters then you just need to divide cents by 25

"""
    Ember's Feedback:
    - good job!!
"""
