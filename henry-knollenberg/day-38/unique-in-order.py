# split sequence
# iterate over the list
# has it just been seen? justseen = s
# if not justseen, then append
# return list

def unique_in_order(sequence):
    justseen = ""
    lst = []
    for s in sequence:
        if not s == justseen:
            lst.append(s)
        justseen = s
    return lst