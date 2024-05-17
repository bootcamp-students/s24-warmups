# parameters- take a number and run it through different coins
# return- what coins are needed to add up to the number given
# example- coinCombo(6) --> [1, 1, 0, 0]
# explain- I got this from you Ember. Thanks
# find the whole number of quarters that goes into cents, then what ever is left over get the whole number of
# dimes that fit into cents, so on until we get to the end of the cents number. return array with the number
# of pennies, nickels, dimes, quarters.
# break down the number of cents with the largest coin first and trickle down. 

def coin_combo(cents):
    quarters = cents // 25
    dimes = cents % 25 // 10
    nickels = cents % 25 % 10 // 5
    pennies = cents % 25 % 10 % 5
    return [pennies, nickels, dimes, quarters]