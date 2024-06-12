def coin_combo(cents):
    coins = [1, 5, 10, 25]
    res = [0, 0, 0, 0]
    for i in range(len(coins) - 1, -1, -1):
        while cents >= coins[i]:
            res[i] += 1
            cents -= coins[i]
    return res


# 2 case
def coin_combo(cents):
    return [cents % 5, cents % 25 % 10 // 5, cents % 25 // 10, cents // 25]


"""
    Ember's Feedback:
    - that syntax for reverse looping is something
    - Good job!
"""


# Alternative Solution
def coin_combo(cents):
    quarters = cents // 25
    dimes = cents % 25 // 10
    nickels = cents % 25 % 10 // 5
    pennies = cents % 25 % 10 % 5
    return [pennies, nickels, dimes, quarters]
