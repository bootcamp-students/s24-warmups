# parameters - given a board of tiles labels 0 to N2 - 1
# return true if the tiles are in order from left to right, top to bottom.
# else return false
# example- (is_solved([[0,1],[2,3]]), True)

def is_solved(board):
    
    x = len(board) # determine size of grid
    expected = list(range(x * x)) # create expected order 
    flat = [tile for row in board for tile in row] # flatten 2d to 1d
    
    return flat == expected # compare the flat and the expected