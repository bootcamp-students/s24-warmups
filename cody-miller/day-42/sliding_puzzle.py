def is_solved(board):
    n = len(board)
    expected_value = 0
    
    for i in range(n):
        for j in range(n):
            if board[i][j] != expected_value:
                return False
            expected_value += 1
            
    return True

"""
    Ember's Feedback:
    - changed file name to meet industry standard convention of snake case
    - Good job
"""