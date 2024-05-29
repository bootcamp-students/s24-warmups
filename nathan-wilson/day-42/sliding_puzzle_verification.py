def is_solved(board):
    print("the board: ", board)
    outer_array = []
    for array in board:
        for element in array:
            outer_array.append(element)
        
    print("outer array: ", outer_array)
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