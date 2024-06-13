def unique_in_order(sequence):
    result = []
    for i, item in enumerate(sequence):
        if i == 0 or item != sequence[i - 1]:
            result.append(sequence[i])
    return result
    
    
    
    
#     result = [sequence[0]]
#         if first[-1] == l:
#             continue
#         else:
#             first.append(l)
       


# Parameters sequence and making a list 
# Return My function should print a list of items without repeating duplicates
# Example, ('ABBCcAD')== ['A', 'B', 'C', 'c', 'A', 'D']; [1, 2, 2, 3, 3])   == [1, 2, 3]
# Concerns, I use the wrong method to complete this function 
# explain-  create the first iterable so that i can have something to loop over for the starting point. the start the loop.
