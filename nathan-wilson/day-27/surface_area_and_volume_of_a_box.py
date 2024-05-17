def get_size(w,h,d):
    solution = []
    solution.append(2 * w * h + 2 * w * d + 2 * d * h)
    solution.append(w * h * d)
    return solution

# takes 3 numbers

# wants me to return an array of 2 numbers

# 4, 2, 6, [88,48]

# I could have a type error or a math error

# Make an empty array, separately do each calculation and append them to the array

# I can do this!

"""
    Ember's Feedback:
    - Great job!!
"""


# Alternative Solution
def get_size(w, h, d):
    area = 2 * (w * h + h * d + w * d)
    volume = w * h * d
    return [area, volume]
