# return - true or false
# iterate through 2d array, nested for loop
# check next number to previous number, if next number is less than previous, return false
#   if make it through both without returning false, return true


def is_solved(board):
    previous_value = board[0][0]
    for first_level in board:
        for second_level in first_level:
            if second_level < previous_value:
                return False
            else:
                previous_value = second_level
    return True


"""
    Ember's Feedback:
    - Good job!
"""
