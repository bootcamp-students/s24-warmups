#parameters- pretty simple. if elif with the length of the names list.
#return- how many likes depending on the length of the names array.
#example- ["Peter"]-->  "Peter likes this"

def likes(names):
    length = len(names)
    
    if length == 0:
        return 'no one likes this'
    elif length == 1:
        return f'{names[0]} likes this'
    elif length == 2:
        return f'{names[0]} and {names[1]} like this'
    elif length == 3:
        return f'{names[0]}, {names[1]} and {names[2]} like this'
    else:
        return f'{names[0]}, {names[1]} and {length - 2} others like this'