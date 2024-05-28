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

# henry:
# def is_solved(board):
#     previous_value = board[0][0]
#     for first_level in board:
#         for second_level in board:
#             if second_level < previous_value:
#                 return False
#             else:
#                 previous_value = second_level
#     return True

# could get rid of one of the for loops by doing a .every 

