'''
parameters- remove spaces from string.
return- the string without spaces.
example- "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
explain- The toughest part of this kata was just remembering the differences in python and 
javascript syntax. we split the string. I originally was trying to split('') and was getting 
an error. But that wasn't working. then when i was returning i was doing split.join('') which is
Positive self talk- Once you replace negative thoughts with positive ones, you'll start having positive results. Willie Nelson
again the javascript way. but we got there.
'''

def no_space(x):
    split = x.split(' ')
    print(split)
    return ''.join(split)