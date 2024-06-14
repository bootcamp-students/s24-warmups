def unique_in_order(sequence):
    if len(sequence) == 0:
        return []
    
    split_array = list(sequence)
    final_array = []
    
    final_array.append(split_array[0])
    for i in range(1, len(split_array)):
        if split_array[i-1] != split_array[i]:
            final_array.append(split_array[i])
                   
    return final_array
    
# a string

# an array

# ("AAAABBBCCDAABBB"), ["A", "B", "C", "D", "A", "B"]

# I could have a type error or a logic error

# take the sequence use a map to get all unique characters upper and lowercase and return them as an array

# I can do this!