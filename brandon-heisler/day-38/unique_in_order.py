def unique_in_order(sequence):
    result = []
    for i, item in enumerate(sequence):
        if i == 0 or item != sequence[i-1]:
            result.append(sequence[i])
    return result
        
# im given a string or list of numbers. i need to loop over the list and add each individual
# item to a return list with each item only appearing once and in order.
# first i should split the input into a list to loop over.
# then loop over the list and for each item in the list, check to see if its been
# added, if not add it.