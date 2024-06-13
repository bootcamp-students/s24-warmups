def is_solved(board):
    previous_value = board[0][0]
    for first_level in board:
        for second_level in first_level:
            if second_level < previous_value:
                return False
            else:
                previous_value = second_level
    return True
    
    
    
#parameters - 2d array 
#return  tru or false 
#iterate through 2darrat, nestes for loop
#check next number to previous number, if next number is less than previous, return false
#if make it through both without returning flase, return true