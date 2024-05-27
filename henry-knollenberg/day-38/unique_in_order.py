# split sequence
# iterate over the list
# has it just been seen? justseen = s
# if not justseen, then append
# return list

def unique_in_order(sequence):
    just_seen = ""
    lst = []
    for s in sequence:
        if not s == just_seen:
            lst.append(s)
        just_seen = s
    return lst