##Parameters - string
##Return - camel case
##Example - "the-stealth-warrior" gets converted to "theStealthWarrior"
##Concern - wrong method
##Explain - I want to be able to replace dashes and underscore with camel case


def to_camel_case(text):
    s = text.replace("-", " ").replace("_", " ")
    s = s.split()
    if len(text) == 0:
        return text
    return s[0] + "".join(i.capitalize() for i in s[1:])


"""
    Ember's Feedback:
    - Good work!
    - It is better to move your "guard statement, ie len(text) == 0, to the top of the function.
        That way, you don't do unnecessary work on input you know is invalid.
    - You just copy and pasted "wrong method" on all these for concern, but the above guard statement
        does address an actual concern. For this kata, how should you handle an argument of empty string getting
        passed to your function? You could have put another statement checking that text is in fact a string and not 
        the None type. Anticipating how your code can fail and determining your desired behavior when you get into those
        code paths is what the concern section of PRECEPT is for.
"""


# Refactor
def to_camel_case(text):
    if len(text) == 0:
        return text
    if type(text) is not str:
        return None
    s = text.replace("-", " ").replace("_", " ")
    s = s.split()
    return s[0] + "".join(i.capitalize() for i in s[1:])
