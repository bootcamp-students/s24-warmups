# function findShort(s){
#     return Math.min(...s.split(" ").map (s => s.length));


# function findShort(s){
# 	var arr = s.split(' ');
# 	var smallest = arr[0];
# 	for (var i = 0; i < arr.length; i++) {
# 		if(arr[i].length < smallest.length){
# 			smallest = arr[i];
# 		}
# 	}
# 	return smallest.length;
# }


def find_short(s):
    word = s.split()
    short = min(word, key=len)
    return len(short)


"""
    Ember's Feedback:
    - file is not  snake_case, which is the convention for python files
"""
# Alternative Solution


def find_short(s):
    return min(map(len, s.split()))
