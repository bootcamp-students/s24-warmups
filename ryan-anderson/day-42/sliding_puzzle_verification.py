def is_solved(board):
    for list in board:
        for i in range(
            1, len(list)
        ):  # iterates through each list, checking if list is in order
            if list[i] < list[i - 1]:
                return False
    for i in range(1, len(board)):
        if max(board[i]) < max(board[i - 1]):  # check if entire board is in order
            return False
    return True


# return true if individual lists are in order and board of lists is in order
# return false if any list is not in order, or max of a list is > max of a subsequent list

"""
    Ember's Feedback:
    - Good job getting to green!
    - This is more complicated than it needs to be. You can check for the last element in the previous list
      by simply keeping track of the last element in a variable.
"""


# Alternative Solution
def is_solved(board):
    last_seen = board[0][0]
    for row in board:
        for element in row[1:]:
            if last_seen > element:
                return False
            else:
                last_seen = element

    return True
