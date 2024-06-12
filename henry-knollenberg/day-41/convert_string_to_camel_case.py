# Parameters - string 
# Return - string camel case
# split into list
# iterate over list
    # if next to be capitalized is true, return capital and set not next to be capitalized
    # else if - or _ return "", and set next to be capitalized
    # else, set not next to be capitalized and return itself
# return joined list string

def to_camel_case(text):
    lst = []
    for letter in text:
        lst.append(letter)
        
    next_cap = False
    lst_return = []
    for l in lst:
        if next_cap == True:
            lst_return.append(l.capitalize())
            next_cap = False
        elif l == "-" or l == "_":
            next_cap = True
        else:
            lst_return.append(l)
            next_cap = False   
    return "".join(lst_return)