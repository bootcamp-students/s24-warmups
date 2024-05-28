def array_plus_array(arr1,arr2):
    # takes two arrays of numbers, needs to return the sum of all the elements in the array
    # to solve, simply loop over both arrays, summing each element, and return

    sum = 0

    for i in range(len(arr1)):
        sum += arr1[i]
    for i in range(len(arr2)):
        sum += arr2[i]

    return sum


"""
    Ember's Feedback:
    - Good work :D
    - there is actually a really easy syntax in python for this
"""


# Alternative Solution
def array_plus_array(arr1, arr2):
    return sum(arr1 + arr2)
