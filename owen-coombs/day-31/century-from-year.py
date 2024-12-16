import math
def century(year):
    return math.ceil(year / 100)


# use math ceil
# return mail.ceil and year / 100

"""
    Ember's Feedback:
    - Great work! :D
    - make all .py and .sql file names snake_case
"""


# Alternative Solutions
def century(year):
    return year // 100 + (1 if year % 100 != 0 else 0)


def century(year):
    return (year + 99) // 100


def century(year):
    return (year - 1) // 100 + 1
