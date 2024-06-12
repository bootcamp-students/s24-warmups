def is_solved(board):
    # function takes a list of lists showing a "board" of a sliding puzzle
    # needs to return if the board is solved, aka all numbers are in order (1, 2, 3, 4), or not
    # the board is always a square, so we can find the length of the array and the subarrays by checking the outer array
    length = len(board)

    last_value = -1  # first value of a solved board should be 0

    # to solve, loop over the array to make sure each subsequent element is 1 greater than the last
    for i in range(length):  # board loop
        for j in range(length):  # row loop
            cur_value = board[i][j]
            if last_value + 1 == cur_value:
                last_value = cur_value  # set last value
                continue  # continuous (so far)
            else:
                return False  # non-continuous, board isn't solved

    # if the loop completes without throwing a false, the board is solved
    return True


"""
    Ember's Feedback:
    - Great work! :D
"""


# Alternative Solution
def is_solved(board):
    track_value = board[0][0]
    for level in board:
        if level < track_value:
            return False
        else:
            track_value = level
    return True
