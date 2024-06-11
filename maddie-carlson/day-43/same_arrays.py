def comp(array1, array2):
    # function takes two arrays, and returns a boolean saying if the arrays "match"
    # a matching array includes the same elements regardless of order and multiplicity (example given is squares)

    # first check to make sure neither of the arrays are null
    if array1 == None or array2 == None:
        return False  # return false, doesn't make sense

    # then check if the arrays are the same length
    if len(array1) != len(array2):
        return False  # can't possibly match if they aren't the same length

    # to solve, sort the arrays after taking care of any negative numbers
    for i in range(len(array1)):
        array1[i] = abs(array1[i])
        array2[i] = abs(array2[i])

    array1.sort()
    array2.sort()

    # then loop over the arrays to make sure the arrays match
    for i in range(len(array1)):
        num = array1[i]
        num2 = array2[i]

        if num * num == num2:  # check squares
            continue
        elif num == num2 * num2:
            continue
        else:  # doesn't match
            return False

    # if the loop completes without incident, return True
    return True


"""
    Ember's Feedback:
    - Good job getting to green!
    - Don't directly modify parameter arrays! It is the same deal as in JS, you alter the list in other areas of code and will cause bugs.
      I don't care that it is "just a kata" because this is a code behavior you can and should be practicing now if you want to get the most of this program!
      By directly modify, I mean how you override the array elements like on line 15 and calling .sort() instead of using sorted()
    - Squaring a number already makes it positive so the abs calls are unnecessary anyway.
    - You can leverage the built in behavior of comparison operator for lists in python to make this code much more succinct.
"""


# Alternative Solution
def comp(array1, array2):
    try:
        # list comprehension here squares all values of array1, -
        # then we sort to leverage the built in comparison operator behavior for lists
        return sorted([i**2 for i in array1]) == sorted(array2)
    except:
        return False
