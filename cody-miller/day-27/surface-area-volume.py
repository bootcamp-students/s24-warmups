def get_size(w, h, d):
    area = 2 * (w * d + h * d + h * w)
    volume = w * h * d
    return [area, volume]


# Its a box. You multiply sides together

"""
    Ember's Feedback:
    - no mime type on file
    - file is not  snake_case, which is the convention for python files
"""
