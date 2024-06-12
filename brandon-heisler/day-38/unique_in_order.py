def unique_in_order(sequence):
    result = []
    for i, item in enumerate(sequence):
        if i == 0 or item != sequence[i - 1]:
            result.append(sequence[i])
    return result


# im given a string or list of numbers. i need to loop over the list and add each individual
# item to a return list with each item only appearing once and in order.
# first i should split the input into a list to loop over.
# then loop over the list and for each item in the list, check to see if its been
# added, if not add it.

"""
    Ember's Feedback:
    - Great work! The i is zero check is so that you don't error when [0 - 1]
"""


# Alternative Solution
def unique_in_order(sequence):
    returnValue = []

    for value in sequence:
        if len(returnValue) == 0:
            returnValue.append(value)

        elif returnValue[-1] != value:
            returnValue.append(value)

    return returnValue
