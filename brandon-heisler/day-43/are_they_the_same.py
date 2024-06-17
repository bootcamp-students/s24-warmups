from collections import Counter

def comp(a, b):
    if a is None or b is None:
        return False
    if len(a) != len(b):
        return False
    
    counter_a = Counter(a)
    counter_b = Counter(b)
    
    for key in counter_a:
        if counter_a[key] != counter_b.get(key * key, 0):
            return False
    
    return True

# first we have to check for arrays with nothing in them or unequal lengths.
# after this we can set up counters for each list. counters do what they imply, formatting
# lists to show each item and how many of them there are. 
# then we can do a comparison with some math to check if the first element of a is equal to 
# the square root of the first element of b. return true or fals depending on outcome.