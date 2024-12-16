##Parameters - array
##Return - boolean
##Example - For example, a 2x2 solved grid:
# [ [0, 1],
#   [2, 3] ]
# A 2x2 unsolved grid:

# [ [2, 1],
#   [0, 3] ]

##concern - wrong method
##Explain - I want to be able to iterate over random boards and determine if they
##pass or fail.


def is_solved(board):
    return [cell for row in board for cell in row] == list(range(len(board) ** 2))


"""
    Ember's Feedback:
    - Good work! Very succinct
"""
