## Parameters - integer
## Return - integer
## Example - if you are given a chocolate bar of size 2 x 1 you can split it 
##to single squares in just one break, but for size 3 x 1 you must do two breaks.
## Concern - wrong method 
## Explain - using an if statement and setting a placeholder for n and m
## and multiplying the two together minus the breaks needed for the bar
## since there is always only one less break than squares.

def break_chocolate(n, m):
    if n <= 0 or m <= 0:
        return 0
    return (n * m) - 1
