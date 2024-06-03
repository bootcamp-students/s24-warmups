# Parameters - a, b
# Return - true or false
# iterate over array a
    # if same each true, if not then return false
    # square each element
    # iterate over array b, check for same
        #if not, same = false
# if make it through iterations, return true

def comp(array_1, array_2):
    if type(array_1) == list and type(array_2) == list and len(array_1) == len(array_2):
        squared_array = []
        for a in array_1:
            squared_array.append(a ** 2)
        sorted_1 = sorted(squared_array)
        sorted_2 = sorted(array_2)
        print(sorted_1, sorted_2)
        i = 0
        same = False
        for s in sorted_1:
            if s == sorted_2[i]:
                same = True
            if same == False:
                return False
            same = False
            i = i + 1
        return True
    else:
        return False

	