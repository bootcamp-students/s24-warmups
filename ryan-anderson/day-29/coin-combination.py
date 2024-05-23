def coin_combo(cents):
    quarters = cents - (cents % 25)
    cents -= quarters
    dimes = cents - (cents % 10)
    cents -= dimes
    nickels = cents - (cents % 5)
    cents -= nickels
    return [cents, nickels / 5, dimes / 10, quarters / 25]


# use modulo to find number of quarters, then subtract that number of cents
# repeat for each type of coin

"""
    Ember's Feedback:
    - Good job!
    - not the easiest code to read but it is ok
"""


# Alternative Solution
def coin_combo(cents):
    quarters = cents // 25
    dimes = cents % 25 // 10
    nickels = cents % 25 % 10 // 5
    pennies = cents % 25 % 10 % 5
    return [pennies, nickels, dimes, quarters]
