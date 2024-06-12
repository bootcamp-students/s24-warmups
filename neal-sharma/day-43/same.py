# parameters- check if the value is none, a and be have the same length, and if a is represented in b as either
# the equivalent or the squared value


def comp(array1, array2):

    if array1 is None or array2 is None:
        return False  # make sure the values are not none

    if len(array1) != len(array2):
        return False  # make sure the length of each array is the same.

    squared_a = {}
    for num in array1:  # loop
        squared = num * num  # square the number and add it to the dictionary
        if (
            squared in squared_a
        ):  # if the number already exists increase its count {121: 1}
            squared_a[squared] += 1
        else:
            squared_a[squared] = (
                1  # if the number is not in the dictionary we make it a value
            )
            # and make its count 1

    b_list = {}
    for num in array2:  # loop
        if num in b_list:
            b_list[num] += 1  # if num exists in dictionary increase its count
        else:
            b_list[num] = (
                1  # if num does not exist put it into dictionary with a count of 1
            )

    return squared_a == b_list


"""
    Ember's Feedback:
    - Good work!
    - I did not know you could use comparison on dictionaries like that, good find!
"""


def comp(array1, array2):
    try:
        return sorted([i**2 for i in array1]) == sorted(array2)
    except:
        return False
