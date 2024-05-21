# if n > 0 and m > 0
# breaks = (n-1) + n(m-1)
 

def break_chocolate(n, m):
    if n > 0 and m > 0:
        return (n-1)+(m-1)*n
    return 0