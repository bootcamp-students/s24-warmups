def break_chocolate(n, m):
    if n * m < 1:
        return 0
    else:
        return n * m - 1


# Takes two integers

# expects an integer to be returned

# (5, 5), 24

# I could get the math wrong or have a type error

# Multiply n and m minus 1 and return that

# I can do this!

"""
    Ember's Feedback:
    - A real concern for this problem is: what do you do if n or m are zero?
      The answer is, you return 0 from your function, because that is what the kata wants.
      That is what I wanted to convey with the C in PRECEPT, how to prevent errors and think about behavior.
"""
