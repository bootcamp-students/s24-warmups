def unique_in_order(sequence):
    newList = []
    
    for i, item in enumerate(sequence):
        if i == 0 or item != sequence[i - 1]:
            newList.append(sequence[i])
    
    return newList
