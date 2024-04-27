/*precept
parameters- take two strings of letters and sort them
return- a single string that contains all the letters 
in the two strings in alphabetical order with each letter
only showing once.
example-"aretheyhere", "yestheyarehere"), "aehrsty"
concerns- combining two strings. only filtering repeat letters
getting it in alpahebetical order. need to use sort.
which means ill need to split i believe. well get there.
ill need to split the two strings into single letters in an
array. then join them. sort them. i may need to filter double
letters
explain- split the strings
combine the strings
sort the combination
filter out duplicates with index
join the filtered array and return a string
return that joined string

positive self talk-"You are braver than youbelieve, stronger
than you seem, and smarter than you think." - A.A. Milne
*/

"use strict";
function longest(s1, s2) {
  let split1 = s1.split('');
  let split2 = s2.split('');
  let combine = split1.concat(split2);
  let sorted = combine.sort();
  let filtered = sorted.filter((char, index) => {
    return sorted.indexOf(char) === index;
  });
  let joined = filtered.join('');
  return joined;
}