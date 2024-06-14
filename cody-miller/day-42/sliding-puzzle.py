def is_solved(board):
    n = len(board)
    expected_value = 0
    
    for i in range(n):
        for j in range(n):
            if board[i][j] != expected_value:
                return False
            expected_value += 1
            
    return True