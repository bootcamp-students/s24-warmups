##Parameters - Integers
##Return - String in the form of a phone number
##Example - ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) # => returns "(123) 456-7890"
##Concern - Wrong method
##Explain - I want to split the string of numbers and join them in a different
##format using string literals to format.


def create_phone_number(n):
    digits = ''.join(map(str, n))
    n = f"({digits[:3]}) {digits[3:6]}-{digits[6:]}"
    return n

