# var uniqueInOrder=function(iterable){
#     return [...iterable].filter((a, i) => a !== iterable[i-1])
# }

def unique_in_order(iterable):
    return [a for i, a in enumerate(iterable) if i == 0 or a != iterable[i-1]]
