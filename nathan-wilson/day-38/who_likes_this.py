def likes(names):
    length = len(names)
    
    if length == 0:
        return "no one likes this"
    elif length == 1:
        return f"{names[0]} likes this"
    elif length == 2:
        return f"{names[0]} and {names[1]} like this"
    elif length == 3:
        return f"{names[0]}, {names[1]} and {names[2]} like this"
    else:
        return f"{names[0]}, {names[1]} and {length-2} others like this"
    
# array of names

# string

# ['Jacob', 'Alex']), 'Jacob and Alex like this'

# I could return the incorrect string or have a type error

# if length is 0 or 1 2 3 4+ handle the specific format of the string

# I can do this!