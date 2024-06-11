# Instructions: Given a board of NxN, distributed with tiles labeled 0 to N² - 1(inclusive):
# A solved grid will have the tiles in order of label, left to right, top to bottom.
# Example:
# For example, a 2x2 solved grid:

# [ [0, 1],
#   [2, 3] ]
# Params: 2d array
# Return: True or False
# Concerns: multiple array board
# Solution:
# Given code:
# def is_solved(board):

# basically you just need to compare the values!


def is_solved(board):
    track_value = []
    for level in board:
        if level < track_value:
            return False
        else:
            track_value = level
    return True


"""
    Ember's Feedback:
    - this doesn't work
"""
