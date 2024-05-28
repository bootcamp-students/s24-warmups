from functools import reduce


def array_plus_array(arr1, arr2):
    sum1 = reduce(
        lambda acc, cur: acc + cur, arr1, 0
    )  # 2 arg acc and cur and returns the sum
    sum2 = reduce(
        lambda acc, cur: acc + cur, arr2, 0
    )  # 2 arg acc and cur and returns the sum
    return sum1 + sum2


# use lamba to create anonymous function
# return sum1 + sum2


"""
    Ember's Feedback:
    - Rename this file to conform to the class standard, all lower but also snake_case
    - Great job!
    - You can actually do this much simpler in Python
"""


# Alternative Solution
def array_plus_array(arr1, arr2):
    return sum(arr1 + arr2)
