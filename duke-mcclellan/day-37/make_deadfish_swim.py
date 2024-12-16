##Parameters - commands that are one character long
##Return - array of integers
##Example - parse("iiisdoso")  ==>  [8, 64]
##Concern - wrong method
##Explain - I need to use parse to take the four characters

##CODE NOT COMPLETED


def parse(data):
    value = 0
    lst = []
    for char in data:
        if char == "i":
            value += 1
        if char == "o":
            lst.append(value)
    return lst


"""
    Ember's Feedback:
    - please come through and complete this :D
"""
