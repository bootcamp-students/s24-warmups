# parameters- write a parser and run Deadfish
# return- the output of the parse. 
# example- parse("ioioio"), [1,2,3]

def parse(data):
    result = []
    counter = 0
    for char in data:
        if char == 'i':
            counter += 1
        elif char == 'd':
            counter -= 1
        elif char == 's':
            counter **= 2
        elif char == 'o':
            result.append(counter)
        else:
            continue
        
    return result