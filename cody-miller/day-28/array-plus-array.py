def array_plus_array(arr1,arr2):
    summedList = sum(arr1) + sum(arr2)
    return summedList


# We are given two arrays and are asked to add them.
# The output should be a single number
# Using the spread operator will sum the two arrays.
# I will need to extract the sum from the array.

"""
    Ember's Feedback:
    - no mime type on file
    - file is not  snake_case, which is the convention for python files
    - variable names by convention in python are written as snake_case
"""


# Alternative Solution
def array_plus_array(arr1, arr2):
    return sum(arr1 + arr2)
