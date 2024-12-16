# parameters- given a string of letters or a list of numbers
# return- list of letters or numbers without any repeats
# example- unique_in_order('ABBCcAD')== ['A', 'B', 'C', 'c', 'A', 'D']
# i tried to do this some other ways than my previous kata but wasnt getting them to work.
# tried filter but i was returning the letters that were filtered instead of a new array.


def unique_in_order(sequence):
    result = []
    for i, item in enumerate(sequence):
        if i == 0 or item != sequence[i - 1]:
            result.append(sequence[i])
    return result


"""
    Ember's Feedback:
    - good work!
"""
