def get_size(w, h, d):
    answer_array = []
    area = 2 * d * w + 2 * d * h + 2 * h * w
    volume = w * h * d
    answer_array.append(area)
    answer_array.append(volume)
    return answer_array


# i need to do 2 different equations over the given numbers
# and append them to an array in order

"""
    Ember's Feedback:
    - good job!
"""
# Alternative Solution


def get_size(w, h, d):
    area = 2 * (w * d + h * d + h * w)
    volume = w * h * d
    return [area, volume]
