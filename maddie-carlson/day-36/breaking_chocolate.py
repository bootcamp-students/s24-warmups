def break_chocolate(n, m):
    #function takes two numbers, n and m, representing dimensions of a chocolate bar
    #needs to return how many times the chocolate bar can be broken into pieces
    #calculated easily with n * m - 1
    
    if n == 0 or m == 0: #guard
        return 0
    
    return n * m - 1
