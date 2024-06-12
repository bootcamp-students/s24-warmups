# hours * .5 rounded down

import math

def litres(time):
    return math.floor(time * 0.5)

"""
    Ember's Feedback:
    - Good work :D
"""


# Alternative Solution
def litres(time):
    return int(time * 0.5)


def litres(time):
    return time // 2
