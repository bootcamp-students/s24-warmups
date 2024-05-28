# split sequence
# iterate over the list
# has it just been seen? just_seen = s
# if not just_seen, then append
# return list


def unique_in_order(sequence):
    just_seen = ""
    lst = []
    for s in sequence:
        if not s == just_seen:
            lst.append(s)
        just_seen = s
    return lst


"""
    Ember's Feedback:
    - Good work!
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
