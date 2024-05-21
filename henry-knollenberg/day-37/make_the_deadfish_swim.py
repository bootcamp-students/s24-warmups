# split into list
# iterate over list
# initial value = 0
# if i + 1, if d -1, if s ** 2, if o return value

def parse(data):
    init_value = 0
    return_lst = []
    
    for x in data:
        if x == "i":
            init_value += 1 
        if x == "d": 
            init_value -= 1 
        if x == "s": 
            init_value = init_value ** 2 
        if x == "o": 
            return_lst.append(init_value)
    return return_lst
    