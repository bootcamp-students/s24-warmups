# if % by 100 = 0, then return divided by 100
# else divide by 100, round down, and add 1, return

import math

def century(year):
    if year % 100 == 0:
        return year / 100
    else:
        return math.floor(year / 100) + 1
    return