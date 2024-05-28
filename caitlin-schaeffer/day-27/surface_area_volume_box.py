# Instructions: Write a function that returns the total surface area and volume of a box as an array: [area, volume]
# Examples:
# Params:
# Return:
# Concerns:
# Solution:

# Given Code: def get_size(w,h,d):
# your code here


def get_size(w, h, d):
    solution_array = []
    area = 2 * d * w + 2 * d * h + 2 * h * w
    volume = w * h * d

    solution_array.append(area)
    solution_array.append(volume)

    return solution_array


"""
    Ember's Feedback:
    - rename the python files to use snake_case
"""


# Alternative Solution
def get_size(w, h, d):
    area = 2 * (w * d + h * d + h * w)
    volume = w * h * d
    return [area, volume]
