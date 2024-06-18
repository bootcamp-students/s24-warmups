def to_camel_case(text):
    
    list = [i for i in text]
#     am getting a list the way i want it.
    result = []
    capitalize = False
    for j in list:
        if j == "_" or j == "-":
            capitalize = True
        else:
            if capitalize == True:
                result.append(j.upper())
                capitalize = False
            else:
                result.append(j)
        print('result:', result)
        
    return ''.join(result)

# need to return a string as the answer.
# I need to take the string and loop over it, checking conditions.
# if I run across a - or _ then the next letter needs to be capitalized.
