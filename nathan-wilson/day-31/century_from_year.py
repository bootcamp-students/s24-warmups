import math

def century(year):
    return math.ceil(year / 100)

# an integer

# an integer

# (1705), 18

# I could do the math wrong, or have a type error

# take the year, divide it by 100 and math.cel/return the result

# I can do this

"""
    Ember's Feedback:
    - Great work! :D
"""


# Alternative Solutions
def century(year):
    return year // 100 + (1 if year % 100 != 0 else 0)


def century(year):
    return (year + 99) // 100


def century(year):
    return (year - 1) // 100 + 1
