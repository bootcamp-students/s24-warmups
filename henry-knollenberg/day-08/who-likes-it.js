/* Switch statement. 
  If 0 names in the array, then 'no one likes this'
  If 1 name in the array, then - name 'likes this'
  If 2 names in the array, then - name "and" name "like this"
  If 3 names in the array, then - name, name "and" name "like this"
  If 4 or more names in the array, then - name, name, "and" array.length - 2 "others like this"
*/


function likes(names) {
    const length = names.length;
    switch (length) {
        case 0:
          return `no one likes this`;
        case 1:
          return `${names[0]} likes this`;
        case 2:
          return `${names[0]} and ${names[1]} like this`;
        case 3: 
          return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default: 
          return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
    }
  }