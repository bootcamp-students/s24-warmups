def break_chocolate(n, m):
    if n == 0 or m == 0:
        return 0
    return n * m -1

"""
    Ember's Feedback:
    - Good work! Best solution
    - This is an example of the "concern" in the PRECEPT acronym.
      The concern is, how should my function handle input that is zero (a chocolate bar can't be 0 wide)
      The answer for this kata was zero, because the tests written for the function wanted zero.
"""