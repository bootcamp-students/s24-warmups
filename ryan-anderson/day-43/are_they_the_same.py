def comp(array1, array2):
    # return false if either array is None
    if array1 == None or array2 == None:
        return False

    # return false if one of the arrays is empty, but not the other
    if array1 == [] and array2 != []:
        return False
    # if both arrays are empty, true should be returned
    if array1 != [] and array2 == []:
        return False

    # changes negative numbers in array1 to positive
    for i in range(0, len(array1)):
        # so that sorting will put numbers in order of absolute value
        if array1[i] < 0:
            array1[i] *= -1

    array1 = sorted(array1)  # sorts arrays in numerical order so that
    array2 = sorted(array2)  # entries can be directly compared by index

    for i in range(0, len(array1)):
        # checking by indices will check whether the elements in array2
        if array2[i] != array1[i] ** 2:
            # have the same multiplicity as the corresponding elements in array1
            return False
    return True


# check if all values in array2 are the square of a value in array1
# return true or false

"""
    Ember's Feedback:
    - Don't include print statements, you won't include them in code on the job
    - Good use of guard statements!
    - Squaring a number makes it positive, so you can simplify this code and remove a loop
    - The comparison operator in Python will check the values of two lists, in order. So you can remove the 2nd for loop as well.
"""


# Alternative Solution
def comp(array1, array2):
    try:
        # list comprehension here squares all values of array1, -
        # then we sort to leverage the built in comparison operator behavior for lists
        return sorted([i**2 for i in array1]) == sorted(array2)
    except:
        return False
