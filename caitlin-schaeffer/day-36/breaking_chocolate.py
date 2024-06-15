#
# Instructions: Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and
# unbreakable. Implement a function that will return minimum number of breaks needed.
# Example: For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break,
# but for size 3 x 1 you must do two breaks.
# Params: given values of m and n
# Return: basically it's area - 1
# Concerns: handling 0
# Solution: if/else setting a case for m and n being 0
# Given Code:
# def break_chocolate(n, m):
#     return 0


def break_chocolate(n, m):
    if m <= 0 and n <= 0:
        chocolate = 0
    else:
        chocolate = (m * n) - 1
    return chocolate


"""
    Ember's Feedback:
    - Good work!
    - nothing to add here, easy peasy
"""
