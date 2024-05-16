def coin_combo(cents):
    centList = [0, 0, 0, 0]
    currentTotal = cents

    if currentTotal // 25 > 0:
        centList[3] = currentTotal // 25
        currentTotal -= currentTotal // 25 * 25

    if currentTotal // 10 > 0:
        centList[2] = currentTotal // 10
        currentTotal -= currentTotal // 10 * 10

    if currentTotal // 5 > 0:
        centList[1] = currentTotal // 5
        currentTotal -= currentTotal // 5 * 5

    if currentTotal // 1 > 0:
        centList[0] = currentTotal // 1
        currentTotal -= currentTotal // 1 * 1

    return centList

# takes an integer

# returns an array representing 4 coins

# (1), [1, 0, 0, 0]

# I could have a type error or math error

# Take the cents first modulus 25 and // it and see if it is larger than 0, if so add that and subtract the new total
# repeat until you've done all cents

# I can do this

"""
    Ember's Feedback:
    - Great job!
    - good use of that flooring division
"""


# Alternative Solution
def coin_combo(cents):
    quarters = cents // 25
    dimes = cents % 25 // 10
    nickels = cents % 25 % 10 // 5
    pennies = cents % 25 % 10 % 5
    return [pennies, nickels, dimes, quarters]
