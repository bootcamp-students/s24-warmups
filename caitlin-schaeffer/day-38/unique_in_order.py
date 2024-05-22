# Instructions: Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements 
# with the same value next to each other and preserving the original order of elements.
# Example: 
# unique_in_order('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
# Params: given string
# Return: list 
# Concerns: do they mix numbers and letters?
# Solution: you want to look at the element, and then go through the indexes of the elements and compare them one at a time, append the ones
# that are not next to a matching character to the return list
# Given code:
# def unique_in_order(sequence):
#     return

#actual working solution:
def unique_in_order(sequence):
    answer_list = []
    for i, item in enumerate(sequence):
        if i == 0 or item != sequence[i - 1]:
            answer_list.append(sequence[i])
    return answer_list



#working it out 
# def unique_in_order(sequence):
#     answer_array = []
#     for seq in sequence:
#         if seq != seq[0] - 1:
#             return answer_array.append(seq)
#         else:
#             return sequence 
#     return answer_array


#neals workout 
# result = []
# for i, item in enumerate(sequence):
#     if i == 0 or item != sequence[i - 1]:
#         result.append(sequence[i])
# return result