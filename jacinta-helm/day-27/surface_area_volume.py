def get_size(w, h, d):
    result = []
    result.append(2 * (w * h) + 2 * (w * d) + 2 * (h * d))
    result.append(w * d * h)
    return result


# Parameters are to find the total surface of area and volume
# Return, my function should return the area and volume
# Example 4, 2, 6), [88,48]
# Concerns, mixing my math up for finding the solution
# Explain to find the volume, I will take w * h * d
# to get the area I will take 2*(w*h) + 2*(d*h) + 2*(w*d)
# I have to then put the two numbers in a list

"""
    Ember's Feedback:
    - please rename file to be snake_case
    - good work :)
"""


# Alternative Solution
def get_size(w, h, d):
    area = (2 * d * w) + (2 * d * h) + (2 * h * w)
    volume = d * w * h
    return [area, volume]
