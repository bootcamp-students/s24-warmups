import math

def century(year):
    return math.ceil(year/100)


"""
Parameters- find the century of the year
Return- my function should return the math solution that can show what century we're in
Example- 18, 'Testing for year 1705', 17, 'Testing for year 1601'
Concerns- I use the wrong method to solve this problem
Explain- this is similar to when I solved this with javascript.
I need to take the year and divide it by 100 and use math.ceil to round up to the nearest whole number.
"""

"""
    Ember's Feedback:
    - So good!! :D
"""


# Alternative Solutions
def century(year):
    return year // 100 + (1 if year % 100 != 0 else 0)


def century(year):
    return (year + 99) // 100


def century(year):
    return (year - 1) // 100 + 1
