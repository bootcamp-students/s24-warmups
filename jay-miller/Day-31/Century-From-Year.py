def century(year):
    if year < 1000:
        return year // 100 + 1
    elif year >= 1000 and year % 100 == 0:
        return year / 100
    else:
        return year // 100 + 1


"""
    Ember's Feedback:
    - Good job!
    - Rename this file to use snake_case
    - I don't understand why you put a case for year < 1000.
        year 200 would fail your logic because it would result in 3, not 2
    - This fails when I submit on Codewars.
        It looks like you got lucky when submitting in that you got through the -
        randomized tests, but this is a simple enough kata that you should have caught this.
        I will still count this as a submission because Codewars failed.
"""


# Alternative Solutions
def century(year):
    return year // 100 + (1 if year % 100 != 0 else 0)


def century(year):
    return (year + 99) // 100


import math


def century(year):
    return math.ceil(year / 100)


def century(year):
    return (year - 1) // 100 + 1
