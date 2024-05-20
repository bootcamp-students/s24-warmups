# parameters- take two array and add them together
# return- the sum of the two arrays.
# example- ([1, 2, 3], [4, 5, 6]), 21

def array_plus_array(arr1,arr2):
    total = sum(arr1) + sum(arr2)
    return total

"""
    Ember's Feedback:
    - Great job! Much more concise than JS :cries:
"""


# Alternative Solution
def array_plus_array(arr1, arr2):
    return sum(arr1 + arr2)
