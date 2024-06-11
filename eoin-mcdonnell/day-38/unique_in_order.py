def unique_in_order(sequence):
    arr = []
    current_char = str
    for char in sequence:
        if char != current_char:
            arr.append(char)
            current_char = char
            
    return arr