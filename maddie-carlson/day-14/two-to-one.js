function longest(s1, s2) {
  //function takes two strings that only have (lowercase) letters a to z
  //needs to return the longest possible sorted string containing unique letters from each string
  
  //to solve, first split both strings into arrays
  //then create a main array that will store our letters
  //loop over both sentences, adding any letters that aren't already in the main array to it
  let s1_arr = s1.split("")
  let s2_arr = s2.split("")
  let main = []
  
  for (let i = 0; i < s1_arr.length; i++) {
    if (main.indexOf(s1_arr[i]) === -1) { //item not present
      main.push(s1_arr[i]) //push it
    } //else, continue
  }
  
  for (let i = 0; i < s2_arr.length; i++) {
    if (main.indexOf(s2_arr[i]) === -1) { //item not present
      main.push(s2_arr[i]) //push it
    } //else, continue
  }
  
  //afterwards, sort the main array, join it back into a string, and return it
  return main.sort().join("")
}
