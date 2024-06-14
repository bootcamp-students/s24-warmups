##Parameters - array
##Return - boolean
##Example - a1 = [121, 144, 19, 161, 19, 144, 19, 11]
##a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
##output: true
##Concern - over complicating the problem
##Explain - I need to sort items of the arrays and return if the values are the same in no particular order
##Positive Talk - You can do it


def comp(array1, array2):

    if array1 is None or array2 is None:
        return False

    if len(array1) != len(array2):
        return False

    array1_squared = [x * x for x in array1]

    return sorted(array1_squared) == sorted(array2)


"""
    Ember's Feedback:
    - Excellent job!!
    - This is the ideal solution :D
"""
