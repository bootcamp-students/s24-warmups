# parameters- given a string of words return the shortest word / words
# example- ("bitcoin take over the world maybe who knows perhaps"), 3
# syntax tripped me up a bit here because i kept trying to do javascript by habit. 

import math


def find_short(s):
    words = s.split(' ')
    shortest = min(map(lambda word: len(word), words))
    return shortest