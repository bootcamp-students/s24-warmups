import math


def litres(time):
    # function takes time in hours, needs to return the amount of water a cyclist drinks during that time, rounded down
    # they drink 0.5 litres of water per hour, can be easily solved with math.floor(time * 0.5)
    return math.floor(time * 0.5)


"""
    Ember's Feedback:
    - Good job :D
"""


# Alternative Solutions
def litres(time):
    return int(time * 0.5)


def litres(time):
    return time // 2
