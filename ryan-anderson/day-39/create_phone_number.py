def create_phone_number(n):
    return f'({n[0]}{n[1]}{n[2]}) {n[3]}{n[4]}{n[5]}-{n[6]}{n[7]}{n[8]}{n[9]}'


# take input list of 10 digits and return them as (###) ###-####
# use f string to place digits in required format

"""
    Ember's Feedback:
    - Great work!
"""


# Alternative Solution
def create_phone_number(n):
    return "({}{}{}) {}{}{}-{}{}{}{}".format(*n)
