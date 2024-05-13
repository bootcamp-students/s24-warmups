import math
def century(year):
    if year % 100 == 0:
        return year // 100
    else:
        newYear = math.ceil(year // 100 +1)
        return newYear 

# need to return what century this is.
# return should be an int. 
# i can divide the year by 100 and if it has no remainder return it.
# if it cant be divided evenly, i need to round up and add 1 to the result.
