# insert (, ),  , and - into list
# join list, return

def create_phone_number(n):
    n.insert(0, "(")
    n.insert(4, ")")
    n.insert(5, " ")
    n.insert(9, "-")
    newlst = []
    for x in n:
        newlst.append(str(x))
    return "".join(newlst)