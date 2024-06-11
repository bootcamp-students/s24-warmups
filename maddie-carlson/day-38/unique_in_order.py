def unique_in_order(sequence):
    # function takes a "sequence" that could either be an array or a string
    # needs to return an array that has the non-repeating elements in order of appearance

    # to solve, loop over the sequence and tabulate unique elements - can't count adjacent elements
    unique = []
    for i in range(len(sequence)):
        element = sequence[i]
        if not element in unique:  # new elements go in the pot, automatically
            unique.append(element)
        else:  # check both the prior element, if it matches, ignore it
            if i > 0 and element != sequence[i - 1]:
                unique.append(element)

    return unique


"""
    Ember's Feedback:
    - Great work :)
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
