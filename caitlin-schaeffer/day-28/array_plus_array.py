# # Instructions: I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
# P.S. Each array includes only integer numbers. Output is a number too.
# Examples: [1, 2, 3], [4, 5, 6]) = 21
# Params: given arrays
# Return: integer
# Concerns: none
# Solution: sum each array and then add those sums together

# Given Code:
# def array_plus_array(arr1,arr2):
#     pass

# Logic:
# def array_plus_array(arr1,arr2):
#     answer1 = sum of arr1
#     answer2 = sum of arr 2
#     answer = answer1 + answer2

def array_plus_array(arr1,arr2):
    answer1 = sum(arr1)
    answer2 = sum(arr2)
    answer = answer1 + answer2
    return answer
"""
    Ember's Feedback:
    - good work!
"""


# Alternative Solution
def array_plus_array(arr1, arr2):
    sum(arr1 + arr2)
