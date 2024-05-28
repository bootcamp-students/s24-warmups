# if length 1, 2, 3, or else
#   1 - name0 likes this
#   2 - name0 and name1 like this
#   3 - name0, name1 and name2 like this
#   4 - name0, name1 and 2 others like this


def likes(names):
    if len(names) == 0:
        return "no one likes this"
    elif len(names) == 1:
        return f"{names[0]} likes this"
    elif len(names) == 2:
        return f"{names[0]} and {names[1]} like this"
    elif len(names) == 3:
        return f"{names[0]}, {names[1]} and {names[2]} like this"
    else:
        return f"{names[0]}, {names[1]} and {len(names) - 2} others like this"


"""
    Ember's Feedback:
    - Good job!
    - Python has so many helpful ways of doing this! How fun :D
"""


# Alternative Solutions
def likes(names):
    match len(names):
        case 0:
            return "no one likes this"
        case 1:
            return f"{names[0]} likes this"
        case 2:
            return f"{names[0]} and {names[1]} like this"
        case 3:
            return f"{names[0]}, {names[1]} and {names[2]} like this"
        case _:
            return f"{names[0]}, {names[1]} and {len(names) - 2} others like this"


# OR
def likes(names):
    n = len(names)
    return {
        0: "no one likes this",
        1: "{} likes this",
        2: "{} and {} like this",
        3: "{}, {} and {} like this",
        4: "{}, {} and {others} others like this",
    }[min(4, n)].format(*names[:3], others=n - 2)


# OR
def likes(names):
    match names:
        case []:
            return "no one likes this"
        case [a]:
            return f"{a} likes this"
        case [a, b]:
            return f"{a} and {b} like this"
        case [a, b, c]:
            return f"{a}, {b} and {c} like this"
        case [a, b, *rest]:
            return f"{a}, {b} and {len(rest)} others like this"
