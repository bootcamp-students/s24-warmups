def array_plus_array(arr1,arr2):
    sum_one = 0
    sum_two = 0
    for i in arr1:
        sum_one += i
    for j in arr2:
        sum_two += j
    return sum_one + sum_two

#initialize sum variables for each array
#loop over each array adding each element to sum
#add the two sums together