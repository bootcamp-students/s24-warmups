from functools import reduce
def array_plus_array(arr1,arr2):
    sum1 = reduce(lambda acc, cur: acc + cur, arr1, 0) # 2 arg acc and cur and returns the sum
    sum2 = reduce(lambda acc, cur: acc + cur, arr2, 0) # 2 arg acc and cur and returns the sum
    return sum1 + sum2 

# use lamba to create anyonmous function
# return sum1 + sum2 
    
    
