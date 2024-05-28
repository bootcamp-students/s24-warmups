##parameters - 
##return - century of a year.  Integer
##example - 1705 --> 18
##concern - Wrong method 
##explain - I want to use a math function to round up the year to the century
##positive self-talk - You can do it!
##translate -
import math


def century(year):
    return (year + 99) // 100
