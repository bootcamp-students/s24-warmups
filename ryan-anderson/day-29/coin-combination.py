def coin_combo(cents):
    quarters = (cents - (cents % 25))
    cents -= quarters
    dimes = (cents - (cents % 10))
    cents -= dimes
    nickels = (cents - (cents % 5))
    cents -= nickels
    return [cents, nickels / 5, dimes / 10, quarters / 25]

#use modulo to find number of quarters, then subtract that number of cents
#repeat for each type of coin