import math
def litres(time):
    return math.floor(time / 2)


# drink 0.5 liters per hour
# given time in hours, return total liters drunk
# round to smallest value (floor?)

"""
    Ember's Feedback:
    - Good job :D
"""


# Alternative Solution
def litres(time):
    return int(time * 0.5)


def litres(time):
    return time // 2
