# P-w, h, d
# R-[area, volume]
# pseudocode is identical to solution


def get_size(w, h, d):
    area = (2 * d * w) + (2 * d * h) + (2 * h * w)
    volume = d * w * h
    return [area, volume]


"""
    Ember's Feedback:
    - Good job!
    - rename file to use snake_case
"""
