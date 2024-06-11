def unique_in_order(sequence):
    arr = []
    current_char = str
    for char in sequence:
        if char != current_char:
            arr.append(char)
            current_char = char

    return arr


"""
    Ember's Feedback:
    - Never seen that = str on line 3, is that instantiating a new str object which is the same as saying empty string??
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
