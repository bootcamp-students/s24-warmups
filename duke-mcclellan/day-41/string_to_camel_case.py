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
    return s[0] + ''.join(i.capitalize() for i in s[1:])