def unique_in_order(sequence):
    if len(sequence) == 0:
        return []
    else:
        output = [sequence[0]]
        for i in range (1, len(sequence)):
            if sequence[i] != sequence [i-1]:
                output.append(sequence[i])
        return output
    
# append each character to a new list if it is not == the character before it

    # needed to initialize output list with first element in sequence, since there is no index '-1' to compare it to
    # needed to handle empty sequences separately by returning []