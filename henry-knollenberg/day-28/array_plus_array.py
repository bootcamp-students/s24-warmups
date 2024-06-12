# arr1 + arr2 = joinedArr
# iterate through joined array
# return accumulator


def array_plus_array(arr1, arr2):
    joinedArr = arr1 + arr2
    acc = 0
    for x in joinedArr:
        acc += x
    return acc


"""
    Ember's Feedback:
    - make file name snake_case
    - Great work!
    - Python actually makes this even easier than JS
"""


# Alternative Solution
def array_plus_array(arr1, arr2):
    return sum(arr1 + arr2)
