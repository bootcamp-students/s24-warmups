def find_short(s):
    word_list = s.split()
    min_len = 9999
    for w in word_list:
        if len(w) < min_len:
            min_len = len(w)
    return min_len

#split string into array of words
#initialize min length variable at 9999 to ensure something in array will be shorter than it
#loop over array, if a word is shorter than current min length then it becomes new min length