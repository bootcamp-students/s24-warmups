function absentVowel(x){
  //takes a string, all the strings are missing a single vowel out of a, e, i, o, u
  //need to check each vowel's inclusion in the sentence
  //needs to return an index from 0 to 4 based on the vowel
  
  x = x.toUpperCase();
  
  //check A, then E, then I, then O, then assume U if none of the others fired
  if (!x.includes("A")) {
    return 0 //missing a
  } else if (!x.includes("E")) {
    return 1 //missing e
  } else if (!x.includes("I")) {
    return 2 //missing i
  } else if (!x.includes("O")) {
    return 3 //missing o
  } else {
    return 4 //assume missing u, given parameters
  }
}
