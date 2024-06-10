def comp(array1, array2):
    if type(array1) is list and type(array2) is list:
        array1 = sorted([abs(number) for number in array1])
        array2 = sorted([abs(number) for number in array2])

        if len(array1) != len(array2):
            return False

        for i in range(len(array1)):
            if abs(array1[i]) ** 2 != abs(array2[i]):
                return False

        return True

    else:
        return False


# an array of integers

# a boolean

#  a1 = [121, 144, 19, 161, 19, 144, 19, 11]
#  a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
#  True

# I could do the math wrong or have a type error

# sort both arrays individually, then if they are the same length ill loop through them and compare
# them by their indexes and check if b is the square of a, if all of them are then ill return true else false

# I can do this

"""
    Ember's Feedback:
    - Good job!
    - In your logic you checked for length first, but in the code you sorted first. It would be more -
      performant if you moved that length check to line 3, that way you don't sort an array you know doesn't match.
    - You used list comprehension to get the absolute value of the number in the list, so you don't need to do it again on line 10.
      Also, squaring a number makes it positive so you can remove the abs() calls altogether.
    - You sorted both arrays so that they would be in the same order, so what you can do is in the list comprehension on line 3 for array1,
      go ahead and square the values there. Then you can get rid of the for loop entirely. Python does that for you with the equality operator on lists.
    - See the refactored code below that implements what I said above.
"""


# Refactor
def comp(array1, array2):
    if type(array1) is list and type(array2) is list:
        if len(array1) != len(array2):
            return False

        array1 = sorted([number**2 for number in array1])
        array2 = sorted(array2)

        return array1 == array2

    else:
        return False


# Alternative Solution
def comp(array1, array2):
    try:
        return sorted([i**2 for i in array1]) == sorted(array2)
    except:
        return False
