# create a list representing [pennies, nickels, dimes, quarters]
# loop through cents while greater than 0
# for each 25 add a quarter to the list, subtract 25 from cents
# for each 10 add a dime, subtract 10 from cents, etc.
# return list

def coin_combo(cents):
    coins = [0, 0, 0, 0]
    while cents > 0:
        if cents >= 25:
            coins[3] += 1
            cents -= 25
        elif cents >= 10:
            coins[2] += 1
            cents -= 10
        elif cents >= 5:
            coins[1] += 1
            cents -= 5
        else:
            coins[0] += 1
            cents -= 1
    return coins