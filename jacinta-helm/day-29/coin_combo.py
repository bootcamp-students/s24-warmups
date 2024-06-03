def coin_combo(cents):
    quarters = cents // 25
    dimes = cents % 25 // 10
    nickels = cents % 25 % 10 // 5
    pennies = cents % 25 % 10 % 5

    return [pennies, nickels, dimes, quarters]


# Parameter is to create coin combinations
# Return- my function should return how many cents it takes to get the value
# Example - takes 6 and returns, 1 Penny, 1 Nickel.'coin_combo(6),[1, 1, 0, 0]
# Concern- I use the wrong method or my math will be completely off
# Explain I set each variable to equal to the total divided by the amount of its value.
# as I move down the list of variables, get the remainder of bigger values as well

"""
    Ember's Feedback:
    - Good work :D Really excellent code.
"""


# Alternative Solution
def coin_combo(cents):
    quarters = cents // 25
    dimes = cents % 25 // 10
    nickels = cents % 10 // 5
    pennies = cents % 5
    return [pennies, nickels, dimes, quarters]
