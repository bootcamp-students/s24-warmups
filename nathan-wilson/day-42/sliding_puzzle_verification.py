def is_solved(board):
    outer_array = []
    for array in board:
        for element in array:
            outer_array.append(element)

    if outer_array == sorted(outer_array):
        return True

    else:
        return False


# an array with sub arrays

# a boolean

# ([[0,1],[2,3]]), True

# I could have a math or type error

# loop through the outer array, for each inner array append them to an array to then check if they are in order

# I can do this!

"""
    Ember's Feedback:
    - Good job :D
    - This is good, but it is a little more complicated than it needs to be
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
