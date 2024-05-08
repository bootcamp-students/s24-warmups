#find integer count
def find_short(s):
    list = s.split()
    length = float("inf")
    for word in list:
        if(len(word) < length):
            length = len(word)
    return length

# also this woud work

def find_short(s):
#split the wor
  words = s.split()

  #min len for word in wor
  shortest_word_length = min(len(word) for word in words)
  return shortest_word_length