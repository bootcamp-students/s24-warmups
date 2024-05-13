'''
Parameters- centuries. year 1 - 100 = century 1, second = 101 - 200
return- given a year, return the century that it belongs to.
example- 1705 = 18
explain- This one was pretty simple. take the year, divide by 100, return the math.ceil of
that number. just dividing by 100 would give you ex. 17.05 using math.ceil we round up to 18.
Positive self talk- Keep your face to the sunshine and you cannot see a shadow. Helen Keller
'''

import math

def century(year):
    print(year/100)
    return math.ceil(year/100)
