def is_solved(board):
    n = len(board)
    
    formatted_board = [tile for row in board for tile in row]
    print(formatted_board)
    
    expected_board = list(range(n * n))
    print(expected_board)
    
    return formatted_board == expected_board

# i have to check if a "slide puzzle board" is solved. its just a series of lists.
# they have to be in numerical order as im understanding it. left to right and top to bottom.
# ill format the board into a single list in numerical order.
# ill create an expected board based off of the length of the original
# and compare the two. if they match, its solved
