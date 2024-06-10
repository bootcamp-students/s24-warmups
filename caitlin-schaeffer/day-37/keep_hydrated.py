# Instructions: Nathan loves cycling. Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour 
# of cycling. You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
# Example: 
# time = 3 ----> litres = 1
# time = 6.7---> litres = 3
# Params: time in hours (integer)
# Return: number of litres Nathan will drink (integer)
# Concerns: rounding down instead of up 
# Solution: just time integer times .5 rounded down
# Given code:
# def litres(time):
#     return 0


def litres(time):
    water = int(time * .5)
    return water

