import math
def coin_combo(cents):
    return [cents % 5, cents % 25 % 10 // 5, cents % 25 // 10, cents // 25]

"""
    Ember's Feedback:
    - good job
"""
