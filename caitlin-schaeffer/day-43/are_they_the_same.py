# Instructions: Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have 
# the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). 
# "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
# Example: Valid arrays:
# a = [121, 144, 19, 161, 19, 144, 19, 11]  
# b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
# comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square 
# of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:
# a = [121, 144, 19, 161, 19, 144, 19, 11] 
# b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
# Params: given two arrays 
# Return: true/false
# Concerns: squaring the numbers, unordered equality
# Solution: converting squared list to a set and comparing using subset
# Given code:
# def comp(array1, array2):


#Pseudo-code: Take array a, square every number, then check if array b contains *all* of those squared numbers, return true if true,
# return false if false 

# Python set issubset() method returns True if all elements of a set A are present in another set B which is passed as an argument.
#sorted() returns a new list


def comp(array1, array2):
    if array1 == [] and array2 == []:
        return True
    elif array1 == [] or array2 == []:
        return False
    new_list = [i**2 for i in array1]
    
    sorted_new = sorted(new_list)
    sorted_b = sorted(array2)
    
    return sorted_new == sorted_b


#we need to sort array 2 and new list and take away my sets 
# def comp(array1, array2):
#     print('ARRAY!: ', array1)
#     print('ARRAY@: ', array2)
#     if array1 == [] and array2 == []:
#         return True
#     elif array1 == [] or array2 == []:
#         return False
#     new_list = [i**2 for i in array1]
#     print('New List: ', new_list)
#     set_x = set(new_list)
#     set_y = set(array2)
    
#     if set_x == [] and set_y == []:
#         return False
#     elif set_x == [] or set_y == []:
#         return False
#     else:
#         z = set_y.issubset(set_x)
#         return z