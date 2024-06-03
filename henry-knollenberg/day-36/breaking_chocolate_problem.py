# if n > 0 and m > 0
# breaks = (n-1) + n(m-1)


def break_chocolate(n, m):
    if n > 0 and m > 0:
        return (n - 1) + (m - 1) * n
    return 0

"""
    Ember's Feedback:
    - Great work :D
    - I am having a hard time wrapping my head around how your solution
        and the alternative solution both work the same. Math is hard 😩
"""


# Alternative Solution
def break_chocolate(n, m):
    if n > 0 and m > 0:
        return n * m - 1
    return 0
