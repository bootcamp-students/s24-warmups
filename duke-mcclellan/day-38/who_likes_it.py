##parameters - integer
##return - string
##example - ["Jacob", "Alex"]  -->  "Jacob and Alex like this"
##concern - wrong method
##explain - I want to create a method that will return a certain string depending on the likes


def likes(names):
    n = len(names)
    
    if n == 0:
        return "no one likes this"
    elif n == 1:
        return f"{names[0]} likes this"
    elif n == 2:
        return f"{names[0]} and {names[1]} like this"
    elif n == 3:
        return f"{names[0]}, {names[1]} and {names[2]} like this"
    else:
        return f"{names[0]}, {names[1]} and {n - 2} others like this"