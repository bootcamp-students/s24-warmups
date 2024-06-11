# parameters- How many breaks it takes to break chocolate into 1x1
# return- the number of breaks it takes to break the chocolate into small squares. if invalid return 0
# example (5, 5) = 24
#


def break_chocolate(n, m):
    if n <= 0 or m <= 0:  # check if the problem is invalid
        return 0  # if so return 0

    else:
        # calculate total number of squares then subtract 1 as each break creates a new square.
        return n * m - 1


"""
    Ember's Feedback:
    - Parameters means the variables in the function signature, they capture the arguments -
      given to your function when it is called. What you wrote is the prompt, not the parameters.

      The params here are n: int and m: int
       (they represent the 2 dimensions of the chocolate bar in whole integer arbitrary units)
"""
