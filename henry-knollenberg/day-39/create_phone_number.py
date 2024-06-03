# insert (, ),  , and - into list
# join list, return

def create_phone_number(n):
    n.insert(0, "(")
    n.insert(4, ")")
    n.insert(5, " ")
    n.insert(9, "-")
    new_list = []
    for x in n:
        new_list.append(str(x))
    return "".join(new_list)

"""
    Ember's Feedback:
    - you're in your no format variable names era :P
    - Good work :D
    - python is so much better for strings that JS :cries:
"""


# Alternative Solution
def create_phone_number(n):
    return "({}{}{}) {}{}{}-{}{}{}{}".format(*n)
