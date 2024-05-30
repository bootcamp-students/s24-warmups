##two arracys... compare if they are the same
## with the sam multiplicities
## the same mens
## elements in b ar ein a sqeared??
"""
if it's multiply then it is the same 

split the array or iterate
"""

def comp(array1, array2):
    if type(array1) != list or type(array2) != list:
        return False
    result = []
    for integer in array1:
        result.append(integer * integer)
    return sorted(result) == sorted(array2)
    # your code
	