import math


def coin_combo(cents):
    # function takes an amount of cents and needs to return it divided into an array of coins
    # [pennies, nickels, dimes, quarters]

    # to solve, init our array and then go down the list, resolving the coins largest to smallest
    coins = [0, 0, 0, 0]

    # go coin by coin, dividing and then setting our remaining coins to the remainder
    if cents >= 25:
        coins[3] = math.floor(cents / 25)
        cents = cents % 25

    if cents >= 10:
        coins[2] = math.floor(cents / 10)
        cents = cents % 10

    if cents >= 5:
        coins[1] = math.floor(cents / 5)
        cents = cents % 5

    # remaining coins are our pennies
    coins[0] = cents

    return coins

"""
    Ember's Feedback:
    - Awesome job :)
"""
# Alternative Solution


def coin_combo(cents):
    quarters = cents // 25
    dimes = cents % 25 // 10
    nickels = cents % 10 // 5
    pennies = cents % 5
    return [pennies, nickels, dimes, quarters]
