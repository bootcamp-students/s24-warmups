# Parameters - a, b
# Return - true or false
# iterate over array a
# if same each true, if not then return false
# square each element
# iterate over array b, check for same
# if not, same = false
# if make it through iterations, return true


def comp(array_1, array_2):
    if type(array_1) == list and type(array_2) == list and len(array_1) == len(array_2):
        squared_array = []
        for a in array_1:
            squared_array.append(a**2)
        sorted_1 = sorted(squared_array)
        sorted_2 = sorted(array_2)
        i = 0
        same = False
        for s in sorted_1:
            if s == sorted_2[i]:
                same = True
            if same == False:
                return False
            same = False
            i = i + 1
        return True
    else:
        return False


"""
    Ember's Feedback:
    - You wont' include print statements in production code so remove them from these submissions!
    - Good guard statement! What would make it better is if you negate the check, which would allow you to 
        immediately return false and allows the rest of the function to be one level less in indentation.
    - you can use the map function or list comprehension to accomplish squaring the values of array_1
    - In python, you can leverage the default behavior for the equality operator with regards to lists.
      By using == on two lists, python will iterate both and check that the same values are at each index.
"""


# Refactor
def comp(array_1, array_2):
    # negated the boolean logic of this test, equality checks became inequality checks; "and"s became "or"s
    if type(array_1) != list or type(array_2) != list or len(array_1) != len(array_2):
        return False

    sorted_1 = sorted([num**2 for num in array_1])
    sorted_2 = sorted(array_2)

    return sorted_1 == sorted_2
