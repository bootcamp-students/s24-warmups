import math 

def century(year):
    return math.ceil(year/100)


"""
Parameters- find the century of the year 
Return- my function should return the math solution that can show what century we're in
Example- 18, 'Testing for year 1705', 17, 'Testing for year 1601'
Concerns- I use the wrong method to solve this problem 
Explain- this is similar to when I solved this with javascript.
I need to take the year and divide it by 100 and use math.ceil to roound up to the nearest whole number. 
"""