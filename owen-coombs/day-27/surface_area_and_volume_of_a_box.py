def get_size(w, h, d):
    solution_array = []
    area = 2 * d * w + 2 * d * h + 2 * h * w
    volume = w * h * d
    solution_array.append(area)
    solution_array.append(volume)

    return solution_array


# look up math solution lol
# append to array

"""
    Ember's Feedback:
    - rename this file to conform to the class standard
    - Great job!
"""

# Alternative Solution


def get_size(w, h, d):
    area = 2 * (w * h + h * d + w * d)
    volume = w * h * d
    return [area, volume]
