def get_size(w, h, d):
    volume = w * h * d
    sa = 2 * (w * h) + 2 * (h * d) + 2 * (w * d)
    return [sa, volume]


"""
    Ember's Feedback:
    - Good job!
"""
